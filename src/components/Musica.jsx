import React from "react";
import Escala from "./Escala";
import Backing from "./Backing";
import Cifra from "./Cifra";
import Tab from "./Tab";
import Monkey from "./Monkey";

export default (props) => {
  return (
    <div>
      
      <Escala url="https://fretmap.app/scale-major/root-e/hand-right" />
      <Tab src = 'https://www.soundslice.com/slices/7DpVc/embed-channelpost/' />
      <Monkey />
      
     
    </div>
  );
};
