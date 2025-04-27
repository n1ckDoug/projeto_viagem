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
    const slider = document.querySelector('.slider input');
    const img = document.querySelector('.images .img-2');
    const dragLine = document.querySelector('.slider .drag-line');

    slider.oninput = () => {
        let sliderVal = slider.value;
        dragLine.style.left = sliderVal + '%';
        img.style.width = sliderVal + '%';
    }

    // Number Couting
    // Seleciona todos os elementos com a classe .num
    let valueDisplays = document.querySelectorAll(".num");

    // Define o tempo total da animação (5 segundos)
    let interval = 5000;

    // Cria um observador que monitora quando os elementos entram na área visível da tela
    let observer = new IntersectionObserver((entries, observer) => {
        // Para cada elemento observado...
        entries.forEach(entry => {
            // Verifica se o elemento está visível na tela (pelo menos 50%, conforme threshold abaixo)
            if (entry.isIntersecting) {
                // Pega o elemento que está visível
                let valueDisplay = entry.target;

                // Valor inicial da contagem
                let startValue = 0;

                // Valor final da contagem (vem do atributo data-count)
                let endValue = parseInt(valueDisplay.getAttribute("data-count"));

                // Calcula o tempo entre cada incremento
                // Garante que não divide por zero
                let duration = endValue ? Math.floor(interval / endValue) : interval;

                // Inicia a contagem com setInterval
                let counter = setInterval(function () {
                    // Incrementa o valor atual
                    startValue += 1;

                    // Atualiza o texto do elemento com o novo valor
                    valueDisplay.textContent = startValue;

                    // Quando atingir o valor final, para o intervalo
                    if (startValue === endValue) {
                        clearInterval(counter);
                    }
                }, duration);

                // Para de observar este elemento, assim a contagem não será repetida
                observer.unobserve(valueDisplay);
            }
        });
    }, {
        // Define que o callback será chamado quando 50% do elemento estiver visível
        threshold: 0.5
    });

    // Aplica o observador a cada elemento com a classe .num
    valueDisplays.forEach(display => {
        observer.observe(display);
    });

});