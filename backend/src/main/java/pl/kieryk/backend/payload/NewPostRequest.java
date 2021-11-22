package pl.kieryk.backend.payload;

import com.sun.istack.NotNull;
import lombok.Data;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class NewPostRequest {

    @NotBlank
    @Size(min = 4, max = 40)
    private String title;

    @NotBlank
    @Size(min = 3, max = 250)
    private String content;

    @NotBlank
    @Size(max = 50)
    private String tags;

    @NotNull
    private boolean public_post;

    @NotNull
    private Long authorId;

}