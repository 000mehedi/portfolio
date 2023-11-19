import { useState, useEffect } from "react";


function Resume() {
  useEffect(() => {
    document.title = "mehedi's resume";
  }, []);

  return (
    <div>

      <p>here's my resume（′◡‵）</p>
      <hr class="dashed" />

      <iframe
        src="https://drive.google.com/file/d/1pmOIJJRWqghjE0JvPvKfcuBi4JWJSyiK/view"
        width="640"
        height="825"
        allow="autoplay"
      ></iframe>

      <a
        href="/Resume_all.pdf"
        download="Resume_all.pdf"
        class="clickable"
      >
        download
      </a>
    </div>
  );
}

export default Resume;