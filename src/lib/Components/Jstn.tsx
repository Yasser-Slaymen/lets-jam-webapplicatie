import "../Stylingcomponents/Test.css";
import Ttest from "./Ttest";
import { useEffect, useState } from "react";
import { request } from "graphql-request";
import gsap  from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Jst() {
 
     // gsap
  const ap = useRef();
  // const img1 = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let ctx = gsap.context(() => {
      gsap.fromTo(".scrol", {  opacity: 0 , x: -1000 }, { opacity: 1 , x: 0 , duration:3 ,ease: "elastic.out(1, .7)",
 scrollTrigger:{
        trigger:".scrol",
        start: "top center",
        end: "+=500",
       onEnterBack: self => console.log("progress:", self.progress)
      }});

     

    }, ap);
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
    
    <div ref={ap}>
      <div className="Test">
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

                    <section className="scrol" >
                      <h1 className="header">{test.nametest}</h1>
                      <img className="test_img" src={test.img.url} alt="img" />
                    </section>

                    <section className="scrol" >
                      <h1 className="box">{test.nametest}</h1>
                      <img className="test_img" src={test.img.url} alt="img" />
                    </section>
                    
                    {/* ref={img1}  */}
                    <section >
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
