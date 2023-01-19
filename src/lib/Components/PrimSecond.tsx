import "../Stylingcomponents/PrimSacand.css";
import TprimSecond from "./TprimSecond";
import Ellipe from "../Images/Ellipse.png";
import Sid from "../Images/sid.png";
import Pbuton from "../Images/pbuton.png";
import Meta from "../Images/meta.png";

function PrimSecond() {
  return (
    <>
      <TprimSecond>
        <div className="primsacond">
          <img className="img-prim1" src={Ellipe} alt="ellipe" />
          <img className="img-prim2" src={Sid} alt="img" />
          <img className="img-prim3" src={Pbuton} alt="img" />
          <img className="img-prim4" src={Meta} alt="img" />
        </div>
      </TprimSecond>
    </>
  );
}
export default PrimSecond;
