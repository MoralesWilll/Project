package Contest.Project.chat;

import Contest.Project.entities.Message;
import Contest.Project.services.MessageService;
import org.springframework.web.socket.*;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

public class ChatWebSocketHandler extends TextWebSocketHandler {

    private final MessageService messageService;
    private final Map<String, WebSocketSession> sessions = new HashMap<>();

    public ChatWebSocketHandler(MessageService messageService) {
        this.messageService = messageService;
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.put(session.getId(), session);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        // Parse the message or extract info here.
        String payload = message.getPayload();
        int sender = 8; // Hardcoded ID for sender
        int recipient = 9; // Hardcoded ID for recipient
        Message msg = new Message(payload, LocalDateTime.now(), sender, recipient);

        // Save the message to the database
        messageService.saveMessage(msg);

        // Broadcast the message to all connected users
        for (WebSocketSession wsSession : sessions.values()) {
            wsSession.sendMessage(new TextMessage("Message from: " + sender + " -> " + payload));
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        saveTranscript();
        sessions.remove(session.getId());
    }

    private void saveTranscript() {
        // Here you could implement logic to save a transcript of all messages
        System.out.println("Transcript saved.");
    }
}
