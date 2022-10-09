const voteBtn = document.querySelectorAll('.vote');
const submit = document.querySelector('.submit');

const main = document.querySelector('.main');
const thankYou = document.querySelector('.thank-you')

const result = document.querySelector('.result');

var selected;

voteBtn.forEach((button)=>{
    button.addEventListener('click', ()=>{
        // remove active from other buttons
        voteBtn.forEach(button => button.classList.remove('active'));
        button.classList.add('active');
        selected = button.innerHTML;
    })
})

submit.addEventListener('click', ()=>{
    // if nothing is active
    if(selected == undefined){
        alert('errore, devi selezionare almeno un voto');
        return ;
    }

    main.classList.add('hide');
    thankYou.classList.remove('hide');
    
    result.innerHTML = 'You selected ' + selected + ' out of 5'
})