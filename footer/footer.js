

//FOOTER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//перевірка валідності почти
document.getElementById("footer_email").addEventListener('input', (event) => {
    const val = event.target.value;
    if (val.includes('@') || val === '') {
        document.getElementById("footer_but").disabled = true;
    } else { document.getElementById("footer_but").disabled = false; }
});


// зміна іконки соц сетей

document.getElementById("instagram").addEventListener('mouseover', (event) => {
    event.target.src = 'icons/EllipseI.png';
});
document.getElementById("instagram").addEventListener('mouseout', (event) => {
     event.target.src = 'icons/Ellipse1.png';
});

document.getElementById("twitter").addEventListener('mouseover', (event) => {
    event.target.src = 'icons/EllipseT.png';
});
document.getElementById("twitter").addEventListener('mouseout', (event) => {
     event.target.src = 'icons/Ellipse2.png';
});

document.getElementById("facebook").addEventListener('mouseover', (event) => {
    event.target.src = 'icons/EllipseF.png';
});
document.getElementById("facebook").addEventListener('mouseout', (event) => {
     event.target.src = 'icons/Ellipse3.png';
});

document.getElementById("linkedin").addEventListener('mouseover', (event) => {
    event.target.src = 'icons/EllipseL.png';
});
document.getElementById("linkedin").addEventListener('mouseout', (event) => {
     event.target.src = 'icons/Ellipse4.png';
});