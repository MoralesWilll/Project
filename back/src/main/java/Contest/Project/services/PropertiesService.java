package Contest.Project.services;

import Contest.Project.dtos.PropertyDTO;
import Contest.Project.dtos.PropertyResponseDTO;
import Contest.Project.entities.Property;
import Contest.Project.entities.*;
import Contest.Project.repositories.*;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class PropertiesService {

    @Autowired
    private PropertiesRepository propertiesRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PropertyObjectiveRepository propertyObjectiveRepository;

    @Autowired
    private PropertyTypeRepository propertyTypeRepository;

    @Autowired
    private ZoneRepository zoneRepository;

    @Transactional
    public Property create(PropertyDTO propertyRequestDTO) {

        User user = userRepository.findById(propertyRequestDTO.getId_user())
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + propertyRequestDTO.getId_user()));

        PropertyObjective propertyObjective = propertyObjectiveRepository.findById(propertyRequestDTO.getPropertyObjectiveId())
                .orElseThrow(() -> new RuntimeException("PropertyObjective not found with ID: " + propertyRequestDTO.getPropertyObjectiveId()));
        PropertyType propertyType = propertyTypeRepository.findById(propertyRequestDTO.getPropertyTypeId())
                .orElseThrow(() -> new RuntimeException("PropertyType not found with ID: " + propertyRequestDTO.getPropertyTypeId()));
        Zone zone = zoneRepository.findById(propertyRequestDTO.getZoneId())
                .orElseThrow(() -> new RuntimeException("Zone not found with ID: " + propertyRequestDTO.getZoneId()));


        Property propertyEntity = Property.builder()
                .address(propertyRequestDTO.getAddress())
                .description(propertyRequestDTO.getDescription())
                .numberOfBathrooms(propertyRequestDTO.getNumberOfBathrooms())
                .price(propertyRequestDTO.getPrice())
                .propertySize(propertyRequestDTO.getPropertySize())
                .stratum(propertyRequestDTO.getStratum())
                .id_user(user)
                .propertyObjective(propertyObjective)
                .propertyType(propertyType)
                .zone(zone)
                .build();

        return propertiesRepository.save(propertyEntity);
    }

    public void delete(Integer id) {
        Property propertyEntity = propertiesRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Propiedad con el ID " + id + " no encontrada!"));

        propertiesRepository.delete(propertyEntity);
    }

    public List<PropertyDTO> readAll() {
        List<Property> listProperty = propertiesRepository.findAll();

        List<PropertyDTO> listPropertyResponse = new ArrayList<>();

        for (Property propertyEntity : listProperty) {
            PropertyDTO propertyDTO = new PropertyDTO();
            propertyDTO.setId(propertyEntity.getId_property());
            propertyDTO.setId_user(propertyEntity.getId_user().getId());
            propertyDTO.setAddress(propertyEntity.getAddress());
            propertyDTO.setPrice(propertyEntity.getPrice());
            propertyDTO.setNumberOfBathrooms(propertyEntity.getNumberOfBathrooms());
            propertyDTO.setPropertySize(propertyEntity.getPropertySize());
            propertyDTO.setStratum(propertyEntity.getStratum());
            propertyDTO.setDescription(propertyEntity.getDescription());
            propertyDTO.setPropertyObjectiveId(propertyEntity.getPropertyObjective().getId());
            propertyDTO.setPropertyTypeId(propertyEntity.getPropertyType().getId());
            propertyDTO.setZoneId(propertyEntity.getZone().getId());
            listPropertyResponse.add(propertyDTO);
        }
        return listPropertyResponse;
    }

    public PropertyDTO readById(Integer id) {
        Property propertyEntity = propertiesRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Propiedad con el ID " + id + " no encontrada!"));

        PropertyDTO propertyResponse = new PropertyDTO();

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

    public Property update(PropertyDTO entity, Integer id) {
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

    public PropertyResponseDTO createResponse(Property requestedProperty){
        PropertyResponseDTO propertyResponseDTO = new PropertyResponseDTO();
        propertyResponseDTO.setAddress(requestedProperty.getAddress());
        propertyResponseDTO.setPrice(requestedProperty.getPrice());
        propertyResponseDTO.setNumberOfBathrooms(requestedProperty.getNumberOfBathrooms());
        propertyResponseDTO.setPropertySize(requestedProperty.getPropertySize());
        propertyResponseDTO.setStratum(requestedProperty.getStratum());
        propertyResponseDTO.setDescription(requestedProperty.getDescription());
        propertyResponseDTO.setPropertyImages(requestedProperty.getPropertyImages());

        return propertyResponseDTO;
    }
}
