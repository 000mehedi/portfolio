import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BlogNavBar from "../components/blog_navbar";

function Log() {
  useEffect(() => {
    document.title = "mehedi's log";
  }, []);

  return (
    <div>
      <div class="flex-container" id="blog_header_card">
        <h1 id="blog_header">logbook</h1>
        <BlogNavBar></BlogNavBar>
      </div>

      <p>collections of events and adventures</p>
      <hr class="dashed"></hr>
    
      <p />
      <p>
        <b>September 2023</b>
        <br />- will watch Coldplay LIVE
      </p>
      <p>
        <b>March 2023</b>
        <br />- created this website!
      </p>
      <p />
      <p>
        <b>December 2022</b>
        <br />- something ✨ happened
      </p>
      <p />
      <p>
        <b>August 2022</b>
        <br />- went to Waterton⛰️
      </p>
      <p />
      
      <p>
        <b>July 2022</b>
        <br />- saw Big Sean LIVE
      </p>
      <p>
        <b>July 2022</b>
        <br />- saw Stampede🤠
      </p>
      <p />
      <p>
        <b>May 2022</b>
        <br />- did some hikes
      </p>
      <p />
      <p>
        <b>Jan 2022</b>
        <br />- joined CPC
      </p>
      <p />
      <p>
        <b>Nov 2021</b>
        <br />- bought a Fujifilm📷
      </p>
      <p />
      <p>
        <b>Sept 2021</b>
        <br />- started studying at UCalgary
      </p>
    </div>
  );
}

export default Log;
