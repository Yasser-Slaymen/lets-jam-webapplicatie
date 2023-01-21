import "../Stylingcomponents/ThirdComp.css";
import TthirdComp from "./TthirdComp";
import { useEffect, useState } from "react";
import { request } from "graphql-request";
import Img3_1 from '../Images/img3_1.png'
import Img3_2 from '../Images/img3_2.png'

function ThirdComp() {
  const [thirdSections, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const { thirdSections } = await request(
        "https://api-eu-west-2.hygraph.com/v2/clcyyb4443l3q01t8hceqaruo/master",
        `
        {
          thirdSections {
                id
                title
                img {
                  url
                }
                
                
          }
        }
      `
      );

      setProducts(thirdSections);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <TthirdComp>
        <>
          {!thirdSections ? (
            "Oopss somthing going wrong"
          ) : (
            <>
              {thirdSections.map((third: any) => (
                <div className="thirdcomp" key={third.id}>
                  <section className="third_images">
                    <img className="img3_1" src= {Img3_1} alt="img" />
                    <img  className="img3_2" src= {Img3_2} alt="img" />

                  </section>

                  <section className="third_content">
                    <h5>ABOUT US</h5>
                    <h3>{third.title}</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repudiandae laudantium esse aperiam libero dolore maxime
                      amet tenetur laborum, error voluptatem beatae consectetur
                      sunt vel molestias quis blanditiis unde nisi sapiente?
                    </p>
                    <ul>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                    </ul>
                    <article>
                      <span>5</span>
                      <span>3</span>
                      <span>2</span>
                    </article>
                  </section>
                </div>
              ))}
            </>
          )}
        </>
      </TthirdComp>
    </>
  );
}
export default ThirdComp;
