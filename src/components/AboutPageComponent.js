import { userabout } from "./userabout.js";
import UserCompoenentClass from "./userClassCompoenetEg.js";
export const aboutUs = () => {
  return (
    <div className="aboutPage">
      <h1> About Us</h1>
      <h2>Just checking</h2>
      <userabout name="Shweta" location="Goa" contact="90" />
      /** Class based component sending props */
      <UserCompoenentClass name="Hello" />
      <UserCompoenentClass name="Hello2" />
    </div>
  );
};
