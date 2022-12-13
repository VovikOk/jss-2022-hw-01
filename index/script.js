
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


//зміна іконок  при наведенні
document.getElementById("sectionTeamBox").addEventListener('mouseover', (event) => {    
    if (event.target.mouseover !== null) {
        if (event.target.className === 'instagram') {
            event.target.src = 'icons/EllipseI.png';
        } else if (event.target.className === 'twitter') {
            event.target.src = 'icons/EllipseT.png';
        } else if (event.target.className === 'facebook') {
            event.target.src = 'icons/EllipseF.png';
        } else if (event.target.className === 'linkedin') {
            event.target.src = 'icons/EllipseL.png';
        }
    }
});
document.getElementById("sectionTeamBox").addEventListener('mouseout', (event) => {
       if (event.target.mouseout !== null) {
        if (event.target.className === 'instagram') {
            event.target.src = 'icons/Ellipse1.png';
        } else if (event.target.className === 'twitter') {
            event.target.src = 'icons/Ellipse2.png';
        } else if (event.target.className === 'facebook') {
            event.target.src = 'icons/Ellipse3.png';
        } else if (event.target.className === 'linkedin') {
            event.target.src = 'icons/Ellipse4.png';
        }
    }
});

document.getElementById("firstCustome").addEventListener('mouseover', (event) => {
    event.target.src = 'icons/ClientH1.png';
});
document.getElementById("firstCustome").addEventListener('mouseout', (event) => {
     event.target.src = 'icons/Logo1.png';
});
document.getElementById("secondCustome").addEventListener('mouseover', (event) => {
    event.target.src = 'icons/ClientH2.png';
});
document.getElementById("secondCustome").addEventListener('mouseout', (event) => {
     event.target.src = 'icons/Logo2.png';
});
document.getElementById("thirdCustome").addEventListener('mouseover', (event) => {
    event.target.src = 'icons/ClientH3.png';
});
document.getElementById("thirdCustome").addEventListener('mouseout', (event) => {
     event.target.src = 'icons/Logo3.png';
});
document.getElementById("fourthCustome").addEventListener('mouseover', (event) => {
    event.target.src = 'icons/ClientH4.png';
});
document.getElementById("fourthCustome").addEventListener('mouseout', (event) => {
     event.target.src = 'icons/Logo4.png';
});
document.getElementById("fifthCustome").addEventListener('mouseover', (event) => {
    event.target.src = 'icons/ClientH5.png';
});
document.getElementById("fifthCustome").addEventListener('mouseout', (event) => {
     event.target.src = 'icons/Logo5.png';
});
document.getElementById("sixthCustome").addEventListener('mouseover', (event) => {
    event.target.src = 'icons/ClientH6.png';
});
document.getElementById("sixthCustome").addEventListener('mouseout', (event) => {
     event.target.src = 'icons/Logo6.png';
});


