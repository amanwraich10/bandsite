const form = document.querySelector(".article__comment-form");
const submitButton = document.querySelector(".article__comment-button");

submitButton.addEventListener("click", (event) => {
	console.log(event.target);
	event.preventDefault();
	addComment(event);
});

function addComment(event) {
	console.log(form.name.value);
	event.preventDefault();

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
		})

		.catch((error) => console.log(error));
}

let commentContainer = document.querySelector(".article__allComments");

function clearAllComments(id) {
	id.innerHTML = "";
}

function displayComment(comm) {
	let date = new Date(comm.timestamp);
	let commentdate = date.toISOString().replaceAll("-", "/").split("T")[0];

	let commentsDivFirst = document.createElement("div");
	commentsDivFirst.classList.add("article__comments");
	commentContainer.appendChild(commentsDivFirst);

	let divImage = document.createElement("div");
	divImage.classList.add("article__image-container");
	commentsDivFirst.appendChild(divImage);

	let commentImage = document.createElement("img");
	commentImage.classList.add("article__images");
	divImage.appendChild(commentImage);

	let commentsDivSecond = document.createElement("div");
	commentsDivSecond.classList.add("article__allcomments");
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
	commentDate.innerText = commentdate;
	commentsDivThird.appendChild(commentDate);

	let messageDiv = document.createElement("div");
	messageDiv.classList.add("article__message-container");
	commentsDivSecond.appendChild(messageDiv);

	let commentMessage = document.querySelector("div");
	commentMessage.classList.add("article__comments--message");
	commentMessage.innerText = comm.comment;
	messageDiv.appendChild(commentMessage);

	let divider = document.createElement("hr");
	commentContainer.appendChild(divider);
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

function loadComments() {
	getApiKey()
		.then((apiKey) =>
			axios.get(
				`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}/`
			)
		)
		.then((res) => {
			console.log(res);
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
