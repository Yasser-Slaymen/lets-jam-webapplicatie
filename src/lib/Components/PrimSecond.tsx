import "../Stylingcomponents/PrimSacand.css";
import TprimSecond from "./TprimSecond";
import Ellipe from "../Images/Ellipse.png";
import Sid from "../Images/sid.png";
import Pbuton from "../Images/pbuton.png";
import Meta from "../Images/meta.png";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function PrimSecond() {
  // gsap
  const ap = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".img-prim2",
        { opacity: 0, x: -300 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".img-prim2",
            end: "+=500",
            start: "top center",
          },
        }
      );
      gsap.fromTo(
        ".img-prim3",
        { rotation: 0 },
        {
          rotation: 360,
          duration: 1,
          delay: 1,
          scrollTrigger: {
            trigger: ".img-prim4",
            start: "top bottom",
          },
        }
      );
      gsap.fromTo(
        ".img-prim4",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 4,
          ease: "slow(0.7, 0.1, false)",
          scrollTrigger: {
            trigger: ".img-prim4",
            start: "top center",
          },
        }
      );
    }, ap);

    return () => ctx.revert();
  });

  return (
    <>
      <TprimSecond>
        <div className="primsacond" ref={ap}>
          <img className="img-prim1" src={Ellipe} alt="ellipe" />
          <img className="img-prim2" src={Sid} alt="img" />
          <img className="img-prim3" src={Pbuton} alt="img" />
          <img className="img-prim4" src={Meta} alt="img" />
        </div>
      </TprimSecond>
    </>
  );
}
export default PrimSecond;
