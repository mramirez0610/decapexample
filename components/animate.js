import gsap from "gsap";

let lastPosition = { top: "120vh", left: "-50vw" }; // initial position slightly off-screen

export function animate(currentRoute, nextRoute) {
  let startPosition = { ...lastPosition };
  let endPosition;

  if (!currentRoute && nextRoute === "home") {
    endPosition = { top: "100vh", left: "0vw" };
  } else if (currentRoute === "home" && nextRoute === "products") {
    endPosition = { top: "50vh", left: "50vw" };
  } else if (currentRoute === "products" && nextRoute === "about") {
    endPosition = { top: "100vh", left: "100vw" };
  }

  gsap.fromTo(".green", startPosition, {
    ...endPosition,
    duration: 1,
    ease: "power2.inOut",
    transform: "translate(-50%, -50%)",
    onComplete: () => {
      lastPosition = { ...endPosition };
    },
  });
}
