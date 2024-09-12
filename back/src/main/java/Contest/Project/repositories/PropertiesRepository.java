package Contest.Project.repositories;

import Contest.Project.entities.Property;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PropertiesRepository extends JpaRepository<Property, Integer> {
}
