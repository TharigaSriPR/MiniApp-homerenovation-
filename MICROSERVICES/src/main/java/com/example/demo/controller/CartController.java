package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CartEntity;
import com.example.demo.service.CartService;

@RestController
@RequestMapping("/api/cart")
public class CartController {
	 @Autowired
	    private CartService cartService;

	    @PostMapping
	    public ResponseEntity<CartEntity> addToCart(@RequestBody CartEntity cartData) {
	        CartEntity savedCart = cartService.saveCart(cartData);
	        return ResponseEntity.ok(savedCart);
	    }
}
