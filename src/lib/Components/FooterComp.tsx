import "../Stylingcomponents/FooterComp.css";
import TfooterComp from "./TfooterComp";
import { useEffect, useState } from "react";
import { request } from "graphql-request";
import logo from "../Images/logo.png";

function FooterComp() {
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
      <TfooterComp>
        <>
          {!thirdSections ? (
            "Oopss somthing going wrong"
          ) : (
            <>
              {thirdSections.map((third: any) => (
                <div className="footercomp" key={third.id}>
                  <section className="footer_1">
                    <section className="footer_content1">
                      <img className="footer_logo" src={logo} alt="logo" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Debitis tenetur aliquam corporis enim repudiandae.
                      </p>
                      <span>+31622817308</span>
                    </section>
                    <section className="footer_content1">
                      <h4 className="footer_headr"></h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </section>
                  </section>
                  <section className="footer_2">
                    <section className="Footer_Contact">
                      <span className="Footer_Media">
                        <a href="/"></a>
                        <a href="/"></a>
                        <a href="/"></a>
                        <a href="/"></a>
                      </span>
                    </section>
                    <section>
                      <h4></h4>
                      <h4 className="footer_email">
                      <a href="mailto:johnjhone77@gmail.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">Click to Send an Email</a>

                      
                      </h4>
                    </section>
                  </section>
                </div>
              ))}
            </>
          )}
        </>
      </TfooterComp>
    </>
  );
}
export default FooterComp;
