import { StrictMode } from "react";
import ReactDOM from "react-dom"; // For React 17
import App from "./App.tsx";
import "./index.css";
import store from "./redux/store.ts";
import { Provider } from "react-redux";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root") // No need for "!" after root in React 17
);
