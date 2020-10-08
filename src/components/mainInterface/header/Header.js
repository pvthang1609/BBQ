import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <span>Simons's</span> BBQ Team
      </h1>
      <div className="status">
        <p>Last Synced</p>
        <p>
          <i class="fa fa-circle" aria-hidden="true"></i>3 minute ago
        </p>
      </div>
      <div className="buttonHelp">
        <p>
          <i class="fa fa-question-circle-o" aria-hidden="true"></i>Help
        </p>
      </div>
    </header>
  );
}
