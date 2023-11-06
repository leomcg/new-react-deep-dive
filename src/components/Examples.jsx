import { useState } from "react";
import { EXAMPLES, TOPICS } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";

const Examples = (props) => {
  const [selectedTopic, setSelectedTopic] = useState("");
  function handleClick(selectedButon) {
    setSelectedTopic(selectedButon);
  }

  return (
    <Section id="examples">
      <h2>Examples</h2>
      <menu>
        {TOPICS.map((topic, index) => (
          <TabButton
            key={index}
            isSelected={selectedTopic === topic}
            onSelect={() => handleClick(topic)}
          >
            {topic}
          </TabButton>
        ))}
      </menu>
      <div id="tab-content">
        {!selectedTopic ? (
          <span>Please select a topic.</span>
        ) : (
          <>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </>
        )}
      </div>
    </Section>
  );
};

export default Examples;
