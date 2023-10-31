"use client";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

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
  const handleClick = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: -offset } });
  };

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}
