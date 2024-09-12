package Contest.Project.CRUD.generic;

import org.springframework.http.ResponseEntity;

public interface CreateController <EntityRequest, Entity> {
    public ResponseEntity<Entity> createController (EntityRequest request);
}
