import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./store"
import App from "./App.tsx"
import "./index.css"
import "./App.css"
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
