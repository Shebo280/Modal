'use strict';
const btnOpenModal = document.querySelectorAll(`.show-modal`);
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
function openModel() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function closeModel() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModel);
btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModel();
});
