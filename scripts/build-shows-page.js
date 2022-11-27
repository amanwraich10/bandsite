function showEntry(shows) {
	for (i = 0; i < shows.length; i++) {
		let show = shows[i];
		displayShows(show);
	}
}

let apiKey = "";

function getApiKey() {
	if ((apiKey = "")) {
		return axios
			.get("https://project-1-api.herokuapp.com/register")
			.then((response) => {
				apiKey = response.data.api_key;
				return Promise.resolve(apiKey);
			});
	} else {
		return Promise.resolve(apiKey);
	}
}

function getshowdates() {
	getApiKey()
		.then((apiKey) =>
			axios.get(
				`https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}/`
			)
		)

		.then((response) => {
			shows = response.data;
			showEntry(shows);
			console.log(response);
		})
		.catch((err) => console.log(err));
}
getshowdates();

function displayShows(show) {
	let showDate = new Date(show.date).toDateString();

	let showContainer = document.querySelector(".section__shows");

	let firstDiv = document.createElement("div");
	firstDiv.classList.add("section__show");
	showContainer.appendChild(firstDiv);

	let showsDateHeadingFirst = document.createElement("p");
	showsDateHeadingFirst.classList.add("section__shows--subheading-date");
	showsDateHeadingFirst.innerText = "DATE";
	firstDiv.appendChild(showsDateHeadingFirst);

	let showsDateFirst = document.createElement("p");
	showsDateFirst.classList.add("section__shows-date");
	showsDateFirst.innerText = showDate;
	firstDiv.appendChild(showsDateFirst);

	let showsVenueHeadingFirst = document.createElement("p");
	showsVenueHeadingFirst.classList.add("section__shows--subheading-venue");
	showsVenueHeadingFirst.innerText = "VENUE";
	firstDiv.appendChild(showsVenueHeadingFirst);

	let showsVenueFirst = document.createElement("p");
	showsVenueFirst.classList.add("section__shows--venue");
	showsVenueFirst.innerText = show.place;
	firstDiv.appendChild(showsVenueFirst);

	let showsLocationHeadingFirst = document.createElement("p");
	showsLocationHeadingFirst.classList.add(
		"section__shows--subheading-location"
	);
	showsLocationHeadingFirst.innerText = "LOCATION";
	firstDiv.appendChild(showsLocationHeadingFirst);

	let showsLocationFirst = document.createElement("p");
	showsLocationFirst.classList.add("section__shows--location");
	showsLocationFirst.innerText = show.location;
	firstDiv.appendChild(showsLocationFirst);

	let buttonFirst = document.createElement("button");
	buttonFirst.classList.add("section__shows--button");
	buttonFirst.innerText = "BUY TICKETS";
	firstDiv.appendChild(buttonFirst);

	let dividerFirst = document.createElement("hr");
	dividerFirst.classList.add("section__divider");
	showContainer.appendChild(dividerFirst);
}

const showsAll = document.querySelectorAll(".section__show");

function clearClick() {
	showsAll.forEach((shows) => {
		shows.classList.remove("section--selected");
	});
}

showsAll.forEach((shows) => {
	shows.addEventListener("click", () => {
		clearClick();
		shows.classList.add("section--selected");
	});
});
