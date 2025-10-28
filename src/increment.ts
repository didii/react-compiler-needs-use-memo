/** Increments a value with vanilla JS as to skip Reacts lifecycle */
export function increment(elementId) {
  const el = document.getElementById(elementId);
  if (el != null) {
    const currentCount = parseInt(el.innerText);
    el.innerText = "" + (currentCount + 1);
  }
}
