import './Nav.css'
import { ReactNode } from 'react';
type Navprops={
    children: ReactNode;
    about:string
    contact: string
    services: string
    
}
 function Navbar({ children, about, contact, services}:Navprops){
  return(
        <nav className="navbar">
        <ul className="list-items" >
            <li>{services}</li>
            <li>{about}</li>
            <li>{contact}</li>
            <li>{children}</li>
        </ul>   
        </nav>

    )
}
export default Navbar;








// const [document] = useAllPrismicDocumentsByType('the_cliente_case')
// if(!document) return null;
// {document.map((pro,i) => { return ()})}
// import {useAllPrismicDocumentsByType } from '@prismicio/react'
// import { usePrismicDocumentByUID } from '@prismicio/react'
// {document && (<li>{props.about} {document.data.title[0].text}</li>) }
// {document && (<li>{props.services} {document.data.title[0].text}</li>) }
// {document && (<li>{props.contact} {document.data.title[0].text}</li>) }

// import { ReactNode } from 'react';
// interface HeadSectionProps {
//   children: ReactNode;
// }

// export function HeadSection({ children }: HeadSectionProps) {
//   return (
//     <Container>
//       <h1>HeadSection</h1>
//       {children}
//     </Container>
//   );
// }
//  about:string
//   contact: string
//   services: string