package com.example.demo.database;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.ProductItem;

public interface ProductItemRepository extends JpaRepository<ProductItem, Long> {

}
