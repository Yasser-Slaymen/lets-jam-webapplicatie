import { ReactNode } from "react";
type Testprops = {
  children: ReactNode;
  text: string;
};

function Ttest({ text, children }: Testprops) {
  return (
    <>
      <h1>{text}</h1>

      {children}
    </>
  );
}
export default Ttest;
