package com.uplusion23.tbackend.Repositories;

import com.uplusion23.tbackend.Dto.Post;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostsRepository extends PagingAndSortingRepository<Post, Long> {
}
