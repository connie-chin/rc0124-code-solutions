'use strict';
const $openModal = document.querySelector('.open-modal');
if (!$openModal) throw new Error('This $openModal query failed');
const $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) throw new Error('This $dismissModal query failed');
const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('This $dialog query failed');
function forOpenModel(event) {
  $dialog?.showModal();
  // console.log('ad pops up now');
}
$openModal.addEventListener('click', forOpenModel);
function forDisMiss(event) {
  $dialog?.close();
  // console.log('ad closes now');
}
$dismissModal.addEventListener('click', forDisMiss);
