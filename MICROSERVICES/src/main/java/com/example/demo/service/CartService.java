package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.database.CartRepository;
import com.example.demo.model.CartEntity;

@Service
public class CartService {
	 @Autowired
	    private CartRepository cartRepository;

	 public CartEntity saveCart(CartEntity cartData) {
	        return cartRepository.save(cartData);
	    }
}
