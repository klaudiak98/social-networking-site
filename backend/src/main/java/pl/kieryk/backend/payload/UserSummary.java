package pl.kieryk.backend.payload;

import lombok.Data;

@Data
public class UserSummary {
    private Long id;
    private String email;
    private String firstName;
    private String lastName;

    public UserSummary(Long id, String email, String firstName, String lastName) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}