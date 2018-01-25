for (el of document.getElementsByClassName('image')) {
  el.innerHTML = `<svg viewBox="0 0 16 14" class="triangle" style="transform: rotate(${Math.random()*360}deg) scale(${Math.random()*0.2+0.8})"><path d="M8 6L10 9L6 9Z"/></svg>` + el.innerHTML;
};

window.onscroll = function() {
  let cl = document.querySelector('header').classList;
  if (window.scrollY > 100) {
    cl.add('dark');
  } else {
    cl.remove('dark');
  }
}
