package Contest.Project.CRUD.generic;

import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ReadAllController <Entity> {
    public ResponseEntity<List<Entity>> readAllController();
}
