package com.uplusion23.tbackend.Controllers;

import com.uplusion23.tbackend.Dto.Comment;
import com.uplusion23.tbackend.Dto.Post;
import com.uplusion23.tbackend.Services.CommentsService;
import com.uplusion23.tbackend.Services.PostsService;
import com.uplusion23.tbackend.Utilities.Response;
import com.uplusion23.tbackend.Utilities.ResponseTypes;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.data.domain.Pageable;

import javax.validation.Valid;

@RestController
@CrossOrigin
public class CommentsController {
    CommentsService commentsService;

    public CommentsController(CommentsService commentsService) {
        this.commentsService = commentsService;
    }

    @PostMapping("/posts/{id}/comments")
    public ResponseEntity<Object> saveComment(@Valid @RequestBody Comment comment, @PathVariable("id") Long id) {
        Object response = commentsService.saveComment(comment, id);
        if (response == null) {
            return new ResponseEntity<>(Response.get(ResponseTypes.ERROR, "Post not found"), null, 200);
        } else {
            return new ResponseEntity<>(Response.get(ResponseTypes.SUCCESS, response), null, 200);
        }
    }

    @GetMapping("/posts/{id}/comments")
    public ResponseEntity<Object> getComment(@PathVariable("id") Long id, Pageable pageable) {
        Object response = commentsService.getComments(id, pageable);
        if (response == null) {
            return new ResponseEntity<>(Response.get(ResponseTypes.ERROR, "Post not found"), null, 200);
        } else {
            return new ResponseEntity<>(Response.get(ResponseTypes.SUCCESS, response), null, 200);
        }
    }
}
