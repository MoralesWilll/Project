package Contest.Project.controllers;

import Contest.Project.controllers.interfaces.IPropertyController;
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

@RestController
@RequestMapping("/raicesUrbanas/properties")
public class PropertiesController implements IPropertyController {

    @Autowired
    private IPropertiesService propertiesService;

    @Override
    @PostMapping("/create")
    public ResponseEntity<Property> createController(@Valid @RequestBody PropertyRequestDTO propertyRequestDTO) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(propertiesService.create(propertyRequestDTO));
    }

    @Override
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteController(@PathVariable Integer id) {
        try {
            propertiesService.delete(id);
            return ResponseEntity.noContent().build(); // 204 No Content
        } catch (EntityNotFoundException error) {
            return ResponseEntity.notFound().build(); // 404 Not Found
        } catch (Exception error) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // 500 Internal Server Error
        }
    }


    @Override
    @GetMapping("/readAll")
    public ResponseEntity<List<PropertyResponseDTO>> readAllController() {
        List<PropertyResponseDTO> propertyResponse = propertiesService.readAll();
        return ResponseEntity.ok(propertyResponse);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<PropertyResponseDTO> readByIdController(@PathVariable Integer id) {
        try {
            PropertyResponseDTO propertyResponse = propertiesService.readById(id);
            return ResponseEntity.ok(propertyResponse);
        } catch (RuntimeException error) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @Override
    @PutMapping("/update/{id}")
    public ResponseEntity<Property> updateController(@RequestBody PropertyRequestDTO propertyRequestDTO, @PathVariable("id") Integer id) {
        Property updateProperty = propertiesService.update(propertyRequestDTO, id);

        return ResponseEntity.ok(updateProperty);
    }
}
