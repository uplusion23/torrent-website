package com.uplusion23.tbackend.Services;

import com.uplusion23.tbackend.Dto.Comment;
import com.uplusion23.tbackend.Dto.Post;
import com.uplusion23.tbackend.Dto.User;
import com.uplusion23.tbackend.Repositories.CommentsRepository;
import com.uplusion23.tbackend.Repositories.PostsRepository;
import com.uplusion23.tbackend.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;

@Service
public class CommentsService {

    @Autowired
    private CommentsRepository commentsRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostsRepository postsRepository;

    public Comment getComment(Long id) {
        return this.commentsRepository.findById(id).get();
    }

    public Iterable<Comment> getComments(Long postID, Pageable pageable) {
        return this.commentsRepository.findByPostId(postID, pageable);
    }

    public Comment saveComment(Comment comment, Long id) {
        Post post = postsRepository.findById(id).orElseThrow(() -> new RuntimeException("Post not found"));
        User user = userRepository.findById(comment.getAuthorID()).orElseThrow(() -> new RuntimeException("User not found"));

        System.out.println("user = " + user);

        final Comment commentObject = new Comment();
        commentObject.setTitle(comment.getTitle());
        commentObject.setContent(comment.getContent());
        commentObject.setPost(post);
        commentObject.setUser(user);
        commentObject.setPublished(LocalDate.now());
        commentObject.setUpdated(LocalDate.now());
        return this.commentsRepository.save(commentObject);
    }
}
