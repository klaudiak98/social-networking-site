package pl.kieryk.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.kieryk.backend.model.Friend;
import pl.kieryk.backend.model.User;
import pl.kieryk.backend.repository.FriendRepository;
import pl.kieryk.backend.repository.UserRepository;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class FriendService {

    @Autowired
    FriendRepository friendRepository;

    @Autowired
    UserRepository userRepository;

    public void saveFriend(Long id1, Long id2) throws NullPointerException{

        User user1 = userRepository.getById(id1);
        User user2 = userRepository.getById(id2);

        Friend friend = new Friend();
        User firstuser = user1;
        User seconduser = user2;

        if(user1.getId() > user2.getId()){
            firstuser = user2;
            seconduser = user1;
        }

        if( !(friendRepository.existsByFirstUserAndSecondUser(firstuser,seconduser)) ){
            friend.setCreatedDate(new Date());
            friend.setFirstUser(firstuser);
            friend.setSecondUser(seconduser);
            friendRepository.save(friend);
        }
    }

    public List<User> getFriends(Long id){

        User currentUser = userRepository.getById(id);
        List<Friend> friendsByFirstUser = friendRepository.findByFirstUser(currentUser);
        List<Friend> friendsBySecondUser = friendRepository.findBySecondUser(currentUser);
        List<User> friendUsers = new ArrayList<>();

        /*
            suppose there are 3 users with id 1,2,3.
            if user1 add user2 as friend database record will be first user = user1 second user = user2
            if user3 add user2 as friend database record will be first user = user2 second user = user3
            it is because of lexicographical order
            while calling get friends of user 2 we need to check as a both first user and the second user
         */
        for (Friend friend : friendsByFirstUser) {
            friendUsers.add(userRepository.findById(friend.getSecondUser().getId()).orElseThrow());
        }
        for (Friend friend : friendsBySecondUser) {
            friendUsers.add(userRepository.findById(friend.getFirstUser().getId()).orElseThrow());
        }
        return friendUsers;

    }

}