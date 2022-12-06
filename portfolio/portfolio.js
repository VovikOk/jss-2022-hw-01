


//section_center!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

//формування центральної частини "фільтра"
let arrAll = [];

let massP = ['Веб-сайти','Дизайн','Додатки','Маркетинг','Додатки','Дизайн','Веб-сайти','Дизайн','Маркетинг','Додатки'];
let massH = ['Технокряк', 'Постер New Orlean vs Golden Star','Ресторан Seafood','Проєкт Prime','Проєкт Boxes','Inspiration has no Borders', 'Видання Limited Edition', 'Проєкт LAB', 'Growing Business' ];
let massPText = ['Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.'];
let numImg = 9;// кількість img в папці

let div;
let span;
let h2;
let p;
let img;    
let section;

//текст при наведенні курсору
let divFon;
let divText;
let pText;

//вкладка при відкритті сторінки
document.getElementById("amontChoice1").addEventListener('checked', allFilter());
//let t = document.querySelectorAll(".boxFonNone");

// принаведенні курсору
let currentElem = null;
document.getElementById("al").addEventListener('mouseover',  ({ target }) => {    
    //якщо під курсором box_img додаємо клас boxFon до елементу з класом , який стоїть наступним
    if (target.className === 'box_img') {
        target.nextSibling.classList.add("boxFon");
    //находим останній за  box_img елемент (р), найвищій
        currentElem = target.nextSibling.lastChild.lastChild;        
    } else { return;};     
});

document.getElementById("al").addEventListener('mouseout',  ({ target }) => {      
    if (currentElem === target) {
        return
    } else {
         target.offsetParent.classList.remove("boxFon");
         currentElem = null;               
    };
});


//відображаємо картки в центральній секції
function createFilter(i) {
    //задаємо теги
    divFon = document.createElement('div'); //подложка
    divText = document.createElement('div');// блок тексту подложки
    pText = document.createElement('p');//текст подложки

    div = document.createElement('div'); // карточка
    span = document.createElement('span');//підпис карточки
    h2 = document.createElement('h2');//заголовок карточки
    p = document.createElement('p');//опис карточки      
    img = document.createElement('img');//картинка карточки    
    section = document.getElementById('al');//основний контейнер
    //додаємо 
    divFon.className = "boxFonNone";    
    divText.className = "boxText";

    div.className = "box";
    img.className = "box_img";
    span.className = "all_box_title";    

    h2.innerHTML = massH[i-1];//додаємо заголовок
    p.innerHTML = massP[i - 1];//додаємо опис
    pText.innerHTML = massPText[0];//додаємо опис
    img.src = 'image/img' + i + '.jpg';//додаємо адресу  img    
    //будуємо структуру HTML    
    section.append(div);// додаємо тег div (карточка) в кінець     
    div.append(img); 
    div.append(divFon);  
    divFon.append(divText); 
    divText.append(pText); 
    div.append(span);
    span.append(h2);
    span.append(p);  
    arrAll.push([massH[i - 1], massP[i - 1], img.src]);    
    /*divFon.hidden = true;*/
    
};

//удаляем картки в центральній секції
function removeFilter() {
    document.getElementById('al').innerHTML = "";
    arrAll.splice(0);  
}

//вкладка all
function allFilter() {
    removeFilter();
    for (let i = 1; i <= numImg; i++) {            
            createFilter(i);         
    }     
}
//інші вкладки
function strFilter(el) {
    removeFilter();    
    for (let i = 1; i <= numImg; i++) {        
        if ( massP[i-1]===el) {          
            createFilter(i);
        }   
    }     
}
