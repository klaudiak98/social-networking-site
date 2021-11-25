package pl.kieryk.backend.payload;

import com.sun.istack.NotNull;
import lombok.Data;
import javax.validation.constraints.Size;

@Data
public class UserDetailsRequest {

    @NotNull
    private Long userId;

    @Size(min = 3, max = 250)
    private String description;

    @Size(max = 50)
    private String imgURL;

}