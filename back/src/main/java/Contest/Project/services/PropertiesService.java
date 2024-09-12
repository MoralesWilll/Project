package Contest.Project.services;

import Contest.Project.dtos.property.PropertyRequestDTO;
import Contest.Project.dtos.property.PropertyResponseDTO;
import Contest.Project.entities.Property;
import Contest.Project.interfaces.IPropertiesService;
import Contest.Project.repositories.PropertiesRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class PropertiesService implements IPropertiesService {

    @Autowired
    private PropertiesRepository propertiesRepository;

    @Override
    @Transactional
    public Property create(PropertyRequestDTO propertyRequestDTO) {
        Property propertyEntity = Property.builder()
                .address(propertyRequestDTO.getAddress())
                .price(propertyRequestDTO.getPrice())
                .numberOfBathrooms(propertyRequestDTO.getNumberOfBathrooms())
                .propertySize(propertyRequestDTO.getPropertySize())
                .stratum(propertyRequestDTO.getStratum())
                .description(propertyRequestDTO.getDescription())
                .build();

        return propertiesRepository.save(propertyEntity);
    }

    @Override
    public void delete(Integer id) {
        Property propertyEntity = propertiesRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Propiedad con el ID " + id + " no encontrada!"));

        propertiesRepository.delete(propertyEntity);
    }

    @Override
    public List<PropertyResponseDTO> readAll() {
        List<Property> listProperty = propertiesRepository.findAll();

        List<PropertyResponseDTO> listPropertyResponse = new ArrayList<>();

        for (Property propertyEntity : listProperty) {
            PropertyResponseDTO propertyResponseDTO = new PropertyResponseDTO();
            propertyResponseDTO.setId(propertyEntity.getId_property());
            propertyResponseDTO.setId_user(propertyEntity.getId_user().getId());
            propertyResponseDTO.setAddress(propertyEntity.getAddress());
            propertyResponseDTO.setPrice(propertyEntity.getPrice());
            propertyResponseDTO.setNumberOfBathrooms(propertyEntity.getNumberOfBathrooms());
            propertyResponseDTO.setPropertySize(propertyEntity.getPropertySize());
            propertyResponseDTO.setStratum(propertyEntity.getStratum());
            propertyResponseDTO.setDescription(propertyEntity.getDescription());
            propertyResponseDTO.setPropertyObjectiveId(propertyEntity.getPropertyObjective().getId());
            propertyResponseDTO.setPropertyTypeId(propertyEntity.getPropertyType().getId());
            propertyResponseDTO.setZoneId(propertyEntity.getZone().getId());
            listPropertyResponse.add(propertyResponseDTO);
        }
        return listPropertyResponse;
    }

    @Override
    public PropertyResponseDTO readById(Integer id) {
        Property propertyEntity = propertiesRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Propiedad con el ID " + id + " no encontrada!"));

        PropertyResponseDTO propertyResponse = new PropertyResponseDTO();

        propertyResponse.setId(propertyEntity.getId_property());
        propertyResponse.setId_user(propertyEntity.getId_user().getId());
        propertyResponse.setAddress(propertyEntity.getAddress());
        propertyResponse.setPrice(propertyEntity.getPrice());
        propertyResponse.setNumberOfBathrooms(propertyEntity.getNumberOfBathrooms());
        propertyResponse.setPropertySize(propertyEntity.getPropertySize());
        propertyResponse.setStratum(propertyEntity.getStratum());
        propertyResponse.setDescription(propertyEntity.getDescription());
        propertyResponse.setPropertyObjectiveId(propertyEntity.getPropertyObjective().getId());
        propertyResponse.setPropertyTypeId(propertyEntity.getPropertyType().getId());
        propertyResponse.setZoneId(propertyEntity.getZone().getId());

        return propertyResponse;
    }

    @Override
    public Property update(PropertyRequestDTO entity, Integer id) {
        Property existingProperty = propertiesRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Propiedad con el ID " + id + " no encontrada!"));

        existingProperty.setAddress(entity.getAddress());
        existingProperty.setPrice(entity.getPrice());
        existingProperty.setNumberOfBathrooms(entity.getNumberOfBathrooms());
        existingProperty.setPropertySize(entity.getPropertySize());
        existingProperty.setStratum(entity.getStratum());
        existingProperty.setDescription(entity.getDescription());

        return propertiesRepository.save(existingProperty);
    }
}
