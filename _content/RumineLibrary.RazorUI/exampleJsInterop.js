// This is a JavaScript module that is loaded on demand. It can export any number of
// functions, and may import other JavaScript modules if required.

export function showPrompt(message) {
  return prompt(message, 'Type anything here');
}
export function scrollTo(elementId, offset) {
    const element = document.getElementById(elementId);
    window.scrollTo(0, element.offsetTop - offset);
    element.classList.add("highlite");
}

export function writeTextClipboard(text) {
    navigator.clipboard.writeText(text);
}
