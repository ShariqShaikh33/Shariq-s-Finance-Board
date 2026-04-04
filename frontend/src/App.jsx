import { useState } from 'react'
import './App.css'
import {Provider} from 'react-redux';
import {BrowserRouter, Routes, Route} from "react-router"
import { store } from './store/store'
import Overview from './pages/overview/Overview';
import Layout from './layout/layout';
import Transaction from './pages/transaction/Transaction';
import Insight from './pages/insight/Insight';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='overview' element={<Overview/>}></Route>
            <Route path='transaction' element={<Transaction/>}></Route>
            <Route path='insight' element={<Insight/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
