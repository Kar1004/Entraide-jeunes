import React from "react";

function login() {
  return (
    <div>
      <form>
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
      <div className="ImageLogin">
        
        </div>
    </div>
  );
}

export default login;
