import TsecondLogos from './TsecondLogos'
import '../Stylingcomponents/SecondLogos.css'
import Seclogos from '../Images/seclogos.png'
import Shape from '../Images/shape.png'

function SecondLogos (){
    return(
        <>
        <TsecondLogos>
            <>
                <img className='sec-img1' src={Shape} alt="ellipe" />
                <div className="secondlogos">
                  <p className="Second-note">
                    OVER 2K+ SOFTWATER BUSINESSE <br />
                    GROWING WITH OUR BUSINESS
                  </p>
                  <img className='sec-img2' src={Seclogos} alt="ellipe" />
                </div>
            </>
         </TsecondLogos>
       
        </> 
    )
}
export default SecondLogos;