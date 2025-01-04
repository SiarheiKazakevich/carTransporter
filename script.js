document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burgerMenu');
  const sideMenu = document.getElementById('sideMenu');
  const cabHeightSelect = document.getElementById('cabHeight');
  const trailerTypeSelect = document.getElementById('trailerType');
  const photoSlider = document.getElementById('photoSlider');

  burgerMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
  });

  cabHeightSelect.addEventListener('change', filterPhotos);
  trailerTypeSelect.addEventListener('change', filterPhotos);

  function filterPhotos() {
    const cabHeight = cabHeightSelect.value;
    const trailerType = trailerTypeSelect.value;

    photoSlider.innerHTML = `<p>Показаны фото для кабины: ${cabHeight}, типа прицепа: ${trailerType}</p>`;
    // Здесь можно добавить логику для отображения фото на основе выбранных фильтров
  }
});