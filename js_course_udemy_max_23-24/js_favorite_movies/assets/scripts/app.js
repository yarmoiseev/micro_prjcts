const startAddMovieButton = document.querySelector("header button");
const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const movieModalCancelButton = addMovieModal.querySelector(".btn--passive");
const movieModalConfirmButton = movieModalCancelButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const deleteMovieHandler = (movieId) => {
  //TODO 2^44
};

const renderMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
	<div class="movie-element__image">
		<img src="${imageUrl}" alt="${title}"/>
	</div>
	<div class="movie-element__info">
		<h2>${title}</h2>
		<p>${rating}/5 stars</p>
	</div>
	`;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please, enter valid values (rating between 1 and 5)");
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
movieModalCancelButton.addEventListener("click", cancelAddMovieHandler);
movieModalConfirmButton.addEventListener("click", addMovieHandler);
