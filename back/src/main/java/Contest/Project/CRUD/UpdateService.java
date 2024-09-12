package Contest.Project.CRUD;

public interface UpdateService<EntityRequest, Entity, ID>{
    public Entity update(EntityRequest entity, ID id);
}
