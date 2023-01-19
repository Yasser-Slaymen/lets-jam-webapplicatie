import "../Stylingcomponents/Nav.css";
import NavLink from "./NavLink";
import logo from "../Images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <NavLink logo={logo} title="" link="" />
      </div>
      <ul className="list-items">
        <li>
          <NavLink title="Home" link="/home" />
        </li>
        <li>
          <NavLink title="PAGES" link="/page" />
        </li>
        <li>
          <NavLink title="BLOG" link="/blog" />
        </li>
        <li>
          <NavLink title="SERVICES" link="/sevices" />
        </li>
        <li>
          <NavLink title="CONTACT" link="/contact" />
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;

// import { ReactNode } from 'react';
// type Navprops={
//     children: ReactNode;
//     home:string
//     pages: string
//     blog: string
//     services: string
//     contact: string
//     logo:string
//     img:string

// }

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
/* <nav className="navbar">
<div className='logo'>{logo}</div>
<ul className="list-items" >
    <li>{home}</li>
    <li>{pages}</li>
    <li>{blog}</li>
    <li>{services}</li>
    <li>{contact}</li>
    <li>{children}</li>
    <NavLink title="Home" link="/home" />
    <NavLink title="Pag" link="/pages" />
</ul> 
</nav> */
