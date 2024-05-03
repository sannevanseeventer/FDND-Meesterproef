// In a separate JavaScript file (e.g., drag.js)
export function enableDrag(containerSelector, sectionSelector) {
  const container = document.querySelector(containerSelector);
  const section = document.querySelector(sectionSelector);

  let isDragging = false;
  let startX, startY, initialLeft, initialTop;

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialLeft = container.offsetLeft;
    initialTop = container.offsetTop;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  function handleMouseMove(e) {
    if (isDragging) {
      e.preventDefault();
      const x = e.clientX;
      const y = e.clientY;
      const moveX = x - startX;
      const moveY = y - startY;

      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const sectionWidth = section.offsetWidth;
      const sectionHeight = section.offsetHeight;

      let newLeft = initialLeft + moveX;
      let newTop = initialTop + moveY;

      // Restrict movement within section boundaries
      if (newLeft > 0) {
        newLeft = 0;
      } else if (newLeft < sectionWidth - containerWidth) {
        newLeft = sectionWidth - containerWidth;
      }

      if (newTop > 0) {
        newTop = 0;
      } else if (newTop < sectionHeight - containerHeight) {
        newTop = sectionHeight - containerHeight;
      }

      container.style.transform = `translate(${newLeft}px, ${newTop}px)`;
    }
  }

  function handleMouseUp() {
    isDragging = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }
}
