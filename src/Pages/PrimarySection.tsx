import "../Pages/style/PrimarySection.css";
import Title from "../lib/Components/Title";
import PrimSecond from "../lib/Components/PrimSecond";
import React, { useEffect, useState } from "react";
import { request } from "graphql-request";


function PrimarySection() {
  
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
    // ref={ap}
    <div className="primarymain">
      <Title>
        <div className="primarySction">
          {!primary ? (
            "Oopss somthing going wrong"
          ) : (
            <div>
              {primary.map((prim: any) => (
                <div key={prim.id}>
                  <h1 className="primTitle">
                    <span>
                      {prim.name}
                      <br />
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
