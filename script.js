//alert("Obrigado por acessar");

// async function getApi() {
//     const respostaDaApi = await fetch('https://baco-api.up.railway.app/items', {
//         headers: {
//             "Access-Control-Allow-Origin": "*",
//         }
//     }).then((e) => {
//         console.log('Galinha:', e)
//     })
// }

// getApi()

const chk = document.getElementById('chk')

const headerElement = document.getElementsByClassName('header');



chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})  