package pl.kieryk.backend.model;

import lombok.Data;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@Entity
@Table(name = "usersdetails")
public class UserDetails {

    @Id
    @Column(name = "user_id")
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    @Size(min = 3, max = 250)
    private String description;
    
    @Size(max = 50)
    private String imgURL;

    public UserDetails() {
    }

    public UserDetails(String description, String imgURL, User user) {
        this.description = description;
        this.imgURL = imgURL;
        this.user = user;
    }
}