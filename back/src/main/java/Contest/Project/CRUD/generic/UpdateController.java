package Contest.Project.CRUD.generic;

import org.springframework.http.ResponseEntity;

public interface UpdateController <EntityRequest, Entity, ID>{
    public ResponseEntity<Entity> updateController (EntityRequest request, ID id);
}
