import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Projects() {
  useEffect(() => {
    document.title = "mehedi's projects";
  }, []);

  return (
    <div>
      <p>
        some projects, find the rest on my{" "}
        <a href="https://github.com/000mehedi" class="clickable" target="_blank">
          github
        </a>{" "}
        <nobr></nobr>
      </p>
      <hr class="dashed" />
   
      <p>
        <NavLink to="/" class="clickable">
          <u>
            <b>personal website</b>
          </u>
        </NavLink>{" "}
        <br />
        what you're looking at right now :)
      </p>
      <p>
        <a
          href="https://main.di6q0kkjwesnw.amplifyapp.com/"
          class="clickable"
          target="_blank"
        >
          <b>Discord_Clone</b>
        </a>{" "}
        <br />
        Tried, miserably failed:)
      </p>
      <p>
        <a
          href="https://whatcaniwear.netlify.app/"
          class="clickable"
          target="_blank"
        >
          <b>WHATCAN_|_WEAR</b>
        </a>{" "}
        <br />
        A website that suggests clothing based on your location.
      </p>
     
      <p>
        <a
          href="https://000mehedi.github.io/PlayWork-calgary-hacks2022-G9/"
          class="clickable"
          target="_blank"
        >
          <b>PlayWork</b>
        </a>{" "}
        <br />
        Did some wordle clone too lol
      </p>
      
      
        <i>(this page is a work in progress, pictures coming soon!)</i>
      
    </div>
  );
}

export default Projects;
