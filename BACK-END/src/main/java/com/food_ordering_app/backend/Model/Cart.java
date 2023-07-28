package com.food_ordering_app.backend.Model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Cart {
	
	@Id
	private int cart_id;
	@Column(name="cart_user_id", nullable = false)
	private int cart_user_id;
	@Column(name="cart_items_list", nullable = false)
	private List<Integer> cart_items_list;
	
	public Cart()
	{
		
	}

	public Cart(int cart_id, int cart_user_id, List<Integer> cart_items_list) {
		super();
		this.cart_id = cart_id;
		this.cart_user_id = cart_user_id;
		this.cart_items_list = cart_items_list;
	}

	public int getCart_id() {
		return cart_id;
	}

	public void setCart_id(int cart_id) {
		this.cart_id = cart_id;
	}

	public int getCart_user_id() {
		return cart_user_id;
	}

	public void setCart_user_id(int cart_user_id) {
		this.cart_user_id = cart_user_id;
	}

	public List<Integer> getCart_items_list() {
		return cart_items_list;
	}

	public void setCart_items_list(List<Integer> cart_items_list) {
		this.cart_items_list = cart_items_list;
	}
	
}
