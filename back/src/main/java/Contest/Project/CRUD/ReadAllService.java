package Contest.Project.CRUD;

import java.util.List;

public interface ReadAllService<Entity>{
    public List<Entity> readAll();
}
