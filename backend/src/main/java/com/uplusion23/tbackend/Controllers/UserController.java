package com.uplusion23.tbackend.Controllers;

import com.uplusion23.tbackend.Dto.User;
import com.uplusion23.tbackend.Services.UserService;
import com.uplusion23.tbackend.Utilities.Response;
import com.uplusion23.tbackend.Utilities.ResponseTypes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getUserById(@PathVariable Long id) {
        return new ResponseEntity<>(Response.get(ResponseTypes.SUCCESS, userService.getUserByID(id)), null, 200);
    }

    @PostMapping("")
    public ResponseEntity<Object> addUser(@Valid @RequestBody User user) {
        return new ResponseEntity<>(Response.get(ResponseTypes.SUCCESS, userService.registerUser(user)), null, 200);
    }
}
