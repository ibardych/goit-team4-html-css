(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-1]"),closeModalBtn:document.querySelector("[data-modal-close-1]"),modal:document.querySelector("[data-modal-1]")};function o(){e.modal.classList.toggle("is-hidden");const o=e.modal.classList.contains("is-hidden")?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openMobileMenuBtn:document.querySelector("[data-mobile-menu-open]"),closeMobileMenuBtns:document.querySelectorAll("[data-mobile-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]")};function o(){e.mobileMenu.classList.toggle("is-menu-hidden");const o=e.mobileMenu.classList.contains("is-menu-hidden")?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)}e.openMobileMenuBtn.addEventListener("click",o),e.closeMobileMenuBtns.forEach((e=>{e.addEventListener("click",o)}))})();
//# sourceMappingURL=index.57e1204b.js.map