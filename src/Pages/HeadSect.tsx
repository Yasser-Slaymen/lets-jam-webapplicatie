import Navbar from '../lib/Components/Navbar'
// import img from '../lib/Images/logo.png'


function HeadSect (){
    return(
        <>
         <Navbar logo='BISNEXT' home='HOME' pages='PAGES' blog='BLOG' services='SERVICES' contact='CONTACT' img='../lib/Images/re.png'> 
         {/* <img src={img} alt="logo" /> */}
        </Navbar> 
        </>
    )
}
export default HeadSect;
