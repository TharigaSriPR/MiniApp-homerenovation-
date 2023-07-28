package com.food_ordering_app.backend.Model;

import java.math.BigInteger;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Restaurant {
		
	@Id
	private int restaurant_id;
	@Column(name="restaurant_name" , nullable = false , length = 60)
	private String restaurant_name;
	@Column(name ="restaurant_address" , nullable = false )
	private String restaurant_address ;
	@Column(name ="restaurant_phoneNumber", nullable = false)
	private BigInteger restaurant_phoneNumber;
	@Column(name = "restaurant_email" , nullable = false)
	private String restaurant_email;
	@Column(name ="owner_id" , nullable =false)
	private int owner_id;
	@Column(name ="restaurant_rating")
	private int restaurant_rating;
	@Lob
	@Column(name ="restaurant_image" ,columnDefinition = "LONGTEXT" )
	private String restaurant_image;
	
	public Restaurant()
	{
		
	}
	public Restaurant(int restaurant_id, String restaurant_name, String restaurant_address,
			BigInteger restaurant_phoneNumber, String restaurant_email, int owner_id, int restaurant_rating,
			String restaurant_image) {
		super();
		this.restaurant_id = restaurant_id;
		this.restaurant_name = restaurant_name;
		this.restaurant_address = restaurant_address;
		this.restaurant_phoneNumber = restaurant_phoneNumber;
		this.restaurant_email = restaurant_email;
		this.owner_id = owner_id;
		this.restaurant_rating = restaurant_rating;  //consolidated rating
		this.restaurant_image = restaurant_image;
	}
	public int getRestaurant_id() {
		return restaurant_id;
	}
	public void setRestaurant_id(int restaurant_id) {
		this.restaurant_id = restaurant_id;
	}
	public String getRestaurant_name() {
		return restaurant_name;
	}
	public void setRestaurant_name(String restaurant_name) {
		this.restaurant_name = restaurant_name;
	}
	public String getRestaurant_address() {
		return restaurant_address;
	}
	public void setRestaurant_address(String restaurant_address) {
		this.restaurant_address = restaurant_address;
	}
	public BigInteger getRestaurant_phoneNumber() {
		return restaurant_phoneNumber;
	}
	public void setRestaurant_phoneNumber(BigInteger restaurant_phoneNumber) {
		this.restaurant_phoneNumber = restaurant_phoneNumber;
	}
	public String getRestaurant_email() {
		return restaurant_email;
	}
	public void setRestaurant_email(String restaurant_email) {
		this.restaurant_email = restaurant_email;
	}
	public int getOwner_id() {
		return owner_id;
	}
	public void setOwner_id(int owner_id) {
		this.owner_id = owner_id;
	}
	public int getRestaurant_rating() {
		return restaurant_rating;
	}
	public void setRestaurant_rating(int restaurant_rating) {
		this.restaurant_rating = restaurant_rating;
	}
	public String getRestaurant_image() {
		return restaurant_image;
	}
	public void setRestaurant_image(String restaurant_image) {
		this.restaurant_image = restaurant_image;
	}
	
	@OneToMany(mappedBy="restaurant" , cascade = CascadeType.ALL)
	private List<Reviews> hotel_reviews;
	
	public void setReviews (List<Reviews> hotel_reviews)
	{
		this.hotel_reviews = hotel_reviews;
	}
	
	public List<Reviews> getReviews()
	{
		return hotel_reviews;
	}
	
//    @ManyToOne
//    @JoinColumn(name="review_hotel_id" , referencedColumnName ="restaurant_id")
//    private Restaurant restaurant;
//    
//    public Restaurant getRestaurant()
//    {
//    	return restaurant;
//    }
//    
//    public void setRestaurant(Restaurant restaurant )
//    {
//    	this.restaurant=restaurant;
//    }
	
}
