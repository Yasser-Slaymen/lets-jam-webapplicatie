import { ReactNode } from 'react';
type Titleprops={
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