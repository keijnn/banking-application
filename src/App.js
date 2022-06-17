import React from "react"
import "./App.css"
import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import { Balance } from "./components/Balance/Balance"
import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { SendMoneyPage } from "./components/SendMoneyPage/SendMoneyPage"
import { HomePage } from "./components/HomePage/HomePage"

const App = () => {
  const [act, setAct] = useState('Home')
  const [bal, setBal] = useState()
  const [change, setChange] = useState()

  // Active wallet
  const dataBalance = (valueBalance) => {
    setBal(valueBalance)
  }
  // NavBar active button
  const data = (value) => {
    setAct(value)
  } 

  // Active buuton from SendMoney.js
  const dataChange = (valueChange) => {
    setChange(valueChange)
  }

  return (
    <div className="App">
      <NavBar data={data} dataChange = {dataChange} change={change} active = {act} />
      <Balance dataBalance={dataBalance} active={act} />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<HomePage act = {act} dataChange = {dataChange} amount = {bal}/>} />
        <Route path="sendmoney" element={<SendMoneyPage />} />
      </Routes>
      <Outlet /> 
    </div>
  )
}

export default App
