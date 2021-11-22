package pl.kieryk.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.kieryk.backend.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

}