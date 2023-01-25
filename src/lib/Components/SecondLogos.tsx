import TsecondLogos from "./TsecondLogos";
import "../Stylingcomponents/SecondLogos.css";
import Seclogos from "../Images/seclogos.png";
import Shape from "../Images/shape.png";
import Button2 from "../Images/button2.png";
import Img2_1 from "../Images/img2_1.png";
import Img2_2 from "../Images/img2_2.png";
import Img2_3 from "../Images/img2_3.png";


function SecondLogos() {
  

  // data
  return (
    // ref={ap}
    <div >
      <TsecondLogos>
        <div className="SecondLogos">
          <img className="sec-img1" src={Shape} alt="ellipe" />
          {/* section-one */}
          <div className="Sec_1">
            <p className="Second-note">
              OVER 2K+ SOFTWATER BUSINESSE
              <br />
              GROWING WITH OUR BUSINESS
            </p>
            <img className="sec-img2" src={Seclogos} alt="ellipe" />
          </div>
          {/* section-tow */}
          <div className="Sec_2">
            <article className="head2_1">
              <p>FEATUTES</p>
              <h1>
                Follow These Staps to <br /> Expand Your Business
              </h1>
            </article>
            <article className="head2_2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit hallso.
                <br />
                Sint voluptas, repudiandae facere illum sunt vero excepturi eni
              </p>
              <img src={Button2} alt="button" />
            </article>
          </div>
          {/* section-three */}
          <article className="futer2_3">
            <section className="se2_1">
              <img src={Img2_3} alt="img" />
              <h2>Digitlal Agency</h2>
            </section>
            <section className="se2_2">
              <img src={Img2_2} alt="img" />
              <h2>Web Development</h2>
            </section>
            <section className="se2_3">
              <img src={Img2_1} alt="" />
              <h2>Custom Solutions</h2>
            </section>
          </article>
        </div>
      </TsecondLogos>
    </div>
  );
}
export default SecondLogos;
