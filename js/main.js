var wrapper = document.querySelector('.modal__body')
var shadow =document.querySelector('.shadow')



function openModal()  {
    wrapper.classList.add('open__modal')
    shadow.classList.add('shadows')
}

function closeModal() {
    wrapper.classList.remove('open__modal')
    shadow.classList.remove('shadows')
}