package pl.kieryk.backend.payload;

import lombok.Data;
import java.time.Instant;

@Data
public class UserProfile {
    private Long id;
    private String firstName;
    private String lastName;
    private Instant joinedAt;

    public UserProfile(Long id, String firstName, String lastName, Instant joinedAt) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.joinedAt = joinedAt;
    }

}