package Contest.Project.interfaces;

import Contest.Project.CRUD.*;
import Contest.Project.dtos.PropertyDTO;
import Contest.Project.entities.Property;

public interface IPropertiesService extends
        CreateService<PropertyDTO, Property>,
        UpdateService<PropertyDTO, Property, Integer>,
        ReadAllService<PropertyDTO>,
        ReadByIdService<PropertyDTO, Integer>,
        DeleteService<Integer> {
}
