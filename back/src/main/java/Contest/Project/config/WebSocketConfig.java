package Contest.Project.config;

import Contest.Project.entities.Message;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.socket.*;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;

public class ChatHandler extends TextWebSocketHandler {

    private final Map<Integer, CopyOnWriteArrayList<WebSocketSession>> rooms = new HashMap<>();
    private final Map<WebSocketSession, Integer> sessionRoomMap = new HashMap<>();
    private final Map<Integer, CopyOnWriteArrayList<Message>> roomMessages = new HashMap<>();
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws IOException {
        Integer roomId = (Integer) session.getAttributes().get("roomId");
        if (roomId != null) {
            rooms.computeIfAbsent(roomId, k -> new CopyOnWriteArrayList<>()).add(session);
            sessionRoomMap.put(session, roomId);

            // Log connection
            System.out.println("User connected to room: " + roomId);

            // Send previous messages if any
            CopyOnWriteArrayList<Message> messages = roomMessages.get(roomId);
            if (messages != null) {
                for (Message message : messages) {
                    try {
                        session.sendMessage(new TextMessage(objectMapper.writeValueAsString(message)));
                    } catch (IOException e) {
                        System.err.println("Error sending message to session " + session.getId() + ": " + e.getMessage());
                    }
                }
            }
        }
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        Integer roomId = sessionRoomMap.get(session);
        if (roomId != null) {
            Message msg = objectMapper.readValue(message.getPayload(), Message.class);
            msg.setDate(new Date());
            roomMessages.computeIfAbsent(roomId, k -> new CopyOnWriteArrayList<>()).add(msg);

            for (WebSocketSession s : rooms.get(roomId)) {
                try {
                    s.sendMessage(new TextMessage(objectMapper.writeValueAsString(msg)));
                } catch (IOException e) {
                    System.err.println("Error sending message to session " + s.getId() + ": " + e.getMessage());
                }
            }
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        Integer roomId = sessionRoomMap.get(session);
        if (roomId != null) {
            rooms.get(roomId).remove(session);
            sessionRoomMap.remove(session);

            // Log disconnection
            System.out.println("User disconnected from room: " + roomId);

            if (rooms.get(roomId).isEmpty()) {
                // Clear messages if necessary
                roomMessages.remove(roomId);
            }
        }
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) {
        Integer roomId = sessionRoomMap.get(session);
        System.err.println("WebSocket Error in room: " + roomId);
        exception.printStackTrace();
    }
}
