// function to initialize cursor functionality
export default function initializeCursor() {
  const mainCursor = document.getElementById("mainCursor");
  const secondaryCursor = document.getElementById("secondaryCursor");
  const positionRef = {
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  };

  document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const mouseX = clientX;
    const mouseY = clientY;

    positionRef.mouseX = mouseX - secondaryCursor.clientWidth / 2;
    positionRef.mouseY = mouseY - secondaryCursor.clientHeight / 2;

    mainCursor.style.transform = `translate3d(${
      mouseX - mainCursor.clientWidth / 2
    }px, ${mouseY - mainCursor.clientHeight / 2}px, 0)`;
  });

  function followMouse() {
    positionRef.key = requestAnimationFrame(followMouse);

    const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } =
      positionRef;

    if (!destinationX || !destinationY) {
      positionRef.destinationX = mouseX;
      positionRef.destinationY = mouseY;
    } else {
      positionRef.distanceX = (mouseX - destinationX) * 0.3;
      positionRef.distanceY = (mouseY - destinationY) * 0.3;

      if (
        Math.abs(positionRef.distanceX) + Math.abs(positionRef.distanceY) <
        0.1
      ) {
        positionRef.destinationX = mouseX;
        positionRef.destinationY = mouseY;
      } else {
        positionRef.destinationX += distanceX;
        positionRef.destinationY += distanceY;
      }
    }

    secondaryCursor.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0 )`;
  }

  followMouse();
}
