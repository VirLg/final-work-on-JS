const loadingObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { /* для каждого наблюдаемого элемента */
    if (entry.isIntersecting) { /* если элемент находится в видимой части браузера */
      /* то подгружаем очередные 10 постов */
    }
  })
});

/* указываем, что необходимо наблюдать за лоадером */
loadingObserver.observe(document.querySelector('.posts__loading'))


const { height: cardHeight } = document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: "smooth",
});