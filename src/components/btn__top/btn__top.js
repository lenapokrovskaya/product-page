const scrollToTopBtn = document.querySelector('.btn-top');
const rootElement = document.documentElement;

function showScrollToTopBtn() {
  scrollToTopBtn.classList.remove('btn-top--hidden');
  scrollToTopBtn.classList.add('btn-top--show');
}

function removeScrollToTopBtn() {
  scrollToTopBtn.classList.remove('btn-top--show');
  scrollToTopBtn.classList.add('btn-top--hidden');
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

scrollToTopBtn.addEventListener('click', scrollToTop);

function showScrollToTopByScroll() {
  if (window.pageYOffset + rootElement.clientHeight >= rootElement.scrollHeight - 1) {
    showScrollToTopBtn();
  } else {
    removeScrollToTopBtn();
  }
}

window.addEventListener('scroll', showScrollToTopByScroll);
