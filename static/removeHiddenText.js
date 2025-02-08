document.addEventListener("DOMContentLoaded", function () {
    function removeHiddenText() {
      document.querySelectorAll("*").forEach((node) => {
        if (node.childNodes.length) {
          node.childNodes.forEach((child) => {
            if (child.nodeType === 3) { // Node is a text node
              child.textContent = child.textContent.replace(/%%(.*?)%%/gs, '');
            }
          });
        }
      });
    }
  
    removeHiddenText();
  });
  