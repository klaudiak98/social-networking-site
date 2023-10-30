package pl.kieryk.backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pl.kieryk.backend.exception.ResourceNotFoundException;
import pl.kieryk.backend.model.User;
import pl.kieryk.backend.payload.*;
import pl.kieryk.backend.repository.UserRepository;
import pl.kieryk.backend.security.CurrentUser;
import pl.kieryk.backend.security.UserPrincipal;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    AuthenticationManager authenticationManager;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public UserSummary getCurrentUser(@CurrentUser UserPrincipal currentUser) {
        UserSummary userSummary = new UserSummary(currentUser.getId(), currentUser.getUsername(),
                currentUser.getFirstName(), currentUser.getLastName());
        return userSummary;
    }

    @GetMapping("/user/checkEmailAvailability")
    public UserIdentityAvailability checkEmailAvailability(@RequestParam(value = "email") String email) {
        Boolean isAvailable = !userRepository.existsByEmail(email);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping("/users/{userId}")
    public UserProfile getUserProfile(@PathVariable(value = "userId") Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "userId", userId));

        UserProfile userProfile = new UserProfile(user.getId(), user.getFirstName(), user.getLastName(),
                user.getCreatedAt());

        return userProfile;
    }

    @PatchMapping("/user/changePassword/{userId}")
    public ResponseEntity<String> changesPassword(@PathVariable(value = "userId") Long userId,
            @RequestBody ChangePasswordRequest changePasswordRequest) {

        if (!userRepository.existsById(userId)) {
            return ResponseEntity.badRequest().body("User not exist!");
        }

        User user = userRepository.getById(userId);

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        user.getEmail(),
                        changePasswordRequest.getOldPassword()));

        if (!authentication.isAuthenticated()) {
            return ResponseEntity.badRequest().body("Bad credentials!");
        }

        if (changePasswordRequest.getNewPassword().equals(changePasswordRequest.getNewPasswordAgain())) {
            user.setPassword(passwordEncoder.encode(changePasswordRequest.getNewPasswordAgain()));
            userRepository.save(user);
            return ResponseEntity.status(200).body("Password changed");
        } else {
            return ResponseEntity.badRequest().body("Password doesn't match!");
        }

    }

}