import gsap from "gsap";

let lastPosition = { top: "140vh", left: "-50vw", scale: 1 }; // initial position slightly off-screen

export function animate(currentRoute, nextRoute) {
  let startPosition = { ...lastPosition };
  let endPosition = { ...lastPosition };

  if (!currentRoute && nextRoute === "home") {
    endPosition = { top: "80vh", left: "90vw", scale: 1 };
  } else if (currentRoute === "home" && nextRoute === "products") {
    endPosition = { top: "55vh", left: "50vw", scale: 1 };
  } else if (currentRoute === "products" && nextRoute === "about") {
    endPosition = { top: "80vh", left: "10vw", scale: 1 };
  } else if (currentRoute === "products" && nextRoute === "productPage") {
    endPosition = { top: "55vh", left: "50vw", scale: 3.2 };
  }

  if (!endPosition.scale) {
    endPosition.scale = lastPosition.scale;
  }

  gsap.to(".green", {
    ...startPosition,
    ...endPosition,
    duration: 0.8,
    ease: "power3",
    delay: 0.1,
    transform: "translate(-50%, -50%)",
    onComplete: () => {
      lastPosition = { ...endPosition };
    },
  });
}
