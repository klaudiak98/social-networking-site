package pl.kieryk.backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import pl.kieryk.backend.exception.ResourceNotFoundException;
import pl.kieryk.backend.model.Post;
import pl.kieryk.backend.payload.ApiResponse;
import pl.kieryk.backend.payload.NewPostRequest;
import pl.kieryk.backend.repository.PostRepository;
import pl.kieryk.backend.repository.UserRepository;
import javax.validation.Valid;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PostController {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    private static final Logger logger = LoggerFactory.getLogger(PostController.class);

    @GetMapping("/post/{postId}")
    public Post getPostById(@PathVariable(value = "postId") Long postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Post", "postId", postId));

        return post;
    }

    @GetMapping("/post/getByAuthor")
    public List<Post> getByAuthor(@RequestParam(value = "userId") Long id) {

        List<Post> postList = new ArrayList<>();

        postRepository.findAll().forEach(post -> {
            if (post.getAuthor_id() == id)
                postList.add(post);
            }
         );

        return postList;
    }

    @PostMapping("/post/newPost")
    public ResponseEntity<?> createNewPost(@Valid @RequestBody NewPostRequest newPostRequest) {

        if (!userRepository.existsById(newPostRequest.getAuthorId())) {
            return new ResponseEntity(new ApiResponse(false, "Username doesn't exist"),
                    HttpStatus.BAD_REQUEST);
        }

        Post post = new Post(
                newPostRequest.getTitle(),
                newPostRequest.getContent(),
                newPostRequest.getTags(), 0,
                newPostRequest.isPublic_post(),
                newPostRequest.getAuthorId()
        );

        Post result = postRepository.save(post);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/api/post/{postId}")
                .buildAndExpand(result.getId()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Post added successfully"));
    }
}