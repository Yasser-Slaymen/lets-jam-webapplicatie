import { ReactNode } from 'react';
type Titleprops={
    // title:string
    // agency:string
    children:ReactNode
}
function Title ({children}:Titleprops){
    return(
        <>
        {children}
        </>
    )  
}
export default Title;