const link = document.getElementsByTagName("a");

window.addEventListener("load", () => {
  for (let i = 0, len = link.length; i < len; i++) {
    link[i].addEventListener("click", (ev: Event) => {
      if (ev.currentTarget instanceof HTMLInputElement){
        const url = ev.currentTarget.getAttribute("href");
        if ( url !== null && url.match(/^\#/g)) {
          ev.preventDefault();
          const scrollTop = window.pageYOffset;
          const targetDOM = document.querySelector(url), targetPositionTop = (url === "#") ? 0 : targetDOM!.getBoundingClientRect().top + scrollTop;
          console.log(url, scrollTop, targetPositionTop)
          window.scrollTo(0, targetPositionTop)
        }
      }
    });
  }
});