package com.uplusion23.tbackend.Repositories;

import com.uplusion23.tbackend.Dto.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    boolean existsByUsername(String username);

    User findByUsername(String username);
}
