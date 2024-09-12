package Contest.Project.interfaces;

import Contest.Project.CRUD.*;
import Contest.Project.dtos.property.PropertyRequestDTO;
import Contest.Project.dtos.property.PropertyResponseDTO;
import Contest.Project.entities.Property;

public interface IPropertiesService extends
        CreateService<PropertyRequestDTO, Property>,
        UpdateService<PropertyRequestDTO, Property, Integer>,
        ReadAllService<PropertyResponseDTO>,
        ReadByIdService<PropertyResponseDTO, Integer>,
        DeleteService<Integer> {
}
