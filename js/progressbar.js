Reveal.initialize({
    hash: true,
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
});


function animateGauge(gaugeElement, totalValue) {
    let t = 0;
    const animation = setInterval(() => {
        gaugeElement.dataset.percent = t;
        gaugeElement.style.background = `conic-gradient(#E54C21 0 ${t}%, #DEDEDE ${t}% 100%)`;
        t++ >= totalValue && clearInterval(animation);
    }, 10);
}


Reveal.addEventListener('slidechanged', (event) => {
    const currentSlide = event.currentSlide;
    const isPercentageSlide = currentSlide.hasAttribute('section') && currentSlide.getAttribute('section') === 'per';

    if (isPercentageSlide) {
        const totalMinwon = [80, 85, 80]; // Update this array with desired data-percent values

        // Start animations for each percentage gauge
        animateGauge(document.querySelector("#donut"), totalMinwon[0]);
        animateGauge(document.querySelector("#donut2"), totalMinwon[1]);
        animateGauge(document.querySelector("#donut3"), totalMinwon[2]);
    }
});
