package Contest.Project.CRUD;

public interface CreateService<EntityRequest, Entity>{
    public Entity create(EntityRequest request);
}
