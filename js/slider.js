let string_array = ["Привет, это первый слайд", "А вот и второй слайд", "Стой, есть еще и третий", "И на последок четвертый"];




setTimeout(function () {
    if(localStorage.getItem('enable') === 'true') {
        document.getElementById('div-slider').style.display = 'block';
    }
}, 5000);



function disibleDiv() {
    let chbox;
    chbox = document.getElementById('checkbox');
    if (chbox.checked) {
        localStorage.setItem('enable', 'false');
    }
    else {
        localStorage.setItem('enable', 'true');
    }
}

let closeBtn = document.getElementById('div-close');
closeBtn.addEventListener("click", function(){
    document.getElementById('div-slider').style.display = 'none';
}, false);

document.getElementById("div-ul").innerHTML += '<li class="selected"></li>';
for (let i = 0; i < string_array.length - 1; i++) {
    document.getElementById("div-ul").innerHTML += '<li></li>';
}

const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slider');

const indicatorParent = document.querySelector('.control ul');
const indicators = document.querySelectorAll('.control li');
index = 0;


indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        document.querySelector('.control .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translateX(' + (i) * -25 + '%)';
        index = i;

    });
});

left.addEventListener('click', function () {
    moveLeft();
});

right.addEventListener('click', function () {
    moveRight();
});


function moveLeft() {
    index = (index > 0) ? index - 1 : 0;
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';
}

function moveRight() {
    index = (index < 4 - 1) ? index + 1 : 3;
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';
}

for (let i = 0; i < string_array.length; i++) {
    document.getElementById("div-section").innerHTML += "<section>" + (string_array[i]) + "</section>";
}


document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        moveLeft();
    }
    if (event.keyCode == 39) {
        moveRight();
    }
    if(event.keyCode == 27) {
        document.getElementById('div-slider').style.display = 'none';
    }
});