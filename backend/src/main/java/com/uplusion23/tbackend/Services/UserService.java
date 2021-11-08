package com.uplusion23.tbackend.Services;

import com.uplusion23.tbackend.Dto.User;
import com.uplusion23.tbackend.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public Object registerUser(User userAccount) {
        if (this.userExists(userAccount.getUsername())) {
            return "User already exists";
        }
        System.out.println(userAccount.toString());
        final User user = new User();
        user.setUsername(userAccount.getUsername());
        user.setPassword(this.bCryptPasswordEncoder.encode(userAccount.getPassword()));
        user.setCreated(LocalDate.now());
        user.setUpdated(LocalDate.now());
        user.setRole(1);

        return this.userRepository.save(user);
    }

    public Object updateUser(User user) {
        if (!this.userExists(user.getUsername())) {
            return "User does not exist";
        }
        return this.userRepository.save(user);
    }

    public String deleteUser(User user) {
        if (!this.userExists(user.getUsername())) {
            return "User does not exist";
        }
        this.userRepository.delete(user);
        return "User deleted";
    }

    public Optional<User> getUserByID(Long id) {
        return this.userRepository.findById(id);
    }

    public Object authenticateUser(String username, String password) {
        if (!this.userExists(username)) {
            return "User does not exist";
        }
        User user = this.userRepository.findByUsername(username);
        if (user != null) {
            if (this.bCryptPasswordEncoder.matches(password, user.getPassword())) {
                return user;
            } else {
                return "Username/password is incorrect";
            }
        } else {
            return "User does not exist";
        }
    }

    private boolean userExists(String username) {
        return this.userRepository.existsByUsername(username);
    }
}
