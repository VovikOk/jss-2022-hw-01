
//HEADER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//підсвічуємо вкладку активної сторінки
let adress = document.location.href;

if (adress === 'https://vovikok.github.io/jss-2022-hw-01/porfolio.html') {
    let portfolio = document.getElementById("portfolio");
  portfolio.classList.add('active');
};

if (adress === 'https://vovikok.github.io/jss-2022-hw-01/index.html') {
    let studio = document.getElementById("studio");
  studio.classList.add('active');
};


//зміна іконок поряд з ссилками у header
const mailImg = document.getElementById('header_mail_img');
document.getElementById("header_mailto").addEventListener('mouseover', (event) => {
    mailImg.src = 'icons/envelope2.png';
});
document.getElementById("header_mailto").addEventListener('mouseout', (event) => {
    mailImg.src = 'icons/envelope.png';
});

const phoneImg = document.getElementById('header_phone_img');
document.getElementById("header_phone").addEventListener('mouseover', (event) => {
    phoneImg.src = 'icons/smartphone2.png';
});
document.getElementById("header_phone").addEventListener('mouseout', (event) => {
    phoneImg.src = 'icons/smartphone.png';
});



