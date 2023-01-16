import { ReactNode } from 'react';
type Titleprops={
    // title:string
    // agency:string
    children:ReactNode
}
function Title ({children}:Titleprops){
    return(
        <div className='compTitle'>
        {children}
        </div>
    )  
}
export default Title;