document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 1;
  const totalImages = 12;
  const imgElement = document.getElementById("slider-img");

  // --- Slider automático ---
  let interval = setInterval(nextImage, 5000);

  function nextImage() {
    currentIndex++;
    if (currentIndex > totalImages) currentIndex = 1;
    imgElement.src = `./img_fotos/${currentIndex}.jpg`;
  }

  // --- Modal ---
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  // Abrir modal al hacer clic en la imagen
  imgElement.addEventListener("click", () => {
    clearInterval(interval); // detener automático
    modal.style.display = "block";
    modalImg.src = imgElement.src;
  });

  // Cerrar modal
  closeBtn.onclick = () => {
    modal.style.display = "none";
    interval = setInterval(nextImage, 5000); // reactivar automático
  };

  // Navegación manual dentro del modal
  nextBtn.onclick = () => {
    nextImage();
    modalImg.src = imgElement.src;
  };

  prevBtn.onclick = () => {
    currentIndex--;
    if (currentIndex < 1) currentIndex = totalImages;
    imgElement.src = `./img_fotos/${currentIndex}.jpg`;
    modalImg.src = imgElement.src;
  };

  // Cerrar con tecla ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.style.display = "none";
      interval = setInterval(nextImage, 5000);
    }
  });
});
