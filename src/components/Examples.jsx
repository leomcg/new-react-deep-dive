import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
import { TOPICS, EXAMPLES } from "../data";

const Examples = (props) => {
  const [selectedTopic, setSelectedTopic] = useState("");
  function handleClick(selectedButon) {
    setSelectedTopic(selectedButon);
  }
  return (
    <Section id="examples">
      <h2>Examples</h2>
      <Tabs
        buttons={TOPICS.map((topic, index) => (
          <TabButton
            key={index}
            isSelected={selectedTopic === topic}
            onClick={() => handleClick(topic)}
          >
            {topic}
          </TabButton>
        ))}
      >
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
      </Tabs>
    </Section>
  );
};

export default Examples;
