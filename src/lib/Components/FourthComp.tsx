import { useEffect, useState } from "react";
import { request } from "graphql-request";
import Tfourth from "./Tfourth";
import "../Stylingcomponents/FourthComp.css";
import Button_4 from "../Images/button_4.png";


function FourthComp() {
 
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
    // ref={ap}
    <div >
      <Tfourth>
        <>
          {!fourthsections ? (
            "Oopss somthing going wrong"
          ) : (
            <>
              {fourthsections.map((fourth: any) => (
                <div className="fourthcomp" key={fourth.id}>
                  <section className="fourth_listQuestions">
                  {/* ref={details_1} */}
                    <details >
                    
                      <summary>How can we help your business?</summary>
                      <p>
                        Lorem ipsum dolor sit,, Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Temporibus, eum. eaque.
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Eum exercitationem
                        architecto totam repellat labore commodi?
                      </p>
                    </details>
                    {/* ref={details_2} */}
                    <details >
                      <summary>What are the advantages of Bisnext</summary>
                      <p>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Eum exercitationem
                        architecto totam repellat labore commodi?
                      </p>
                    </details>
                    {/* ref={details_3} */}
                    <details >
                      <summary>Let's find an office near you?</summary>
                      <p>
                        Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eum exercitationem architecto totam
                        repellat labore commodi?
                      </p>
                    </details>
                    {/* ref={details_4} */}
                    <details>
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
