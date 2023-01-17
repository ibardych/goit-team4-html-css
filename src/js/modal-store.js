(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtns: document.querySelectorAll('[data-modal-close]'),
    sendModalBtn: document.querySelector('[data-action="send"'),
    modal: document.querySelector('[data-modal]'),
    modalForm: document.querySelector('.modal-wrapper'),
    gratitudePopup: document.querySelector('.modal-gratitude'),
    spinnerEl: document.querySelector('.spinner'),
    form: document.querySelector('form[name=modal-form]'),
  };

  refs.openModalBtns.forEach(openBtn => {
    openBtn.addEventListener('click', toggleModal);
  }); // add function to select all buttons that open modal window

  refs.closeModalBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', toggleModal);
  });

  function toggleModal(event) {
    event.preventDefault();
    if (event.target.dataset.action === 'send') {
      if (
        refs.sendModalBtn.classList.contains('modal-button-diabled') === false
      ) {
        refs.spinnerEl.classList.remove('visually-hidden');
        refs.modalForm.style.opacity = 0;
        setTimeout(() => {
          refs.gratitudePopup.classList.remove('visually-hidden');
          refs.modalForm.classList.add('visually-hidden');
          refs.spinnerEl.classList.add('visually-hidden');

          refs.form.reset();
          refs.sendModalBtn.classList.add('modal-button-diabled');
        }, 1000); // set time to toogle popup view
      }
    } else {
      refs.modal.classList.toggle('is-hidden');
      setTimeout(() => {
        refs.modalForm.classList.remove('visually-hidden');
        refs.modalForm.style.opacity = 1;
        refs.gratitudePopup.classList.add('visually-hidden');
      }, 500);
    }
  }

  refs.sendModalBtn.addEventListener('click', toggleModal);

  const textInput = document.querySelectorAll('.text-input');

  textInput.forEach(input => {
    input.addEventListener('input', checkForm);
  });

  function checkForm() {
    const name = document.querySelector('input#modal-store-name');
    const email = document.querySelector('input#modal-store-email');

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (
      name.value !== '' &&
      email.value !== '' &&
      email.value.match(validRegex)
    ) {
      refs.sendModalBtn.classList.remove('modal-button-diabled');
    } else {
      refs.sendModalBtn.classList.add('modal-button-diabled');
    }
  }
})();
