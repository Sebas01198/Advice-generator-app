let mensaje = document.querySelector('.container');

 fetch('https://api.adviceslip.com/advice')
 .then(response => response.json()) 
 .then(data => {
    const advice = data.slip.advice;
    const id = data.slip.id;
    
    mensaje.innerHTML = `
    <h3 class="id">ADVICE # ${id}</h3>
        <p class="advice">"${advice}"</p>
        <img src="images/pattern-divider-mobile.svg" alt="">
    <div class="dice">
        <img src="images/icon-dice.svg" alt="">
    </div>
    `

    
    let button = document.querySelector('.dice');

    button.addEventListener('click', () => {
        location.reload(true);
    });
    
});

