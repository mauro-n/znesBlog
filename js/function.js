const expandBtn = document.querySelector('#expand-btn');
const navContent = document.querySelector('#nav-content');

expandBtn.addEventListener('click', function() {
    navContent.classList.toggle('collapse');
});