import "../Stylingcomponents/FooterComp.css";
import TfooterComp from "./TfooterComp";
import { useEffect, useState } from "react";
import { request } from "graphql-request";
import logo from "../Images/logo.png";
import LinkSocial from "./LinkSocialmedia";

function FooterComp() {
  const [footersections, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const { footersections } = await request(
        "https://api-eu-west-2.hygraph.com/v2/clcyyb4443l3q01t8hceqaruo/master",
        `
          {
            footersections {
                  id
                  title
                  img {
                    url
                  }
                  multiText
                  markdown
                  
                  
            }
          }
        `
      );

      setProducts(footersections);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <TfooterComp>
        <>
          {!footersections ? (
            "Oopss somthing going wrong"
          ) : (
            <>
              {footersections.map((footer: any) => (
                <div className="footercomp" key={footer.id}>
                  <section className="footer_1">
                    <section className="footer_content1">
                      <img className="footer_logo" src={logo} alt="logo" />
                      <p>{footer.multiText}</p>
                      <a href="tel:+31622817308">+31622817308</a>
                    </section>

                    <section className="footer_content2">
                      <h4 className="footer_headr">{footer.title}</h4>
                      <div>
                        <ul>
                          <li>About</li>
                          <li>Pricing Table</li>
                          <li>Contact Us</li>
                          <li>Meet Our Team</li>
                          <li>Latest News</li>
                        </ul>
                        <ul>
                          <li>Case Studies</li>
                          <li>FAQ's</li>
                          <li>Service</li>
                          <li>Customer Support</li>
                        </ul>
                      </div>
                    </section>
                  </section>

                  {/* section tow */}
                  <section className="footer_2">
                    <section className="Footer2_Contact">
                      <span className="Footer_Media">
                        <div className="footer_icons">
                          
                          <LinkSocial
                            link="/"
                            content=" Facebook"
                          />
                        </div>
                        <div className="footer_icons">
                          
                          <LinkSocial link="https://twitter.com/Yasser78691" content=" Twitter" />
                        </div>
                        <div className="footer_icons">
                          
                          <LinkSocial
                            link="https://www.linkedin.com/in/yasser-al-sleiman-a2a563220/"
                            content=" Linkedin"
                          />
                        </div>
                        <div className="footer_icons">
                          
                          <LinkSocial link="/" content=" Instagram" />
                        </div>
                        <div className="footer_icons">
                          
                          <LinkSocial link="/" content=" Facebook" />
                        </div>

                      </span>
                    </section>

                    <section className="footer2_email">
                      <h4>Let's work together.</h4>

                      <a
                        className="footer_email"
                        href="mailto:y.a.sleiman1@gmail.com?subject='Hello from Abstract!'&body='Just popped in to say hello'"
                      >
                        Just drop me a line:y.a.sleiman1@gmail.com
                      </a>
                    </section>
                  </section>
                </div>
              ))}
              <div className="copyright">
                <div className="line"></div>
                <div className="footer_Date">
                  <p className="copyright_Date">
                    {" "}
                    Copyright &copy;2023 YASSER. All Rights Reserved
                  </p>
                  <p className="copyright_privacay">
                    
                    <span>Terms of Use</span><span> Privacay Policy</span>
                  </p>
                  
                </div>
              </div>
            </>
          )}
        </>
      </TfooterComp>
    </>
  );
}
export default FooterComp;
