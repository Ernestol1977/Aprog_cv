window.onscroll = function () {
    if (document.documentElement.scrollTop > 250) {
        document.querySelector('.gotop-container').classList.add('show');
    } else {
        document.querySelector('.gotop-container').classList.remove('show');
    }
};

document.querySelector('.gotop-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let modal = document.getElementById('modalbtn')
modal.addEventListener('click', (evt) => {
    evt.preventDefault
    let form = document.getElementById('staticBackdrop')
    form.style.zIndex = '12'
}) 