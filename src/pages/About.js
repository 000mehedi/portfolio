import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "who's mehedi";
  }, []);

  return (
    <div>
      <img src="/itsme.JPG" alt="it's me!" width="200" height="auto" />
      <p>
        <nobr>LET’S GO👇🏻</nobr>
      </p>

      <hr class="dashed" />

      <p>
        hey hey hey! i'm someone who's a bit all over the place. i love all
        things tech, muesums, roaming downtowns, trying out different cuisines, and so much more.
        sometimes i feel like a sponge, going around and learning as much as i
        can from the amazing people around me 🧽 .
        <br />
        <br />
        i'm a hobby hopper, i dabble in the tech, i stay fit, and i'm
        currently on the quest for a perfect oatmeal recipe. my existence in so
        many things really helped shape the learner that i am today, and the one
        i'll be tomorrow!
      </p>

      <p> </p>

      <p>
        <b>currently</b>
      </p>
      <p>
        i'm a 2nd year student at{" "}
        <a href="https://www-ucalgary-ca.ezproxy.lib.ucalgary.ca/" target="_blank" class="clickable">
          University of Calgary
        </a>
        , studying Computer Science.
        <br />
        <br />
        i'm interested in soft engg and all creative
        intersections of tech and recently AI🤖.
        <br />
        <br /> 
        no plans this summer yet,might work on some projects and still looking for an internship that
        will help me grow and have an impact on something i care about!
      </p>

      <p> </p>

      <p>did some clubs:</p>
      <ul>
        <li>
          wrote some website code for{" "}
          <a
            href="https://cpc.cpsc.ucalgary.ca/"
            target="_blank"
            class="clickable"
          >
            Competitive Programming Club
          </a>
        </li>
        <li>
          wrote some code for a project of {" "}
          <a
            href="https://www.codethechangeyyc.ca/"
            class="clickable"
            target="_blank"
          >
            CodeTheChange YYC
          </a>
        </li>
        
      </ul>
    </div>
  );
}

export default About;