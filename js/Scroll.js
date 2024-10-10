// script.js

let isScrolling = false;
let currentScreenIndex = 0;
const html = document.querySelector('html');

const screensWrapper = document.querySelector('.screens-wrapper'); // Контейнер с экранами
const screens = document.querySelectorAll('.screen'); // Все экраны
const totalScreens = screens.length; // Количество экранов

function scrollToScreen(index) {
    if (index < 0 || index >= totalScreens) return; // Проверка на границы

    isScrolling = true;
    const translateY = -index * 100; // Вычисляем сдвиг экрана на основе индекса

    screensWrapper.style.transform = `translateY(${translateY}vh)`; // Плавно смещаем экраны

    currentScreenIndex = index;
    if (index % 2 != 0) {
        document.querySelector(".navbar").classList.add("even")
    }
    else {
        document.querySelector(".navbar").classList.remove("even")
    }

    setTimeout(() => {
        isScrolling = false;
    }, 1000); // Время соответствует анимации прокрутки
}
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
console.log(isMobile)
if (!isMobile) {
    html.classList.add('no-scroll');
    document.addEventListener('wheel', function (event) {
        if (isScrolling) return;

        if (event.deltaY > 0 && currentScreenIndex < totalScreens - 1) {
            // Скролл вниз — переход к следующему экрану
            scrollToScreen(currentScreenIndex + 1);
        } else if (event.deltaY < 0 && currentScreenIndex > 0) {
            // Скролл вверх — переход к предыдущему экрану
            scrollToScreen(currentScreenIndex - 1);
        }
    });

    // Учитываем изменение размеров окна
    window.addEventListener('resize', function () {
        scrollToScreen(currentScreenIndex);
    });
}
else{
    html.classList.remove('no-scroll');
}
