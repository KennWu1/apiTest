const apiKey = '34611318-dbbdf339c5ee9fd36c6360e2c';

const generateBtn = document.getElementById('generate-btn');
const parameterInput = document.getElementById('parameter-input');
const image = document.getElementById('image');

generateBtn.addEventListener('click', () => {
  const parameter = parameterInput.value.trim(); // Remove leading/trailing spaces
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${parameter}&image_type=photo&orientation=horizontal&per_page=200`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.hits.length);
      const randomImage = data.hits[randomIndex];
      image.src = randomImage.largeImageURL;
    })
    .catch(error => console.error(error));
});
