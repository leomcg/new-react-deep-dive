import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

const CoreConcepts = (props) => {
  return (
    <Section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept, index) => (
          <CoreConcept {...concept} key={index} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
