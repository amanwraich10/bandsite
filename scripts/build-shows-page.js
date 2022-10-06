const shows = [
	{
		Date: "Mon Sept 06 2021",
		Venue: "Ronald Lane",
		Location: "San Francisco, CA",
	},
	{
		Date: "Tue Sept 21 2021",
		Venue: "Pier 3 East",
		Location: "San Francisco, CA",
	},
	{
		Date: "Fri Oct 15 2021",
		Venue: "View Lounge",
		Location: "San Francisco, CA",
	},
	{
		Date: "Sat Nov 06 2021",
		Venue: "Hyatt Agency",
		Location: "San Francisco, CA",
	},
	{
		Date: "Fri Nov 26 2021",
		Venue: "Moscow Center",
		Location: "San Francisco, CA",
	},
	{
		Date: "Wed Dec 15 2021",
		Venue: "Press Club",
		Location: "San Francisco, CA",
	},
];

function showEntry(shows) {
	displayShows(shows);
}
showEntry(shows);

function displayShows(shows) {
	let showContainer = document.querySelector(".section__shows");
	let sectionTitle = document.createElement("h1");
	sectionTitle.classList.add("section__heading");
	sectionTitle.innerText = "Shows";
	showContainer.appendChild(sectionTitle);

	let divContainer = document.createElement("div");
	divContainer.classList.add("section__all-shows");
	showContainer.appendChild(divContainer);

	let firstDiv = document.createElement("div");
	firstDiv.classList.add("section__first-show");
	divContainer.appendChild(firstDiv);

	let showsDateHeadingFirst = document.createElement("p");
	showsDateHeadingFirst.classList.add("section__shows--sub-heading");
	showsDateHeadingFirst.innerText = "DATE";
	firstDiv.appendChild(showsDateHeadingFirst);

	let showsDateFirst = document.createElement("p");
	showsDateFirst.classList.add("section__shows-date");
	showsDateFirst.innerText = shows[0].Date;
	firstDiv.appendChild(showsDateFirst);

	let showsVenueHeadingFirst = document.createElement("P");
	showsVenueHeadingFirst.classList.add("section__shows--sub-heading");
	showsVenueHeadingFirst.innerText = "VENUE";
	firstDiv.appendChild(showsVenueHeadingFirst);

	let showsVenueFirst = document.createElement("p");
	showsVenueFirst.classList.add("section__shows--venue");
	showsVenueFirst.innerText = shows[0].Venue;
	firstDiv.appendChild(showsVenueFirst);

	let showsLocationHeadingFirst = document.createElement("p");
	showsLocationHeadingFirst.classList.add("section__shows--sub-heading");
	showsLocationHeadingFirst.innerText = "LOCATION";
	firstDiv.appendChild(showsLocationHeadingFirst);

	let showsLocationFirst = document.createElement("p");
	showsLocationFirst.classList.add("section__shows--location");
	showsLocationFirst.innerText = shows[0].Location;
	firstDiv.appendChild(showsLocationFirst);

	let buttonFirst = document.createElement("button");
	buttonFirst.classList.add("section__shows--button");
	buttonFirst.innerText = "BUY TICKETS";
	firstDiv.appendChild(buttonFirst);

	let dividerFirst = document.createElement("hr");
	dividerFirst.classList.add("section__divider");
	divContainer.appendChild(dividerFirst);

	// 	SECOND LIST OF SHOW DETAILS

	let secondDiv = document.createElement("div");
	secondDiv.classList.add("section__second-show");
	divContainer.appendChild(secondDiv);

	let showsDateHeadingSecond = document.createElement("p");
	showsDateHeadingSecond.classList.add("section__shows--sub-heading");
	showsDateHeadingSecond.innerText = "DATE";
	secondDiv.appendChild(showsDateHeadingSecond);

	let showsDateSecond = document.createElement("p");
	showsDateSecond.classList.add("section__shows-date");
	showsDateSecond.innerText = shows[1].Date;
	secondDiv.appendChild(showsDateSecond);

	let showsVenueHeadingSecond = document.createElement("P");
	showsVenueHeadingSecond.classList.add("section__shows--sub-heading");
	showsVenueHeadingSecond.innerText = "VENUE";
	secondDiv.appendChild(showsVenueHeadingSecond);

	let showsVenueSecond = document.createElement("p");
	showsVenueSecond.classList.add("section__shows--venue");
	showsVenueSecond.innerText = shows[1].Venue;
	secondDiv.appendChild(showsVenueSecond);

	let showsLocationHeadingSecond = document.createElement("p");
	showsLocationHeadingSecond.classList.add("section__shows--sub-heading");
	showsLocationHeadingSecond.innerText = "LOCATION";
	secondDiv.appendChild(showsLocationHeadingSecond);

	let showsLocationSecond = document.createElement("p");
	showsLocationSecond.classList.add("section__shows--location");
	showsLocationSecond.innerText = shows[1].Location;
	secondDiv.appendChild(showsLocationSecond);

	let buttonSecond = document.createElement("button");
	buttonSecond.classList.add("section__shows--button");
	buttonSecond.innerText = "BUY TICKETS";
	secondDiv.appendChild(buttonSecond);

	let dividerSecond = document.createElement("hr");
	dividerSecond.classList.add("section__divider");
	divContainer.appendChild(dividerSecond);

	//THIRD LIST OF SHOW DETAILS

	let thirdDiv = document.createElement("div");
	thirdDiv.classList.add("section__third-show");
	divContainer.appendChild(thirdDiv);

	let showsDateHeadingThird = document.createElement("p");
	showsDateHeadingThird.classList.add("section__shows--sub-heading");
	showsDateHeadingThird.innerText = "DATE";
	thirdDiv.appendChild(showsDateHeadingThird);

	let showsDateThird = document.createElement("p");
	showsDateThird.classList.add("section__shows-date");
	showsDateThird.innerText = shows[2].Date;
	thirdDiv.appendChild(showsDateThird);

	let showsVenueHeadingThird = document.createElement("P");
	showsVenueHeadingThird.classList.add("section__shows--sub-heading");
	showsVenueHeadingThird.innerText = "VENUE";
	thirdDiv.appendChild(showsVenueHeadingThird);

	let showsVenueThird = document.createElement("p");
	showsVenueThird.classList.add("section__shows--venue");
	showsVenueThird.innerText = shows[2].Venue;
	thirdDiv.appendChild(showsVenueThird);

	let showsLocationHeadingThird = document.createElement("p");
	showsLocationHeadingThird.classList.add("section__shows--sub-heading");
	showsLocationHeadingThird.innerText = "LOCATION";
	thirdDiv.appendChild(showsLocationHeadingThird);

	let showsLocationThird = document.createElement("p");
	showsLocationThird.classList.add("section__shows--location");
	showsLocationThird.innerText = shows[2].Location;
	thirdDiv.appendChild(showsLocationThird);

	let buttonThird = document.createElement("button");
	buttonThird.classList.add("section__shows--button");
	buttonThird.innerText = "BUY TICKETS";
	thirdDiv.appendChild(buttonThird);

	let dividerThird = document.createElement("hr");
	dividerThird.classList.add("section__divider");
	divContainer.appendChild(dividerThird);

	//FOURTH LIST OF SHOW DETAILS

	let fourthDiv = document.createElement("div");
	fourthDiv.classList.add("section__fourth-show");
	divContainer.appendChild(fourthDiv);

	let showsDateHeadingFourth = document.createElement("p");
	showsDateHeadingFourth.classList.add("section__shows--sub-heading");
	showsDateHeadingFourth.innerText = "DATE";
	fourthDiv.appendChild(showsDateHeadingFourth);

	let showsDateFourth = document.createElement("p");
	showsDateFourth.classList.add("section__shows-date");
	showsDateFourth.innerText = shows[3].Date;
	fourthDiv.appendChild(showsDateFourth);

	let showsVenueHeadingFourth = document.createElement("P");
	showsVenueHeadingFourth.classList.add("section__shows--sub-heading");
	showsVenueHeadingFourth.innerText = "VENUE";
	fourthDiv.appendChild(showsVenueHeadingFourth);

	let showsVenueFourth = document.createElement("p");
	showsVenueFourth.classList.add("section__shows--venue");
	showsVenueFourth.innerText = shows[3].Venue;
	fourthDiv.appendChild(showsVenueFourth);

	let showsLocationHeadingFourth = document.createElement("p");
	showsLocationHeadingFourth.classList.add("section__shows--sub-heading");
	showsLocationHeadingFourth.innerText = "LOCATION";
	fourthDiv.appendChild(showsLocationHeadingFourth);

	let showsLocationFourth = document.createElement("p");
	showsLocationFourth.classList.add("section__shows--location");
	showsLocationFourth.innerText = shows[3].Location;
	fourthDiv.appendChild(showsLocationFourth);

	let buttonFourth = document.createElement("button");
	buttonFourth.classList.add("section__shows--button");
	buttonFourth.innerText = "BUY TICKETS";
	fourthDiv.appendChild(buttonFourth);

	let dividerFourth = document.createElement("hr");
	dividerFourth.classList.add("section__divider");
	divContainer.appendChild(dividerFourth);

	//FIFTH LIST OF SHOWS

	let fifthDiv = document.createElement("div");
	fifthDiv.classList.add("section__fifth-show");
	divContainer.appendChild(fifthDiv);

	let showsDateHeadingFifth = document.createElement("p");
	showsDateHeadingFifth.classList.add("section__shows--sub-heading");
	showsDateHeadingFifth.innerText = "DATE";
	fifthDiv.appendChild(showsDateHeadingFifth);

	let showsDateFifth = document.createElement("p");
	showsDateFifth.classList.add("section__shows-date");
	showsDateFifth.innerText = shows[4].Date;
	fifthDiv.appendChild(showsDateFifth);

	let showsVenueHeadingFifth = document.createElement("P");
	showsVenueHeadingFifth.classList.add("section__shows--sub-heading");
	showsVenueHeadingFifth.innerText = "VENUE";
	fifthDiv.appendChild(showsVenueHeadingFifth);

	let showsVenueFifth = document.createElement("p");
	showsVenueFifth.classList.add("section__shows--venue");
	showsVenueFifth.innerText = shows[4].Venue;
	fifthDiv.appendChild(showsVenueFifth);

	let showsLocationHeadingFifth = document.createElement("p");
	showsLocationHeadingFifth.classList.add("section__shows--sub-heading");
	showsLocationHeadingFifth.innerText = "LOCATION";
	fifthDiv.appendChild(showsLocationHeadingFifth);

	let showsLocationFifth = document.createElement("p");
	showsLocationFifth.classList.add("section__shows--location");
	showsLocationFifth.innerText = shows[4].Location;
	fifthDiv.appendChild(showsLocationFifth);

	let buttonFifth = document.createElement("button");
	buttonFifth.classList.add("section__shows--button");
	buttonFifth.innerText = "BUY TICKETS";
	fifthDiv.appendChild(buttonFifth);

	let dividerFifth = document.createElement("hr");
	dividerFifth.classList.add("section__divider");
	divContainer.appendChild(dividerFifth);

	//SIXTH LIST OF SHOWS

	let sixthDiv = document.createElement("div");
	sixthDiv.classList.add("section__sixth-show");
	divContainer.appendChild(sixthDiv);

	let showsDateHeadingSixth = document.createElement("p");
	showsDateHeadingSixth.classList.add("section__shows--sub-heading");
	showsDateHeadingSixth.innerText = "DATE";
	sixthDiv.appendChild(showsDateHeadingSixth);

	let showsDateSixth = document.createElement("p");
	showsDateSixth.classList.add("section__shows-date");
	showsDateSixth.innerText = shows[5].Date;
	sixthDiv.appendChild(showsDateSixth);

	let showsVenueHeadingSixth = document.createElement("P");
	showsVenueHeadingSixth.classList.add("section__shows--sub-heading");
	showsVenueHeadingSixth.innerText = "VENUE";
	sixthDiv.appendChild(showsVenueHeadingSixth);

	let showsVenueSixth = document.createElement("p");
	showsVenueSixth.classList.add("section__shows--venue");
	showsVenueSixth.innerText = shows[5].Venue;
	sixthDiv.appendChild(showsVenueSixth);

	let showsLocationHeadingSixth = document.createElement("p");
	showsLocationHeadingSixth.classList.add("section__shows--sub-heading");
	showsLocationHeadingSixth.innerText = "LOCATION";
	sixthDiv.appendChild(showsLocationHeadingSixth);

	let showsLocationSixth = document.createElement("p");
	showsLocationSixth.classList.add("section__shows--location");
	showsLocationSixth.innerText = shows[5].Location;
	sixthDiv.appendChild(showsLocationSixth);

	let buttonSixth = document.createElement("button");
	buttonSixth.classList.add("section__shows--button");
	buttonSixth.innerText = "BUY TICKETS";
	sixthDiv.appendChild(buttonSixth);

	let dividerSixth = document.createElement("hr");
	dividerSixth.classList.add("section__divider");
	divContainer.appendChild(dividerSixth);
}

