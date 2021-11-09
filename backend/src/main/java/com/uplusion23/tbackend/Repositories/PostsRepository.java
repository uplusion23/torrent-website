package com.uplusion23.tbackend.Repositories;

import com.uplusion23.tbackend.Dto.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostsRepository extends PagingAndSortingRepository<Post, Long> {
    Page<Post> findAll(Pageable pageable);
    Page<Post> findByTitleContaining(String term, Pageable pageable);
}
