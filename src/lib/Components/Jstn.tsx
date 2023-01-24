import "../Stylingcomponents/Test.css";
import Ttest from "./Ttest";
import { useEffect, useState } from "react";
import { request } from "graphql-request";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function Jst() {
  // gsap
  const test = useRef();
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
        gsap.from('section', { duration:1.5, opacity: 0, delay: 1,
         stagger:1
         , scrollTrigger:{
          trigger:".section",
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
  const [testes, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const { testes } = await request(
        "https://api-eu-west-2.hygraph.com/v2/clcyyb4443l3q01t8hceqaruo/master",
        `
        {
          testes {
               id
               nametest
               img {
                url
               }
               richText {
                html
               }
                
          }
        }
      `
      );

      setProducts(testes);
    };

    fetchProducts();
  }, []);

  return (
    <div ref={test}>
      <div  className="Test">
        <Ttest>
          <div>
            {!testes ? (
              "Loading... Oops somthing went wrong!"
            ) : (
              <div>
                {testes.map((test: any) => (
                  <div key={test.id}>

                    <section>
                      <h1 className="box">{test.nametest}</h1>
                      <img className="test_img1" src={test.img.url} alt="img" />
                    </section>

                    <section >
                      <h1 className="header">{test.nametest}</h1>
                      <img
                        className="test_img"
                        src={test.img.url}
                        alt="img"
                      />
                    </section>

                    <section >
                      <h1 className="box">{test.nametest}</h1>
                      <img className="test_img" src={test.img.url} alt="img" />
                    </section>

                    <section ref={img1} className="scrol">
                      <h1 className="box">{test.nametest}</h1>
                      <img className="test_img" src={test.img.url} alt="img" />
                    </section>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Ttest>
      </div>
    </div>
  );
}
export default Jst;
