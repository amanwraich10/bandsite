let comments = [
	{
		name: "Connor Walton",
		timestamp: "02/17/2021",
		comment:
			"This is art. This is inexplicable magic expressed in purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
	},
	{
		name: "Emilie Beach",
		timestamp: "01/09/2021",
		comment:
			"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
	},
	{
		name: "Miles Acosta",
		timestamp: "12/20/2020",
		comment:
			"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
	},
];

const form = document.querySelector(".article__comment-form");

form.addEventListener("click", (event) => {
	let nameinput = document.querySelector(".article__name");
	let commentinput = document.querySelector(".article__comment");

	if (event.target.name.value && event.target.comment.value) {
		nameinput.style.borderColor = blue;
		commentinput.style.borderColor = blue;
		addComment(event);
	}
});

function addComment(event) {
	event.preventdefault();

	getApiKey()
		.then((apiKey) => {
			return axios.post(
				`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`,
				{
					name: form.name.value,
					comment: form.comment.value,
				}
			);
		})
		.then(() => {
			loadComments();
			event.target.reset();
		})

		.catch((error) => console.log(error));
}

const submitButton = document.querySelector(".article__comment-button");

submitButton.addEventListener("click", (event) => {
	let nameinput = document.querySelector(".article__name");
	let commentinput = document.querySelector(".article__comment");
	event.preventDefault();
	addComment();
	nameinput.value = "";
	commentContainer.value = "";
	clearAllComments();

	comments.forEach((comment) => {
		displayComment(comment);
	});
});

let userName = document.querySelector(".article__name");

let commentContainer = document.querySelector(".article__allComments");

function clearAllComments(id) {
	id.innerHTML = "";
}

function displayComment(comm) {
	let commentsDivFirst = document.createElement("div");
	commentsDivFirst.classList.add("article__comments");
	commentContainer.appendChild(commentsDivFirst);

	let divImage = document.createElement("div");
	divImage.classList.add(".article__image-container");
	commentsDivFirst.appendChild(divImage);

	let commentImage = document.createElement("img");
	commentImage.classList.add("article__images");
	divImage.appendChild(commentImage);

	let commentsDivSecond = document.createElement("div");
	commentsDivSecond.classList.add(".article__allcommments");
	commentsDivFirst.appendChild(commentsDivSecond);

	let commentsDivThird = document.createElement("div");
	commentsDivThird.classList.add("article__comments--upper");
	commentsDivSecond.appendChild(commentsDivThird);

	let commentName = document.createElement("h3");
	commentName.classList.add("article__comments--name");
	commentName.innerText = comm.name;
	commentsDivThird.appendChild(commentName);

	let commentDate = document.createElement("h4");
	commentDate.classList.add("article__comments--date");
	commentDate.innerText = comm.timestamp;
	commentsDivThird.appendChild(commentDate);

	let messageDiv = document.createElement("div");
	messageDiv.classList.add(".article__message-container");
	commentsDivSecond.appendChild(messageDiv);

	let commentMessage = document.querySelector("p");
	commentMessage.classList.add("article__comments--message");
	commentMessage.innerText = comm.comment;
	messageDiv.appendChild(commentMessage);

	let divider = document.createElement("hr");
	commentContainer.appendChild(divider);
}

// ADD COMMENTS ON FORM
let newComment_name = document.querySelector(".article__name").value;
let newComment_comment = document.querySelector(".article__comment").value;

function addComment() {
	let newComment = {};
	newComment.name = newComment_name.value;
	newComment.comment = newComment_comment.value;
	comments.unshift(newComment);
}

let apiKey = "";

function getApiKey() {
	return new Promise((resolve) => {
		if (apiKey === "") {
			return axios
				.get("https://project-1-api.herokuapp.com/register")
				.then((res) => {
					apiKey = res.data.apiKey;
					return resolve(apiKey);
				});
		} else {
			return resolve(apiKey);
		}
	});
}

function formatDate(timestamp) {
	let date = new Date(timestamp);
	return date.toISOString().replaceAll(("-", "/").split("T")[0]);
}

function loadComments() {
	getApiKey()
		.then((apiKey) =>
			axios.get(
				`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}/`
			)
		)
		.then((res) => {
			return (comments = res.data);
		})
		.then((comments) => {
			comments.sort((a, b) => {
				return a.timestamp - b.timestamp;
			});

			parseComments(comments);
		})
		.catch((error) => console.log(error));
}

function parseComments() {
	clearAllComments(commentContainer);

	for (i = comments.length - 1; i >= 0; i--) {
		let comm = comments[i];
		displayComment(comm);
	}
}

loadComments();
