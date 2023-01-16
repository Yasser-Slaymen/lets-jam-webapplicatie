import './Nav.css'
type NavLinkProps = {
    title: string,
    link: string
    logo?:string

}

function NavLink ({ title, link, logo}:NavLinkProps){
    return (
        <>
        <a href={link}>{ title }</a>
        
        <img src={logo} alt="" />
        </>
       
    )
}

export default NavLink;