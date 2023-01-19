import { ReactNode } from "react";
type Testprops = {
  children: ReactNode;
};

function Ttest({children}: Testprops) {
  return (
    <>
      {children}
    </>
  );
}
export default Ttest;
