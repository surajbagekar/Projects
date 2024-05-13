package com.cricket.api.sr.CricketAppBackend.services;

import java.util.List;


import com.cricket.api.sr.CricketAppBackend.entities.Match;

public interface MatchService {
	
//	Get All Matches
	
	List<Match> getAllMatches();
	
	
//	Get Live Matches
	
	List<Match> getLiveMatches();
	
	
//	Get 2024 Point Table
	
	List<List<String>> getPointTable();

}
