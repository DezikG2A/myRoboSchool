const openModalBtns = document.querySelectorAll('#open-modal-btn');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('my-modal').classList.add('open');
  });
});

document.getElementById('close-btn').addEventListener('click', () => {
  document.getElementById('my-modal').classList.remove('open');
});

const tubsItem = document.querySelectorAll('.tubs-btn-item');
const tubsContent = document.querySelectorAll('.tubs-dis');

  for (let item of tubsItem){
    item.addEventListener('click', function(){

      for (let element of tubsContent){
        element.classList.add('tubs-dis')
      }

      const content = document.querySelector('#' + item.dataset.button);
      content.classList.remove('tubs-dis')
    }
  )}

const tubsClick = document.querySelectorAll('.tubs-btn-item');

  tubsClick.forEach(item => item.addEventListener('click', event =>{
    const tubsTarg = event.target.getAttribute('data-content');

    tubsClick.forEach(element => element.classList.remove('tubs-btn-item--active'))


    item.classList.add('tubs-btn-item--active');

    document.getElementById(tubsTarg).classList.remove('tubs-dis')
}))

document.querySelector('#content-1').classList.remove('tubs-dis')

const swiper = new Swiper('.swiper', {
    // If we need pagination
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });