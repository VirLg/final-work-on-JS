window.onload = () => {
  const options = {
    root: null,
    rootMargin: "100px",
    threshold: 1.0,
  };
}

let observer = new IntersectionObserver((entrys, observe) => {
  console.log(entrys);
  entrys.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
    }
  }
  )
}, options
  );
  






// let callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     // Each entry describes an intersection change for one observed
//     // target element:
//     //   entry.boundingClientRect
//     //   entry.intersectionRatio
//     //   entry.intersectionRect
//     //   entry.isIntersecting
//     //   entry.rootBounds
//     //   entry.target
//     //   entry.time
//   });
// };









// let target = document.querySelector(".gallery");
// observer.observe(target);


export default {observer}


// const loadingObserver = new IntersectionObserver(entries => {
//   entries.forEach(entry => { /* для каждого наблюдаемого элемента */
//     if (entry.isIntersecting) { /* если элемент находится в видимой части браузера */
//       /* то подгружаем очередные 10 постов */
//     }
//   })
// });

/* указываем, что необходимо наблюдать за лоадером */
// loadingObserver.observe(document.querySelector('.posts__loading'))


// const { height: cardHeight } = document
//   .querySelector(".gallery")
//   .firstElementChild.getBoundingClientRect();

// window.scrollBy({
//   top: cardHeight * 2,
//   behavior: "smooth",
// });