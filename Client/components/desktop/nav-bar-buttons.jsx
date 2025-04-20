import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "/components/buttons/login-button";
import { LogoutButton } from "/components/buttons/logout-button";
import { SignupButton } from "/components/buttons/signup-button";
import "./nav-bar-buttons.css";

export const NavBarButtons = () => {
    const {isAuthenticated} = useAuth0();

    return (
        <div className="nav-bar_buttons">
          {!isAuthenticated && (
            <>
              <ul>
                  <li>
                      <SignupButton />
                  </li>
                  <li>
                      <LoginButton />
                  </li>    
              </ul>
              
            </>
          )}
          {isAuthenticated && (
            <>
              <LogoutButton />
            </>
          )}
        </div>
      );

}