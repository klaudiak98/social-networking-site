package pl.kieryk.backend.model;

import com.sun.istack.NotNull;
import lombok.Data;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@Entity
@Table(name = "posts")
public class Post {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 40)
    private String title;

    @NotBlank
    @Size(max = 40)
    private String content;

    @NotBlank
    @Size(max = 50)
    private String tags;

    @NotNull
    private int likes;

    @NotNull
    private boolean public_post;

    @NotNull
    private Long author_id;

    public Post() {
    }

    public Post(String title, String content, String tags, int likes, boolean public_post, Long author_id) {
        this.title = title;
        this.content = content;
        this.tags = tags;
        this.likes = likes;
        this.public_post = public_post;
        this.author_id = author_id;
    }
}