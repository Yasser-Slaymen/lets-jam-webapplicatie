import { useEffect, useState } from "react";
import { request } from "graphql-request";
import Tfourth from "./Tfourth";
import "../Stylingcomponents/FourthComp.css";
import Button_4 from "../Images/button_4.png";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function FourthComp() {
  // gsap
  const ap = useRef();
  const details_1 = useRef();
  const details_2 = useRef();
  const details_3 = useRef();
  const details_4 = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".fourth_portoflio", {
        duration: 2,
        opacity: 0,
        delay: 1,
        start: "top center",
        ease: "steps(5)",
        stagger: 1,
        scrollTrigger: {
          trigger: ".fourth_portoflio",
          start: "top center",
        },
      });

      gsap.fromTo(
        details_1.current,
        { opacity: 0, x: -500 },
        {
          opacity: 1,
          x: 0,
          duration: 3,
          delay: 0,
          ease: "elastic.out(1, .7)",
          scrollTrigger: {
            trigger: details_1.current,
            start: "top center",
            end: "+=500",
            onEnterBack: (self) => console.log("progress:", self.progress),
          },
        }
      );

      gsap.fromTo(
        details_2.current,
        { opacity: 0, x: -500 },
        {
          opacity: 1,
          x: 0,
          duration: 3,
          delay: 1,
          ease: "elastic.out(1, .7)",
          scrollTrigger: {
            trigger: details_2.current,
            start: "top center",
            end: "+=500",
            onEnterBack: (self) => console.log("progress:", self.progress),
          },
        }
      );

      gsap.fromTo(
        details_3.current,
        { opacity: 0, x: -500 },
        {
          opacity: 1,
          x: 0,
          duration: 3,
          delay: 2,
          ease: "elastic.out(1, .7)",
          scrollTrigger: {
            trigger: details_3.current,
            start: "top center",
            end: "+=500",
            onEnterBack: (self) => console.log("progress:", self.progress),
          },
        }
      );

      gsap.fromTo(
        details_4.current,
        { opacity: 0, x: -500 },
        {
          opacity: 1,
          x: 0,
          duration: 3,
          delay: 3,
          ease: "elastic.out(1, .7)",
          scrollTrigger: {
            trigger: details_4.current,
            start: "top bottom",
            end: "+=500",
          },
        }
      );
    }, ap);
    return () => ctx.revert();
  });

  // hygraph
  const [fourthsections, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const { fourthsections } = await request(
        "https://api-eu-west-2.hygraph.com/v2/clcyyb4443l3q01t8hceqaruo/master",
        `
          {
            fourthsections {
                  id
                  title
                  multiText
                  secondTitles
                 
                  
            }
          }
        `
      );

      setProducts(fourthsections);
    };

    fetchProducts();
  }, []);
  return (
    <div ref={ap}>
      <Tfourth>
        <>
          {!fourthsections ? (
            "Oopss somthing going wrong"
          ) : (
            <>
              {fourthsections.map((fourth: any) => (
                <div className="fourthcomp" key={fourth.id}>
                  <section className="fourth_listQuestions">
                    <details ref={details_1}>
                      <summary>How can we help your business?</summary>
                      <p>
                        Lorem ipsum dolor sit,, Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Temporibus, eum. eaque.
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Eum exercitationem
                        architecto totam repellat labore commodi?
                      </p>
                    </details>
                    <details ref={details_2}>
                      <summary>What are the advantages of Bisnext</summary>
                      <p>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Eum exercitationem
                        architecto totam repellat labore commodi?
                      </p>
                    </details>
                    <details ref={details_3}>
                      <summary>Let's find an office near you?</summary>
                      <p>
                        Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eum exercitationem architecto totam
                        repellat labore commodi?
                      </p>
                    </details>
                    <details ref={details_4}>
                      <summary>How IT consultancy expert work?</summary>
                      <p>
                        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum exercitationem architecto totam repellat labore
                        commodi?
                      </p>
                    </details>
                  </section>

                  {/* portoflio section */}
                  <section className="fourth_portoflio">
                    <h5 className="fourth_stitle">{fourth.secondTitles}</h5>
                    <h1 className="fourth_header">{fourth.title}</h1>
                    <p>{fourth.multiText}</p>
                    <img className="fourth_img" src={Button_4} alt="img" />
                  </section>
                </div>
              ))}
            </>
          )}
        </>
      </Tfourth>
    </div>
  );
}
export default FourthComp;
