package Contest.Project.controllers.interfaces;

import Contest.Project.CRUD.generic.*;
import Contest.Project.dtos.property.PropertyRequestDTO;
import Contest.Project.dtos.property.PropertyResponseDTO;
import Contest.Project.entities.Property;

public interface IPropertyController extends
        CreateController<PropertyRequestDTO, Property>,
        UpdateController<PropertyRequestDTO, Property, Integer>,
        ReadAllController<PropertyResponseDTO>,
        ReadByIdController<PropertyResponseDTO, Integer>,
        DeleteController<Integer> {
}
