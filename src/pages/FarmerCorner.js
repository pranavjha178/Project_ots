import * as React from 'react';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Services from "components/features/TwoColWithButton.js";

export default function FixedContainer() {
  return (
<AnimationRevealPage>
      <Header />
      <Services />
      
      <Footer/>
    </AnimationRevealPage>
  );
}

