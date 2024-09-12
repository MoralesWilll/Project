package Contest.Project.CRUD.generic;

import org.springframework.http.ResponseEntity;

public interface DeleteController <ID>{
    public ResponseEntity<Void> deleteController(ID id);
}
