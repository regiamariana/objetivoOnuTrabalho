// const debounce = function name(func, wait, immediate) {
//     let timeout;
//     return function(...args) {
//         const context = this;
//         const later = function(){
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         const callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if(callNow) func.apply(context, args);
//     };
// };


const node = document.querySelector('.hello')


node.addEventListener('mousemove', function(){
    this.classList.add('hello-active');
});
node.addEventListener('mouseout', function(){
    this.classList.remove('hello-active');
});


const node2 = document.querySelector('.hello2')
node2.addEventListener('mousemove', function(){
    this.classList.add('hello-active2');
});
node2.addEventListener('mouseout', function(){
    this.classList.remove('hello-active2');
});


const node3 = document.querySelector('.hello3')
node3.addEventListener('mousemove', function(){
    this.classList.add('hello-active3');
});
node3.addEventListener('mouseout', function(){
    this.classList.remove('hello-active3');
});


const node4 = document.querySelector('.hello4')
node4.addEventListener('mousemove', function(){
    this.classList.add('hello-active4');
});
node4.addEventListener('mouseout', function(){
    this.classList.remove('hello-active4');
});


// node.addEventListener('mouseout', function(){
//     this.classList.remove('edon');
// });


const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate';


function animeScroll() {
    const windowTop = window.pageYOffset;

    target.forEach(function(element) {
        if ((windowTop) > element.offsetTop) {
            // element é referente ao parametro da função
            element.classList.add(animationClass)
        }

        // console.log(element.offsetTop)
    })
}
window.addEventListener('scroll', (function(){
    animeScroll();
    console.log('nhnhnhn')
}))






// animeScroll();




