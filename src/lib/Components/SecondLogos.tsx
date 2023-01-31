import { useEffect, useState } from "react";
import { request } from "graphql-request";
import TsecondLogos from "./TsecondLogos";
import "../Stylingcomponents/SecondLogos.css";
import Seclogos from "../Images/seclogos.png";
import Shape from "../Images/shape.png";
import Button2 from "../Images/button2.png";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SecondLogos() {
  // gsap
  const ap = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.from(".SecondLogos", {
        duration: 2,
        opacity: 0,
        delay: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".SecondLogos",
          start: "top bottom",
        },
      });
      gsap.fromTo(
        ".se2_2",
        { rotation: 0 },
        {
          rotation: 360,
          duration: 3,
          start: "top center",
          repeat: 2,
          repeatDelay: 1,
          yoyo: true,
        }
      );

      gsap.fromTo(
        ".se2_1",
        { opacity: 0, x: -1000 },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".se2_1",
            start: "top bottom",
            end: "+=500",
            onEnterBack: (self) => console.log("progress:", self.progress),
          },
        }
      );
      gsap.fromTo(
        ".se2_3",
        { opacity: 0, x: 500 },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".se2_3",
            start: "top center",
            end: "+=500",
            onEnterBack: (self) => console.log("progress:", self.progress),
          },
        }
      );
    }, ap);
    return () => ctx.revert();
  });

  // data
  // hygraph
  const [ scondrySections, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const {  scondrySections } = await request(
        "https://api-eu-west-2.hygraph.com/v2/clcyyb4443l3q01t8hceqaruo/master",
        `
          {
            scondrySections {
                  id
                  img1 {
                    url
                  }
                  img2 {
                    url
                  }
                  img3 {
                    url
                  } 
            }
          }
        `
      );

      setProducts(scondrySections);
    };

    fetchProducts();
  }, []);
  return (
    <div ref={ap}>
      <TsecondLogos>
        <>
          {!scondrySections ? (
            "Oopss somthing going wrong"
          ) : (
            <div className="SecondLogos">
              {scondrySections.map((second: any) => (
                <div key={second.id}>
                  <img className="sec-img1" src={Shape} alt="ellipe" />
                  {/* section-one */}
                  <div className="Sec_1">
                    <p className="Second-note">
                      OVER 2K+ SOFTWATER BUSINESSE
                      <br />
                      GROWING WITH OUR BUSINESS
                    </p>
                    <img className="sec-img2" src={Seclogos} alt="ellipe" />
                  </div>

                  <div className="Sec_2">
                    <article className="head2_1">
                      <p>FEATUTES</p>
                      <h1>
                        Follow These Staps to <br /> Expand Your Business
                      </h1>
                    </article>
                    <article className="head2_2">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        hallso.
                        <br />
                        Sint voluptas, repudiandae facere illum sunt vero
                        excepturi eni
                      </p>
                      <img src={Button2} alt="button" />
                    </article>
                  </div>
                  <article className="futer2_3">
                    <section className="se2_1">
                      <img src={second.img3.url} alt="img" />
                      <h2>Digitlal Agency</h2>
                    </section>
                    <section className="se2_2">
                      <img src={second.img2.url} alt="img" />
                      <h2>Web Development</h2>
                    </section>
                    <section className="se2_3">
                      <img src={second.img1.url} alt="" />
                      <h2>Custom Solutions</h2>
                    </section>
                  </article>
                </div>
              ))}
            </div>
          )}
        </>
      </TsecondLogos>
    </div>
  );
}
export default SecondLogos;
