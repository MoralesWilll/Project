package Contest.Project.CRUD.generic;

import org.springframework.http.ResponseEntity;

public interface ReadByIdController <Entity, ID>{
    public ResponseEntity<Entity> readByIdController(ID id);
}
