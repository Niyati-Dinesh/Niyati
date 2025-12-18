import React from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="texture"></div>

      <p className="footer-text">
        Built and designed by Niyati.
        <span className="rights"> All rights reserved. ©</span>

        {/* Mail icon */}
        <a
          href="mailto:niyati2dinesh@gmail.com"
          className="mail-icon"
          aria-label="Send email to Niyati"
        >
          <Mail size={18}/>
        </a>
      </p>
    </footer>
  );
}
