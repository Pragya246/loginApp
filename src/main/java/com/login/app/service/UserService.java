package com.login.app.service;

import com.login.app.entity.User;
import com.login.app.payload.UserDTO;
import com.login.app.repository.UserRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;
    @Autowired
    ModelMapper modelMapper;
    public UserDTO createUser(UserDTO userDTO) {
        User user = modelMapper.map(userDTO, User.class);

        User savedUser = userRepo.save(user);
        return modelMapper.map(savedUser, UserDTO.class);
    }
}
