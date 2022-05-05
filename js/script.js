// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by: Nathan Araujo
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the discount depending on age and day of the week.
 */
function displayCost() {
  	// initialize variables
	let cost = "Please enter the information above."
	
	// get age and day of the week
	let age = parseInt(document.getElementById('age').value)	
	let select = document.getElementById('day');
	let day = select.options[select.selectedIndex].value;

  //If age is smaller then 5 or bigger then 95 then they get a free ticket
	if (age < 5 || age > 95) {
		cost = "The cost is FREE for you!"
	}
	//If it is tuesday or thrusday then they get a free ticket
	else if (day == "Tuesday" || day == "Thursday") {
		cost = "Today is a free day at the museum!"
	}
	//If age is equal to or bigger then 12 and equal to or smaller then 21 then they get a student discount
	else if (age >=12 && age <=21){
		cost = "You get a student discount!"
	}
	//If age is bigger then 0 and they are not in the age group for other discounts and it us not tuesday or thursday then they pay regular price
	else {		
		cost = "You have to pay regular price."
	}
	
  	// display the greeting
  	document.getElementById('display-results').innerHTML = cost
}
