import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there, I'm Rafael <br />
          Scroll down and check out some stuff I built
        </SectionTitle>
        <SectionText>
          I'm a Full-Stack developer Eloquent in JavaScript, Fluent in Python,
          and Versed in Java. In addition to code, I also write books
        </SectionText>
        <Button onClick={props.handleClick}>My Books</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
