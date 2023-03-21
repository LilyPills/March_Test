let dev = document.querySelectorAll ('.notas')

let tabela = document.querySelector('#tabVendas')


tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut')


    setTimeout(function () {
        event.target.parentNode.remove()
    }, 500)
   
})
