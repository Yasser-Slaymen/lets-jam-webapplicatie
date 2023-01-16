import './Nav.css'
import NavLink from './NavLink'
import { ReactNode } from 'react';
type Navprops={
    children: ReactNode;
    home:string
    pages: string
    blog: string
    services: string
    contact: string
    logo:string
    img:string
    
}
 function Navbar({ children, home, pages,blog ,services, contact, logo}:Navprops){
  return(
        <nav className="navbar">
            <div className='logo'>{logo}</div>
            <ul className="list-items" >
                <li>{home}</li>
                <li>{pages}</li>
                <li>{blog}</li>
                <li>{services}</li>
                <li>{contact}</li>
                <li>{children}</li>
                <li><NavLink title="Home" link="/home" /></li>
                <NavLink title="Pag" link="/pages" />
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