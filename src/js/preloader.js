export function preloaderStart () {
    document.body.classList.add('loaded_hiding');
  }

  export function preloaderStop () {
    setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
      }, 1000);
  }