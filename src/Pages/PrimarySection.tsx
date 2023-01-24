import "../Pages/style/PrimarySection.css";
import Title from "../lib/Components/Title";
import PrimSecond from "../lib/Components/PrimSecond";
import React, { useEffect, useState } from "react";
import { request } from "graphql-request";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function PrimarySection() {
  // gsap
   const gsap = useRef();
   const img1 = useRef();
   useLayoutEffect(() => {
     let ctx = gsap.context(() => {
       // use scoped selectors
       // gsap.fromTo(".Test", { rotation: 180 }, { rotation: 0 , duration:3 });
       // gsap.to(".Test", {  stagger: {each: 0.15},
       //   x: 100,
       //   repeat: -1,
       //   repeatDelay: 1,
       //   yoyo: true,
       // });
         gsap.from('', { duration:1.5, opacity: 0, delay: 1,
          stagger:1
          , scrollTrigger:{
           trigger:"",
          }
      })
 
       gsap.fromTo(img1.current, {  opacity: 0 , x: -1000 }, { opacity: 1 , x: 0 , duration:3 , scrollTrigger:{
         trigger:img1.current,
         start: "top center",
         end: "+=500",
         // onEnterBack: self => console.log("progress:", self.progress)
       }});
 
 
       // or refs
       // gsap.to(img1.current, {scrollTrigger: ".box", x: 700  });
 
     }, test);
 
     return () => ctx.revert();
   });


  // hygraph
  const [primary, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const { primary } = await request(
        "https://api-eu-west-2.hygraph.com/v2/clcyyb4443l3q01t8hceqaruo/master",
        `
        {
            primary {
                id
                name
                text {
                  text
                }
                
          }
        }
      `
      );

      setProducts(primary);
    };

    fetchProducts();
  }, []);

  return (
    <div className="primarymain" ref={gsap}>
      <Title>
        <div className="primarySction">
          {!primary? (
            "Oopss somthing going wrong"
          ) : (
            <div>
              {primary.map((prim: any) => (
                <div key={prim.id}>
                  <h1 className="primTitle">
                    <span>
                      {prim.name}<br/>
                      by Digital
                    </span>
                  </h1>
                  <h2 className="primAgency">Agency</h2>
                  <p className="primText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    nostrum dolorem vel, deserunt assumenda harum necessitat
                    <br />
                    nostrum dolorem vel, deserunt assumenda harum necessitat
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Title>
      <PrimSecond />
    </div>
  );
}
export default PrimarySection;
