type Navprops={
    children: Element
    name: string
}
function Navbar(props:Navprops){
    return(
        <nav className="navbar">
            <ul className="list-items">
                <li>{props.name}</li>
                <li>{props.name}</li>
                <li>{props.name}</li>
            </ul>
        </nav>

    )
}
export default Navbar;