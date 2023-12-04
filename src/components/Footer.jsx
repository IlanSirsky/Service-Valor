import React from "react";
import '../styles/footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ Copyright {year} · Ilan Sirisky </p>
    </footer>
  );
}

export default Footer;