// Loads shared HTML partials (e.g. header/footer) into elements with a data-include attribute.
document.querySelectorAll("[data-include]").forEach((el) => {
  const url = el.getAttribute("data-include");
  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      el.outerHTML = html;
    })
    .catch((err) => console.error(`Failed to load partial "${url}":`, err));
});
