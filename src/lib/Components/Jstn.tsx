import "../Stylingcomponents/Test.css";
import Ttest from "./Ttest";
import { useEffect, useState } from "react";
import { request } from "graphql-request";

function Jst() {
  
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
    // ref={ap}
    <div >
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
{/* 
                    ref={img1}  */}
                    <section className="scrol">
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
