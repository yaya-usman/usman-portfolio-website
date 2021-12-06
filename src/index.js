import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MenuLinkProvider } from "./contexts/MenuLinkContext";
import { ModalProvider } from "./contexts/ModalContext";
import { ModalPropsProvider } from "./contexts/ModalPropsContext";
import { ToggleProvider } from "./contexts/ToggleContext";

ReactDOM.render(
  <React.StrictMode>
    <MenuLinkProvider>
      <ModalProvider>
        <ModalPropsProvider>
          <ToggleProvider>
            <App />
          </ToggleProvider>
        </ModalPropsProvider>
      </ModalProvider>
    </MenuLinkProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
