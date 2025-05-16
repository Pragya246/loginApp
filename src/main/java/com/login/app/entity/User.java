package com.login.app.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class User {

    @Id
    private int id;
    private String username;
    private String password;
    private String email;
    private String phone;
}
