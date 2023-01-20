import { ReactNode } from 'react';
type Thirdprops={
    children:ReactNode
}
function TthirdComp ({children}:Thirdprops) {
    return(
        <>
        {children}
        </>

    )
}
export default TthirdComp;