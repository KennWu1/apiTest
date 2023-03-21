const API_KEY = '34611318-dbbdf339c5ee9fd36c6360e2c';
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&per_page=200`;

const imageContainer = document.querySelector('.image-container');
const randomImageButton = document.querySelector('#generate-button');

randomImageButton.addEventListener('click', () => {
  fetch(BASE_URL)
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.hits.length);
      const randomImageURL = data.hits[randomIndex].webformatURL;
      imageContainer.innerHTML = `<img id="random-image" src="${randomImageURL}" alt="Random Image">`;
    })
    .catch(error => console.error(error));
});