// First section

// let showContainer = document.querySelector(".section__shows");
// let sectionTitle = document.createElement("h1");
// sectionTitle.classList.add("section__heading");
// sectionTitle.innerText = "Shows";
// showContainer.appendChild(sectionTitle);

// let divContainer = document.createElement("div");
// divContainer.classList.add("section__all-shows");
// showContainer.appendChild(divContainer);

// let div = document.createElement("div");
// divContainer.appendChild(div);

// let showsList = document.createElement("ul");
// showsList.classList.add("section__list");
// div.appendChild(showsList);

// let showsListItemsDate = document.createElement("li");
// showsListItemsDate.classList.add("section__shows--sub-heading");
// showsListItemsDate.innerText = "DATE";
// showsList.appendChild(showsListItemsDate);

// let showsListItemsVenue = document.createElement("li");
// showsListItemsVenue.classList.add("section__shows--sub-heading");
// showsListItemsVenue.innerText = "VENUE";
// showsList.appendChild(showsListItemsVenue);

// let showsListItemsLocation = document.createElement("li");
// showsListItemsLocation.classList.add("section__shows--sub-heading");
// showsListItemsLocation.innerText = "LOCATION";
// showsList.appendChild(showsListItemsLocation);

// second section

// let firstDiv = document.createElement("div");
// 	firstDiv.classList.add("section__first-show");
// 	divContainer.appendChild(firstDiv);

