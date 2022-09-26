import React from "react";

export default function Signup() {
  return (
    <div>
      <form>
        <div class="pseudo">
          <label> Pseudo : </label>
          <input
            aria-label="tapez votre pseudo"
            type="text"
            placeholder="Colibri"
          />
        </div>
        <div class="email">
          <label> Email : </label>
          <input
            aria-label="tapez votre email"
            type="email"
            placeholder="AMi@FOREVER.COM"
          />
        </div>
        <div class="password">
          <label> Password : </label>
          <input aria-label="tapez votre password" type="password" />
        </div>
      </form>
      <div className="ImageSignup">
        
      </div>
    </div>
  );
}
