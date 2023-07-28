package com.food_ordering_app.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food_ordering_app.backend.Model.Restaurant_Owner;
import com.food_ordering_app.backend.Repository.RestaurantOwnerRepo;

@Service
public class RestaurantOwnerService {

	@Autowired
	private RestaurantOwnerRepo restOwn_repo;
	public Restaurant_Owner getRestaurantOwner(int id) {
        return restOwn_repo.findById(id).get();
	}

	public boolean addRestaurantOwner(Restaurant_Owner rest_own) {
		return (restOwn_repo.save(rest_own) != null) ? true : false;
	}

	public boolean updateRestaurantOwner(Restaurant_Owner rest_own) {
		return (restOwn_repo.saveAndFlush(rest_own) != null) ? true : false;
	}

	public boolean deleteRestaurantOwnerById(int id) {
		if (restOwn_repo.findById(id).isPresent()) {
            restOwn_repo.deleteById(id);
            return true;
        }
        return false;
	}

}
