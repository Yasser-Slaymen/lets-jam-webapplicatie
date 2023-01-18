import'../Pages/style/PrimarySection.css'
import Title from '../lib/Components/Title'
import PrimSecond from '../lib/Components/PrimSecond';


function PrimarySection (){
    // Fetch data from custom hook that uses React-Query
    return(
    <div className="primarymain">
        <Title> 
            <div className="primarySction">
                <h1 className='primTitle'><span>Business Solution <br />by Digital</span></h1>
                <h2 className='primAgency'>Agency</h2>
                <p className="primText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    nostrum dolorem vel, deserunt assumenda harum necessitat<br /> 
                    nostrum dolorem vel, deserunt assumenda harum necessitat
                </p>
            </div>
        </Title>
        <PrimSecond/>

    </div> 
    );
}
export default PrimarySection;