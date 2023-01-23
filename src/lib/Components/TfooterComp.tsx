import { ReactNode } from "react";
type Tfooterprops = {
  children: ReactNode;
};
function TfooterComp ({children}: Tfooterprops) {
    return(
        <>
        {children}
        </>
    )
}
export default TfooterComp;