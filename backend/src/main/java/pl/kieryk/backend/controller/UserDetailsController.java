package pl.kieryk.backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import pl.kieryk.backend.exception.ResourceNotFoundException;
import pl.kieryk.backend.model.User;
import pl.kieryk.backend.model.UserDetails;
import pl.kieryk.backend.payload.ApiResponse;
import pl.kieryk.backend.payload.UserDetailsRequest;
import pl.kieryk.backend.payload.UserDetailsSummary;
import pl.kieryk.backend.payload.UserSummary;
import pl.kieryk.backend.repository.UserDetailsRepository;
import pl.kieryk.backend.repository.UserRepository;
import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserDetailsController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    private static final Logger logger = LoggerFactory.getLogger(PostController.class);

    @GetMapping("/userDetails/{userId}")
    public ResponseEntity<UserDetailsSummary> getUserDetailsByUserId(@PathVariable(value = "userId") Long userId) {

        if (!userDetailsRepository.existsById(userId)) {
            return new ResponseEntity<UserDetailsSummary>(new UserDetailsSummary(userId, null, null), HttpStatus.OK);
        }

        UserDetailsSummary userDetailsSummary = new UserDetailsSummary(userId, userDetailsRepository.getById(userId).getDescription(), userDetailsRepository.getById(userId).getImgURL());
        return new ResponseEntity<UserDetailsSummary>(userDetailsSummary, HttpStatus.OK);

    }

    @PostMapping("/userDetails/addUserDetails")
    public ResponseEntity<?> addUserDetails(@Valid @RequestBody UserDetailsRequest userDetailsRequest) {

        if (!userRepository.existsById(userDetailsRequest.getUserId())) {
            return new ResponseEntity(new ApiResponse(false, "Username doesn't exist"),
                    HttpStatus.BAD_REQUEST);
        }

        UserDetails userDetails = new UserDetails(
                userDetailsRequest.getDescription(),
                userDetailsRequest.getImgURL(),
                userRepository.getById(userDetailsRequest.getUserId())
        );

        System.out.println(userDetails);

        UserDetails result = userDetailsRepository.save(userDetails);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/api/userDetails/{userId}")
                .buildAndExpand(result.getId()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "User details added successfully"));
    }
}