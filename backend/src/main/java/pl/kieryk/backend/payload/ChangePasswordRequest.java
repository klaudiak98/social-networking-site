package pl.kieryk.backend.payload;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class ChangePasswordRequest {
    @NotBlank
    @Size(min = 6, max = 20)
    private String oldPassword;

    @NotBlank
    @Size(min = 6, max = 20)
    private String newPassword;

    @NotBlank
    @Size(min = 6, max = 20)
    private String newPasswordAgain;
}
