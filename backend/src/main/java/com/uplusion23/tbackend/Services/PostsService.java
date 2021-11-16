package com.uplusion23.tbackend.Services;

import com.uplusion23.tbackend.Dto.Post;
import com.uplusion23.tbackend.Repositories.PostsRepository;
import com.uplusion23.tbackend.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class PostsService {

    @Autowired
    private PostsRepository postsRepository;

    @Autowired
    private UserRepository userRepository;

    public Iterable<Post> getPosts(Pageable pageable) {
        return this.postsRepository.findAll(pageable);
    }

    public Iterable<Post> searchPosts(String query, Pageable pageable) {
        try {
            return this.postsRepository.findByTitleContaining(query, pageable);
        } catch (Exception e) {
            return null;
        }
    }

    public Post savePost(Post post) {
        final Post postObject = new Post();
        postObject.setTitle(post.getTitle());
        postObject.setDescription(post.getDescription());
        postObject.setUser(userRepository.findById(post.getAuthorID()).get());
        postObject.setAuthorID(post.getAuthorID());
        postObject.setPublished(LocalDate.now());
        postObject.setUpdated(LocalDate.now());
        postObject.setLink(post.getLink());
        return this.postsRepository.save(postObject);
    }

    public Object updatePost(Long id, Post post) throws Exception {
        // Check roles for likes and views

        if (this.postsRepository.findById(id).isPresent()) {
            final Post postObject = this.postsRepository.findById(id).get();
            if (post.getTitle() != null && !post.getTitle().isEmpty()) postObject.setTitle(post.getTitle());
            if (post.getDescription() != null && !post.getDescription().isEmpty()) postObject.setDescription(post.getDescription());
            if (post.getAuthorID() != null) postObject.setAuthorID(post.getAuthorID());
            if (post.getPublished() != null) postObject.setPublished(post.getPublished());
            postObject.setUpdated(LocalDate.now());
            if (post.getLink() != null && !post.getLink().isEmpty()) postObject.setLink(post.getLink());
            postObject.setSeeders(post.getSeeders());
            postObject.setLeechers(post.getLeechers());
            return this.postsRepository.save(postObject);
        } else {
            throw new Exception("Post not found.");
        }
    }
}
