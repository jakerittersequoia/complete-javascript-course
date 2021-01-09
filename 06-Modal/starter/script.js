'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const closeModal = function(){
                                modal.classList.add('hidden');
                                overlay.classList.add('hidden');
                              };

const openModal = function(){
                              console.log('Button clicked');
                              modal.classList.remove('hidden');
                              overlay.classList.remove('hidden');
                            };

btnCloseModal.addEventListener('click',closeModal);

overlay.addEventListener('click',closeModal);

for (let i = 0; i < btnsShowModal.length; i++) {
                                                  console.log(btnsShowModal[i].textContent)
                                                  btnsShowModal[i].addEventListener('click',openModal);
                                                };

document.addEventListener('keydown', function(e){
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')){
      closeModal();
  };
});
