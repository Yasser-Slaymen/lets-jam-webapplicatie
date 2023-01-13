import './Nav.css'
// import {useAllPrismicDocumentsByType } from '@prismicio/react'
import { usePrismicDocumentByUID } from '@prismicio/react'
type Navprops={
    about:string
    contact: string
    services: string
}
function Navbar(props:Navprops){
  const [document] = usePrismicDocumentByUID('the_cliente_case','sprint5');
  console.log(document)
  return(
        <nav className="navbar">
       
    <ul className="list-items" >
        {document && (<li>{document.data.title[0].text}</li>) }
        {document && (<li>{props.services} {document.data.title[0].text}</li>) }
        {document && (<li>{props.contact} {document.data.title[0].text}</li>) }
    </ul>
        
    </nav>

    )
}
export default Navbar;
// const [document] = useAllPrismicDocumentsByType('the_cliente_case')
// if(!document) return null;
// {document.map((pro,i) => { return ()})}

// {document && (<li>{props.about} {document.data.title[0].text}</li>) }
// {document && (<li>{props.services} {document.data.title[0].text}</li>) }
// {document && (<li>{props.contact} {document.data.title[0].text}</li>) }