// 	let showsDateFirst = document.createElement("p");
// 	showsDateFirst.classList.add("section__shows-date");
// 	showsDateFirst.innerText = shows[0].Date;
// 	firstDiv.appendChild(showsDateFirst);

// 	let showsVenueFirst = document.createElement("p");
// 	showsVenueFirst.classList.add("section__shows--venue");
// 	showsVenueFirst.innerText = shows[0].Venue;
// 	firstDiv.appendChild(showsVenueFirst);

// 	let showsLocationFirst = document.createElement("p");
// 	showsLocationFirst.classList.add("section__shows--location");
// 	showsLocationFirst.innerText = shows[0].Location;
// 	firstDiv.appendChild(showsLocationFirst);

// 	let buttonFirst = document.createElement("button");
// 	buttonFirst.classList.add("section__shows--button");
// 	buttonFirst.innerText = "BUY TICKETS";
// 	firstDiv.appendChild(buttonFirst);

// 	let dividerFirst = document.createElement("hr");
// 	dividerFirst.classList.add("section__divider");
// 	divContainer.appendChild(dividerFirst);

// let secondDiv = document.createElement("div");
// 	secondDiv.classList.add("section__second-show");
// 	divContainer.appendChild(secondDiv);

// 	let showsDateSecond = document.createElement("p");
// 	showsDateSecond.classList.add("section__shows-date");
// 	showsDateSecond.innerText = shows[1].Date;
// 	secondDiv.appendChild(showsDateSecond);

