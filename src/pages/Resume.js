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
        src="https://drive.google.com/file/d/1XQzkHBNGJ5BRQ7Zrn99UuJfLRivliKYU/preview"
        width="640"
        height="825"
        allow="autoplay"
      ></iframe>

      <a
        href="/Resume_Md_Abdullah_Mehedi.pdf"
        download="Resume_Md_Abdullah_Mehedi.pdf"
        class="clickable"
      >
        download
      </a>
    </div>
  );
}

export default Resume;