package pl.kieryk.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.kieryk.backend.model.Friend;
import pl.kieryk.backend.model.User;
import java.util.List;

@Repository
public interface FriendRepository extends JpaRepository<Friend, Long> {

    boolean existsByFirstUserAndSecondUser(User first, User second);

    List<Friend> findByFirstUser(User user);
    List<Friend> findBySecondUser(User user);

}