// 	let showsVenueSecond = document.createElement("p");
// 	showsVenueSecond.classList.add("section__shows--venue");
// 	showsVenueSecond.innerText = shows[1].Venue;
// 	secondDiv.appendChild(showsVenueSecond);

// 	let showsLocationSecond = document.createElement("p");
// 	showsLocationSecond.classList.add("section__shows--location");
// 	showsLocationSecond.innerText = shows[1].Location;
// 	secondDiv.appendChild(showsLocationSecond);

// 	let buttonSecond = document.createElement("button");
// 	buttonSecond.classList.add("section__shows--button");
// 	buttonSecond.innerText = "BUY TICKETS";
// 	secondDiv.appendChild(buttonSecond);

// 	let dividerSecond = document.createElement("hr");
// 	dividerSecond.classList.add("section__divider");
// 	divContainer.appendChild(dividerSecond);

// let thirdDiv = document.createElement("div");
// 	thirdDiv.classList.add("section__third-show");
// 	divContainer.appendChild(thirdDiv);

// 	let showsDateThird = document.createElement("p");
// 	showsDateThird.classList.add("section__shows-date");
// 	showsDateThird.innerText = shows[2].Date;
// 	thirdDiv.appendChild(showsDateThird);

// 	let showsVenueThird = document.createElement("p");
// 	showsVenueThird.classList.add("section__shows--venue");
// 	showsVenueThird.innerText = shows[2].Venue;
// 	thirdDiv.appendChild(showsVenueThird);

