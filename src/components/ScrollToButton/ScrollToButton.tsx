"use client";
// import gsap from "gsap";
// import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
// gsap.registerPlugin(ScrollToPlugin);

interface ScrollToButtonProps {
  children: React.ReactNode;
  target: string;
  offset?: number;
}

export default function ScrollToButton({
  children,
  target,
  offset = 0,
}: ScrollToButtonProps): JSX.Element {
  const handleClick = async () => {
    const gsap = (await import("gsap")).default;
    gsap.registerPlugin((await import("gsap/dist/ScrollToPlugin")).default);
    gsap.to(window, { duration: 0.5, scrollTo: { y: target, offsetY: -offset } });
  };

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}
