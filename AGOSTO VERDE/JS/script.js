const debounce = function name(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function(){
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate';


function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

    target.forEach(function(element) {
        if ((windowTop) > element.offsetTop) {
            // element é referente ao parametro da função
            element.classList.add(animationClass)
        }

        // console.log(element.offsetTop)
    })
}

animeScroll();


if (target.length) {
window.addEventListener('scroll', debounce(function(){
    animeScroll();
    console.log('nhnhnhn')
}, 200))
}