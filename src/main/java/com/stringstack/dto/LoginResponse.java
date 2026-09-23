package com.stringstack.dto;

import com.stringstack.user.User;

public record LoginResponse(
        Long id,
        String email,
        String firstName,
        String lastName,
        String token
) {

    public static LoginResponse from(User user, String token) {
        return new LoginResponse(
                user.getId(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                token
        );
    }
}