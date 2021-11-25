package pl.kieryk.backend.payload;

import lombok.Data;

@Data
public class UserDetailsSummary {
    private Long id;
    private String description;
    private String imgURL;

    public UserDetailsSummary(Long id, String description, String imgURL) {
        this.id = id;
        this.description = description;
        this.imgURL = imgURL;
    }
}
