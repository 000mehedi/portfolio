import "./footer.css";

function Footer() {
  return (
    <div>
      <hr class="dashed" />
      <p class="links">
        <a
          href="https://www.linkedin.com/in/abdullahmehedi/"
          target="_blank"
          class="fa fa-linkedin fa-lg"
        ></a>
        <a
          href="https://github.com/000mehedi"
          target="_blank"
          class="fa fa-github fa-lg"
        >
          {" "}
        </a>
        
        <a
          href="https://www.instagram.com/abdullahmehedi_/"
          target="_blank"
          class="fa fa-instagram fa-lg"
        >
          {" "}
        </a>
        
      </p>
      <p class="credit_p">
        inspired by{" "}
        <a
          href="https://www.tiffanywang.me/"
          target="_blank"
          class="credit"
        >
          tiffany
        </a>
      </p>
    </div>
  );
}

export default Footer;
