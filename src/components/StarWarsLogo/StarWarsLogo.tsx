"use client";
import { useEffect, useState } from "react";

export default function StarWarsLogo() {
  const [current, setCurrent] = useState("rebel");

  const startEmpire = () => console.log("start empire");

  useEffect(() => {
    current === "start" && startEmpire();
  }, [current]);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 496 512"
        onClick={() => setCurrent(current === "empire" ? "start" : "empire")}
        className={current === "empire" || current === "start" ? "empire" : "rebel"}
      >
        <path
          id="empire"
          style={{
            opacity: current === "empire" || current === "start" ? 1 : 0,
          }}
          d="M287.6 54.2c-10.8-2.2-22.1-3.3-33.5-3.6V32.4c78.1 2.2 146.1 44 184.6 106.6l-15.8 9.1c-6.1-9.7-12.7-18.8-20.2-27.1l-18 15.5c-26-29.6-61.4-50.7-101.9-58.4l4.8-23.9zM53.4 322.4l23-7.7c-6.4-18.3-10-38.2-10-58.7s3.3-40.4 9.7-58.7l-22.7-7.7c3.6-10.8 8.3-21.3 13.6-31l-15.8-9.1C34 181 24.1 217.5 24.1 256s10 75 27.1 106.6l15.8-9.1c-5.3-10-9.7-20.3-13.6-31.1zM213.1 434c-40.4-8-75.8-29.1-101.9-58.7l-18 15.8c-7.5-8.6-14.4-17.7-20.2-27.4l-16 9.4c38.5 62.3 106.8 104.3 184.9 106.6v-18.3c-11.3-.3-22.7-1.7-33.5-3.6l4.7-23.8zM93.3 120.9l18 15.5c26-29.6 61.4-50.7 101.9-58.4l-4.7-23.8c10.8-2.2 22.1-3.3 33.5-3.6V32.4C163.9 34.6 95.9 76.4 57.4 139l15.8 9.1c6-9.7 12.6-18.9 20.1-27.2zm309.4 270.2l-18-15.8c-26 29.6-61.4 50.7-101.9 58.7l4.7 23.8c-10.8 1.9-22.1 3.3-33.5 3.6v18.3c78.1-2.2 146.4-44.3 184.9-106.6l-16.1-9.4c-5.7 9.7-12.6 18.8-20.1 27.4zM496 256c0 137-111 248-248 248S0 393 0 256 111 8 248 8s248 111 248 248zm-12.2 0c0-130.1-105.7-235.8-235.8-235.8S12.2 125.9 12.2 256 117.9 491.8 248 491.8 483.8 386.1 483.8 256zm-39-106.6l-15.8 9.1c5.3 9.7 10 20.2 13.6 31l-22.7 7.7c6.4 18.3 9.7 38.2 9.7 58.7s-3.6 40.4-10 58.7l23 7.7c-3.9 10.8-8.3 21-13.6 31l15.8 9.1C462 331 471.9 294.5 471.9 256s-9.9-75-27.1-106.6zm-183 177.7c16.3-3.3 30.4-11.6 40.7-23.5l51.2 44.8c11.9-13.6 21.3-29.3 27.1-46.8l-64.2-22.1c2.5-7.5 3.9-15.2 3.9-23.5s-1.4-16.1-3.9-23.5l64.5-22.1c-6.1-17.4-15.5-33.2-27.4-46.8l-51.2 44.8c-10.2-11.9-24.4-20.5-40.7-23.8l13.3-66.4c-8.6-1.9-17.7-2.8-27.1-2.8-9.4 0-18.5.8-27.1 2.8l13.3 66.4c-16.3 3.3-30.4 11.9-40.7 23.8l-51.2-44.8c-11.9 13.6-21.3 29.3-27.4 46.8l64.5 22.1c-2.5 7.5-3.9 15.2-3.9 23.5s1.4 16.1 3.9 23.5l-64.2 22.1c5.8 17.4 15.2 33.2 27.1 46.8l51.2-44.8c10.2 11.9 24.4 20.2 40.7 23.5l-13.3 66.7c8.6 1.7 17.7 2.8 27.1 2.8 9.4 0 18.5-1.1 27.1-2.8l-13.3-66.7z"
          fill="currentColor"
        />
        <path
          id="rebel"
          style={{
            transform: "translateY(30px) scale(0.9)",
            opacity: current === "rebel" ? 1 : 0,
          }}
          d="M246 315.7l-21.2-31.9c-2.1-3.2-1.7-7.4 1-10.1s6.9-3.1 10.1-1l29.5 19.7c2.1 1.4 4.9 0 5-2.6L279.7 8c.1-4.5 3.8-8 8.3-8s8.1 3.5 8.3 8l9.4 281.9c.1 2.5 2.9 3.9 5 2.6l29.5-19.7c3.2-2.1 7.4-1.7 10.1 1s3.1 6.9 1 10.1L330 315.7c-1.3 1.9-.2 4.5 2 4.9l37.6 7.5c3.7 .7 6.4 4 6.4 7.8s-2.7 7.1-6.4 7.8L332 351.4c-2.2 .4-3.3 3-2 4.9l21.2 31.9c2.1 3.2 1.7 7.4-1 10.1s-6.9 3.1-10.1 1l-26.3-17.6c-2.2-1.4-5.1 .2-5 2.8l2.1 61.5C370.6 435.2 416 382.9 416 320c0-37-15.7-70.4-40.8-93.7c-7-6.5-6.5-18.6 1-24.4C410.1 175.5 432 134.3 432 88c0-16.8-2.9-33-8.2-48c-4.6-13 10.2-30 21.4-22c53.5 38 92.7 94.8 107.8 160.7c.5 2.1-.2 4.3-1.7 5.9l-28.4 28.4c-4 4-1.2 10.9 4.5 10.9h26c3.4 0 6.2 2.6 6.3 6c.1 3.3 .2 6.6 .2 10c0 17.5-1.7 34.7-4.8 51.3c-.2 1.2-.9 2.4-1.7 3.3l-46.5 46.5c-4 4-1.2 10.9 4.5 10.9H526c4.6 0 7.7 4.8 5.7 9C487.2 450.5 394.8 512 288 512S88.8 450.5 44.3 361c-2.1-4.2 1-9 5.7-9H64.5c5.7 0 8.6-6.9 4.5-10.9L22.6 294.6c-.9-.9-1.5-2-1.7-3.3C17.7 274.7 16 257.5 16 240c0-3.3 .1-6.7 .2-10c.1-3.4 2.9-6 6.3-6h26c5.7 0 8.6-6.9 4.5-10.9L24.6 184.6c-1.5-1.5-2.2-3.8-1.7-5.9C38.1 112.8 77.3 56 130.8 18c11.3-8 26 8.9 21.4 22c-5.3 15-8.2 31.2-8.2 48c0 46.3 21.9 87.5 55.8 113.9c7.5 5.8 8 17.9 1 24.4C175.7 249.6 160 283 160 320c0 62.9 45.4 115.2 105.1 126l2.1-61.5c.1-2.6-2.8-4.2-5-2.8l-26.3 17.6c-3.2 2.1-7.4 1.7-10.1-1s-3.1-6.9-1-10.1L246 356.3c1.3-1.9 .2-4.5-2-4.9l-37.6-7.5c-3.7-.7-6.4-4-6.4-7.8s2.7-7.1 6.4-7.8l37.6-7.5c2.2-.4 3.3-3 2-4.9z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}
