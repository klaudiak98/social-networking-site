package pl.kieryk.backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.kieryk.backend.model.User;
import pl.kieryk.backend.repository.FriendRepository;
import pl.kieryk.backend.repository.UserRepository;
import pl.kieryk.backend.service.FriendService;
import java.util.List;

@RestController
@RequestMapping("/api")
public class FriendController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FriendRepository friendRepository;

    @Autowired
    private FriendService friendService;

    private static final Logger logger = LoggerFactory.getLogger(FriendController.class);

    @GetMapping("friends/addFriend")
    public ResponseEntity<?> addUser(@RequestParam("userId")Long userId, @RequestParam("friendId") Long friendId) throws NullPointerException{
        friendService.saveFriend(userId,friendId);
        return ResponseEntity.ok("Friend added successfully");
    }

    @GetMapping("friends/listFriends")
    public ResponseEntity<List<User>> getFriends(@RequestParam("userId")Long userId) {
        List<User> myFriends = friendService.getFriends(userId);
        return new ResponseEntity<List<User>>(myFriends, HttpStatus.OK);
    }

}