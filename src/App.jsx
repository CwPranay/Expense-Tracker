import { useState } from 'react'
import Header from './components/header'
import Balance from "./components/Balance"
import './App.css'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionHistory from './components/TransactionHistory'
import AddTranscation from './components/AddTranscation'
import {GlobalProvider} from "./Context/GlobalState"

function App() {
  


  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactionHistory/>
      <AddTranscation/>
      
    </div>

     
    </GlobalProvider>
  )
}

export default App
