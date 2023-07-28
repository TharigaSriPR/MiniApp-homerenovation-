package com.example.demo.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.CartEntity;

@Repository
public interface CartRepository extends JpaRepository<CartEntity, Long> {

    // You can add custom queries or methods here if needed
}

