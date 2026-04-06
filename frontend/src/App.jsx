import { useState } from 'react'
import './App.css'
import {Provider} from 'react-redux';
import {BrowserRouter, Routes, Route} from "react-router"
import { store } from './store/store'
import Overview from './pages/overview/Overview';
import Layout from './layout/layout';
import Transaction from './pages/transaction/Transaction';
import Insight from './pages/insight/Insight';
import TransactionTable from './components/Transaction/TransactionTable';
import AddTransactino from './components/Transaction/MidSection/AddTransactino';
import EditTransaction from './components/Transaction/MidSection/EditTransaction';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='overview' element={<Overview/>}></Route>
            <Route path='transaction' element={<Transaction/>}>
              <Route path='' element={<TransactionTable></TransactionTable>}></Route>
              <Route path='addtransaction' element={<AddTransactino/>}></Route>
              <Route path='edittransaction' element={<EditTransaction/>}></Route>
            </Route>
            <Route path='insight' element={<Insight/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
