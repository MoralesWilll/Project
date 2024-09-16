package Contest.Project.controllers;

import Contest.Project.dtos.PropertyDTO;
import Contest.Project.entities.Property;
import Contest.Project.interfaces.IPropertiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/raicesUrbanas/properties")
public class PropertiesController implements IPropertiesService {

    @Autowired
    private IPropertiesService propertiesService;


    @Override
    @PostMapping("/create")
    public Property create(PropertyDTO requestDTO) {
        PropertyDTO newProperty = new PropertyDTO();
        return propertiesService.create(newProperty);
    }

    @Override
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        propertiesService.delete(id);
    }

    @Override
    @GetMapping("/readAll")
    public List<PropertyDTO> readAll() {
        List<PropertyDTO> propertyResponse = propertiesService.readAll();
        return ResponseEntity.ok(propertyResponse).getBody();
    }

    @Override
    @GetMapping("/{id}")
    public PropertyDTO readById(@PathVariable Integer id) {
        return propertiesService.readById(id);
    }

    @Override
    @PutMapping("/update/{id}")
    public Property update(@RequestBody PropertyDTO requestDTO, @PathVariable Integer id) {
        Property updateProperty = propertiesService.update(new PropertyDTO(),id);
        return ResponseEntity.ok(updateProperty).getBody();
    }
}
