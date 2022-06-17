import { React, StrictMode, useState } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
)
