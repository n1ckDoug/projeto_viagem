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

});