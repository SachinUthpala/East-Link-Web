/*code for page animations */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entrie) => {
        console.log(entrie)
        if(entrie.isIntersecting){
            entrie.target.classList.add('showx');
        }else{
            entrie.target.classList.remove('showx');
        }
    });
})

const hiddenElementx = document.querySelectorAll('.hiddenx');
hiddenElementx.forEach((el) =>observer.observe(el))

/*end of the animation code */

const observery = new IntersectionObserver((entries) => {
    entries.forEach((entrie) => {
        console.log(entrie)
        if(entrie.isIntersecting){
            entrie.target.classList.add('showy');
        }else{
            entrie.target.classList.remove('showy');
        }
    });
})

const hiddenElementy = document.querySelectorAll('.hiddeny');
hiddenElementy.forEach((el) =>observery.observe(el))


/*end of the animation code */


const observerUp = new IntersectionObserver((entries) => {
    entries.forEach((entrie) => {
        console.log(entrie)
        if(entrie.isIntersecting){
            entrie.target.classList.add('showUp');
        }else{
            entrie.target.classList.remove('showUp');
        }
    });
})

const hiddenElementUp = document.querySelectorAll('.hiddenUp');
hiddenElementUp.forEach((el) =>observerUp.observe(el))


/*end of the animation code */