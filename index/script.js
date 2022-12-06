
//зміна зображення при зміні розміру сторінки
window.addEventListener("resize", reportWindowSize);
//перевірка актуального зображення при перезвагрузці сторінки
document.addEventListener("DOMContentLoaded", reportWindowSize);

function reportWindowSize() {
    if (768 <= window.innerWidth) {
        document.getElementById('section_servise_img').src = 'image/Img.png';
    } else if (480 <= window.innerWidth && window.innerWidth <= 768) {
        document.getElementById('section_servise_img').src = 'image/HeaderImg.jpg';
    } else if (window.innerWidth <= 480) {
        document.getElementById('section_servise_img').src = 'image/smallHeaderImg.png';
    }
}

