

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const hobbies = [
  "making tea",
  "preaparing oatmeal",
  "obviously that's bangla rock",
  "pretending to be busy",
  "walking through the neighbourhood",
  "watching 9/11 vids(scary)",
  "watching travel vlogs ",
  "lookup marketplace for cars",
  "cooking pasta",
  "thinking about my love ❤️",
  "going 1950 to have a look of my homies",
  "crafting a new spotify playlist",
];

const space = [
  "corner",
  "fragment",
  "sliver",
  "pocket",
  "section",
  "node",
  "slice",
  "shard",
  "bit",
  "piece",
  "string",
];

function useWordCycle(words) {
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const handleClick = () => {
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  };

  return [currentWord, handleClick];
}

function Home() {
  useEffect(() => {
    document.title = "mehedi's home";
  }, []);

  const [currentHobby, handleHobbyClick] = useWordCycle(hobbies);
  const [currentSpace, handleSpaceClick] = useWordCycle(space);

  return (
    <div>
      <h2>i'm mehedi!</h2>
      <p>
        welcome to my little{" "}
        <a class="clickable" id="corner" onClick={handleSpaceClick}>
          {currentSpace}
        </a>{" "}
        of the internet!
      </p>
      <p>
        i'm a student based in Calgary 🗻 ; where i study computer science 👨🏽‍💻 . when i'm not coding, i'm listening music, and{" "}
        <a class="clickable" id="hobbies" onClick={handleHobbyClick}>
          {currentHobby}
        </a>
        .
      </p>
      <p>
        reach out to me anytime at{" "}
        <a href="mailto:mdabdullah.patwary@ucalgary.ca" class="clickable">
          mdabdullah.patwary@ucalgary.ca
        </a>
        ,
        <br />
        {/* or ask{" "}
        <NavLink to="/mehedi-ai" class="clickable">
          <u>my ai</u>
        </NavLink>{" "}
        a question! */}
      </p>
    </div>
  );
}

export default Home;