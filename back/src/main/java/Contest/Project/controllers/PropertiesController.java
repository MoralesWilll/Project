package Contest.Project.controllers;

import Contest.Project.dtos.property.PropertyRequestDTO;
import Contest.Project.dtos.property.PropertyResponseDTO;
import Contest.Project.entities.Property;
import Contest.Project.interfaces.IPropertiesService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/raicesUrbanas/properties")
public class PropertiesController implements IPropertiesService {

    @Autowired
    private IPropertiesService propertiesService;


    @Override
    @PostMapping("/create")
    public Property create(PropertyRequestDTO requestDTO) {
        PropertyRequestDTO newProperty = new PropertyRequestDTO();
        return propertiesService.create(newProperty);
    }

    @Override
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        propertiesService.delete(id);
    }

    @Override
    @GetMapping("/readAll")
    public List<PropertyResponseDTO> readAll() {
        List<PropertyResponseDTO> propertyResponse = propertiesService.readAll();
        return ResponseEntity.ok(propertyResponse).getBody();
    }

    @Override
    @GetMapping("/{id}")
    public PropertyResponseDTO readById(@PathVariable Integer id) {
        return propertiesService.readById(id);
    }

    @Override
    @PutMapping("/update/{id}")
    public Property update(@RequestBody PropertyRequestDTO requestDTO, @PathVariable Integer id) {
        Property updateProperty = propertiesService.update(new PropertyRequestDTO(),id);
        return ResponseEntity.ok(updateProperty).getBody();
    }
}
