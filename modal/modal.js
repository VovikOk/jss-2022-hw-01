// подложка
document.getElementById('header_mailto').addEventListener('click', (event) => {
  event.preventDefault();  
  document.getElementById('modalWindow').classList.add('modal');     
     document.getElementById('top_form').style.zIndex = 9999;
});

document.getElementById('burger_mailto').addEventListener('click', (event) => {
  event.preventDefault();  
  document.getElementById('modalWindow').classList.add('modal');
     document.getElementById('top_form').style.zIndex = 9999;
     document.getElementById('burgerBox').style.visibility = 'hidden';

});
document.getElementById('modal_button').onclick = () => {   
  document.getElementById('modalWindow').classList.remove('modal'); 
  document.getElementById('top_form').style.zIndex = -1;
}

// зміна хрестику кнопки close
document.getElementById('modal_img').addEventListener('mouseover', ({ target }) => {
     target.src = 'icons/close-black-18dp (2) 1.png';
});
document.getElementById('modal_img').addEventListener('mouseout', ({ target }) => {
     target.src = 'icons/close-black-18dp (1) 1.png';
});

//

  
document.getElementById("inputName").addEventListener('click', (event) => {  
     event.target.nextElementSibling.src = 'icons/person-black-18dp 2.png';
     event.target.style.borderColor = '#2196F3'; 
});
document.getElementById("inputName").addEventListener('blur', (event) => {
     event.target.nextElementSibling.src = 'icons/person-black-18dp 1.png';
     event.target.style.borderColor = 'black';  
});

document.getElementById("inputPhone").addEventListener('click', (event) => {  
     event.target.nextElementSibling.src = 'icons/phone-black-18dp 2.png';
     event.target.style.borderColor = '#2196F3'; 
});
document.getElementById("inputPhone").addEventListener('blur', (event) => {
     event.target.nextElementSibling.src = 'icons/phone-black-18dp 1.png';
     event.target.style.borderColor = 'black';  
});

document.getElementById("inputMail").addEventListener('click', (event) => {  
     event.target.nextElementSibling.src = 'icons/email-black-18dp 2.png';
     event.target.style.borderColor = '#2196F3'; 
});
document.getElementById("inputMail").addEventListener('blur', (event) => {
     event.target.nextElementSibling.src = 'icons/email-black-18dp 1.png';
     event.target.style.borderColor = 'black';  
});

document.getElementById("textareaText").addEventListener('click', (event) => {     
  event.target.style.borderColor = '#2196F3'; 
  event.target.value = '';
});
document.getElementById("textareaText").addEventListener('blur', (event) => {     
  event.target.style.borderColor = 'black'; 
  event.target.value = 'Введіть текст';
});
