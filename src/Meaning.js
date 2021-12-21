import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech} </h3>
      {props.meaning.defintion.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong> Definition:</strong> {definition.definition}
              <br />
              <strong> Example:</strong>
              <em>{definition.examples}</em>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
