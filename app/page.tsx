'use client';

import { useEffect } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Home from "./home/page";

export default function AppRoot() {

  useEffect(() => {
    import("locomotive-scroll").then(locomotiveModule => {
      const scroll = new locomotiveModule.default({
        el: document.querySelector("#main"),
        smooth: true,
        smoothMobile: false,
      })
    })
  }, []);

  return (
    <Home></Home>
  );
}
