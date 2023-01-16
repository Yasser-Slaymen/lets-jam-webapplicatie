import './Nav.css'
type NavLinkProps = {
    title: string,
    link: string
}

function NavLink ({ title, link }:NavLinkProps){
    return (
        <>
        <a href={link}>{ title }</a>
        </>
       
    )
}

export default NavLink;