// 	let showsLocationThird = document.createElement("p");
// 	showsLocationThird.classList.add("section__shows--location");
// 	showsLocationThird.innerText = shows[2].Location;
// 	thirdDiv.appendChild(showsLocationThird);

// 	let buttonThird = document.createElement("button");
// 	buttonThird.classList.add("section__shows--button");
// 	buttonThird.innerText = "BUY TICKETS";
// 	thirdDiv.appendChild(buttonThird);

// 	let dividerThird = document.createElement("hr");
// dividerThird.classList.add("section__divider");
// divContainer.appendChild(dividerThird);

// let fourthDiv = document.createElement("div");
// 	fourthDiv.classList.add("section__fourth-show");
// 	divContainer.appendChild(fourthDiv);

// 	let showsDateFourth = document.createElement("p");
// 	showsDateFourth.classList.add("section__shows-date");
// 	showsDateFourth.innerText = shows[3].Date;
// 	fourthDiv.appendChild(showsDateFourth);

// 	let showsVenueFourth = document.createElement("p");
// 	showsVenueFourth.classList.add("section__shows--venue");
// 	showsVenueFourth.innerText = shows[3].Venue;
// 	fourthDiv.appendChild(showsVenueFourth);

// 	let showsLocationFourth = document.createElement("p");
// 	showsLocationFourth.classList.add("section__shows--location");
// 	showsLocationFourth.innerText = shows[3].Location;
// 	fourthDiv.appendChild(showsLocationFourth);

// 	let buttonFourth = document.createElement("button");
// 	buttonFourth.classList.add("section__shows--button");
// 	buttonFourth.innerText = "BUY TICKETS";
// 	fourthDiv.appendChild(buttonFourth);

// 	let dividerFourth = document.createElement("hr");
// 	dividerFourth.classList.add("section__divider");
// 	divContainer.appendChild(dividerFourth);

// let fifthDiv = document.createElement("div");
// 	fifthDiv.classList.add("section__fifth-show");
// 	divContainer.appendChild(fifthDiv);

// 	let showsDateFifth = document.createElement("p");
// 	showsDateFifth.classList.add("section__shows-date");
// 	showsDateFifth.innerText = shows[4].Date;
// 	fifthDiv.appendChild(showsDateFifth);

// 	let showsVenueFifth = document.createElement("p");
// 	showsVenueFifth.classList.add("section__shows--venue");
// 	showsVenueFifth.innerText = shows[4].Venue;
// 	fifthDiv.appendChild(showsVenueFifth);

// 	let showsLocationFifth = document.createElement("p");
// 	showsLocationFifth.classList.add("section__shows--location");
// 	showsLocationFifth.innerText = shows[4].Location;
// 	fifthDiv.appendChild(showsLocationFifth);

// 	let buttonFifth = document.createElement("button");
// 	buttonFifth.classList.add("section__shows--button");
// 	buttonFifth.innerText = "BUY TICKETS";
// 	fifthDiv.appendChild(buttonFifth);

// 	let dividerFifth = document.createElement("hr");
// 	dividerFifth.classList.add("section__divider");
// 	divContainer.appendChild(dividerFifth);

// let sixthDiv = document.createElement("div");
// 	sixthDiv.classList.add("section__sixth-show");
// 	divContainer.appendChild(sixthDiv);

// 	let showsDateSixth = document.createElement("p");
// 	showsDateSixth.classList.add("section__shows-date");
// 	showsDateSixth.innerText = shows[4].Date;
// 	sixthDiv.appendChild(showsDateSixth);

// 	let showsVenueSixth = document.createElement("p");
// 	showsVenueSixth.classList.add("section__shows--venue");
// 	showsVenueSixth.innerText = shows[5].Venue;
// 	sixthDiv.appendChild(showsVenueSixth);

// 	let showsLocationSixth = document.createElement("p");
// 	showsLocationSixth.classList.add("section__shows--location");
// 	showsLocationSixth.innerText = shows[5].Location;
// 	sixthDiv.appendChild(showsLocationSixth);

// 	let buttonSixth = document.createElement("button");
// 	buttonSixth.classList.add("section__shows--button");
// 	buttonSixth.innerText = "BUY TICKETS";
// 	sixthDiv.appendChild(buttonSixth);

// 	let dividerSixth = document.createElement("hr");
// 	dividerSixth.classList.add("section__divider");
// 	divContainer.appendChild(dividerSixth);
