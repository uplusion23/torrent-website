package com.uplusion23.tbackend.Services;

import com.uplusion23.tbackend.Dto.Post;
import com.uplusion23.tbackend.Repositories.PostsRepository;
import com.uplusion23.tbackend.Dto.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;

@Service
public class PostsService {

    @Autowired
    private PostsRepository postsRepository;

    public Iterable<Post> getPosts(Integer pageNumber, Integer pageSize, String sortBy) {
        Pageable paging = PageRequest.of(pageNumber, pageSize, Sort.by(sortBy));
        Page<Post> pageResult = postsRepository.findAll(paging);

        if (pageResult.hasContent()) return pageResult.getContent();
        else return new ArrayList<Post>();
    }

    public Post savePost(Post post) {
        final Post postObject = new Post();
        postObject.setTitle(post.getTitle());
        postObject.setDescription(post.getDescription());
        postObject.setAuthorID(post.getAuthorID());
        postObject.setPublished(LocalDate.now());
        postObject.setUpdated(LocalDate.now());
        postObject.setLink(post.getLink());
        return this.postsRepository.save(postObject);
    }
}
