document.addEventListener('DOMContentLoaded', function () {

    let btnLoad = document.querySelector('#btn-load');

    let currentItem = 3;

    btnLoad.addEventListener('click', function () {
        
        let boxes = [...document.querySelectorAll('.box')];
        for (let i = currentItem; i < currentItem + 3; i++) {
            boxes[i].style.display = 'block';
        }
        currentItem += 3;

        if (currentItem >= boxes.length) {
            btnLoad.style.display = 'none';
        }
    });

    // Image Comparison Slider
    const slider =  document.querySelector('.slider input');
    const img =  document.querySelector('.images .img-2');
    const dragLine =  document.querySelector('.slider .drag-line');

    slider.oninput = () => {
        let sliderVal = slider.value;
        dragLine.style.left = sliderVal + '%';
        img.style.width = sliderVal + '%';
    }

});