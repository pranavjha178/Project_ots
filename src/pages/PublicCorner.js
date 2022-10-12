import * as React from 'react';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Header from "components/headers/light.js";
import FAQs from "components/faqs/SimpleWithSideImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ThreeColSlider from 'components/cards/ThreeColSlider';

export default function FixedContainer() {
  return (
<AnimationRevealPage>
      <Header />
      {/* <FAQs />       */}
   <ThreeColSlider />
      <Footer/>
    </AnimationRevealPage>
  );
}

