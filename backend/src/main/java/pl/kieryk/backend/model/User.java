package pl.kieryk.backend.model;

import lombok.Data;
import org.hibernate.annotations.NaturalId;
import pl.kieryk.backend.model.audit.DateAudit;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name = "users", uniqueConstraints = {
                @UniqueConstraint(columnNames = {
                                "email"
                })
})
public class User extends DateAudit {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @NotBlank
        @Size(max = 40)
        private String firstName;

        @NotBlank
        @Size(max = 40)
        private String lastName;

        @NaturalId
        @NotBlank
        @Size(max = 40)
        @Email
        private String email;

        @NotBlank
        @Size(max = 100)
        private String password;

        @ManyToMany(fetch = FetchType.LAZY)
        @JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
        private Set<Role> roles = new HashSet<>();

        @OneToMany(cascade = CascadeType.ALL)
        @JoinColumn(name = "author_id")
        private List<Post> posts = new ArrayList<>();

        @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
        @PrimaryKeyJoinColumn
        private UserDetails userDetails;

        public User() {

        }

        public User(String firstName, String lastName, String email, String password) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.email = email;
                this.password = password;
        }
}