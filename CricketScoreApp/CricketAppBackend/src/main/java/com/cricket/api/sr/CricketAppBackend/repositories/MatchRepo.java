package com.cricket.api.sr.CricketAppBackend.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cricket.api.sr.CricketAppBackend.entities.Match;

public interface MatchRepo extends JpaRepository<Match, Integer> {
	
	// For Fetching the Match, We Have To Provide TeamName i.e. teamHeading
	
	Optional<Match> findByTeamHeading(String teamHeading);
	

}
