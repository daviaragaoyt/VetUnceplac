//alert("Obrigado por acessar");

const chk = document.getElementById('chk')

const headerElement = document.getElementsByClassName('header');



chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})  