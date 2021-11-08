package com.uplusion23.tbackend.Controllers;

import javax.validation.Valid;
import com.uplusion23.tbackend.Dto.Post;
import com.uplusion23.tbackend.Services.PostsService;
import com.uplusion23.tbackend.Utilities.Response;
import com.uplusion23.tbackend.Utilities.ResponseTypes;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class PostsController {
    PostsService postsService;

    public PostsController(PostsService postsService) {
        this.postsService = postsService;
    }

    @GetMapping("/posts")
    public ResponseEntity<Iterable<Post>> getPosts(
            @RequestParam(defaultValue = "0") Integer pageNumber,
            @RequestParam(defaultValue = "30") Integer pageSize,
            @RequestParam(defaultValue = "id") String sortBy) {
        Iterable<Post> posts = postsService.getPosts(pageNumber, pageSize, sortBy);

        return new ResponseEntity<Iterable<Post>>(posts, null, 200);
    }

    @PostMapping("/posts")
    public ResponseEntity<Object> createNewPost(@Valid @RequestBody Post post) {
        try {
            return new ResponseEntity<>(Response.get(ResponseTypes.SUCCESS, this.postsService.savePost(post)), null, 200);
        } catch (Exception e) {
            return new ResponseEntity<>(Response.get(ResponseTypes.ERROR, e.getMessage()), null, 400);
        }
    }
}
