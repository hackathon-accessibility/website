const burgerBtn = document.getElementById('burger-button');
const burgerMenuContent = document.getElementById('burger-menu-content');
burgerBtn.addEventListener('click', function() {
    if (burgerBtn.getAttribute('aria-expanded') === 'false') {
        burgerBtn.setAttribute('aria-expanded', 'true');
        burgerMenuContent.setAttribute('aria-expanded', 'true');
        burgerBtn.setAttribute('aria-label', burgerBtn.getAttribute('data-aria-label-closed'));
    } else {
        burgerBtn.setAttribute('aria-expanded', 'false');
        burgerMenuContent.setAttribute('aria-expanded', 'false');
        burgerBtn.setAttribute('aria-label', burgerBtn.getAttribute('data-aria-label-open'));
    }
});
