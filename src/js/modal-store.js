(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-store]'),
      closeModalBtn: document.querySelector('[data-modal-close-store]'),
      modal: document.querySelector('[data-modal-store]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      const scrollLockMethod = !refs.modal.classList.contains('is-hidden')
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    }
  })();