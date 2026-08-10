const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const authModal = document.getElementById('auth-modal');
const authForms = document.querySelectorAll('.auth-form');
const openAuth = (formName) => {
  authForms.forEach(form => form.classList.toggle('active', form.id === `${formName}-form`));
  authModal.classList.add('open');
  authModal.setAttribute('aria-hidden', 'false');
  authModal.querySelector('.auth-form.active input').focus();
};
const closeAuth = () => {
  authModal.classList.remove('open');
  authModal.setAttribute('aria-hidden', 'true');
};
document.querySelectorAll('.open-auth').forEach(button => button.addEventListener('click', () => openAuth(button.dataset.authForm)));
document.querySelectorAll('[data-switch-auth]').forEach(button => button.addEventListener('click', () => openAuth(button.dataset.switchAuth)));
document.querySelectorAll('[data-close-auth]').forEach(button => button.addEventListener('click', closeAuth));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeAuth(); });
document.querySelectorAll('[data-demo-form]').forEach(form => form.addEventListener('submit', event => {
  event.preventDefault();
  alert('This form is ready for a backend connection. No account details have been sent or saved.');
}));
