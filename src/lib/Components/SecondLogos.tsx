import TsecondLogos from './TsecondLogos'
import '../Stylingcomponents/SecondLogos.css'
import Seclogos from '../Images/seclogos.png'

function SecondLogos (){
    return(
        <>
         <TsecondLogos>
         <div className="secondlogos">
         <p className="Secondnote">
           OVER 2K+ SOFTWATER BUSINESSE <br />
           GROWING WITH OUR BUSINESS
         </p>
         <img className='img-second' src={Seclogos} alt="ellipe" />
         </div>
         </TsecondLogos>
       
        </>
        
    )
}
export default SecondLogos;