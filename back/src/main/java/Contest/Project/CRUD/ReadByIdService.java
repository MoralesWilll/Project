package Contest.Project.CRUD;

public interface ReadByIdService<Entity, ID>{
    public Entity readById (ID id);
}
