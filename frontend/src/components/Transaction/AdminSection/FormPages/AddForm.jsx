import React from 'react'

function AddForm() {
  { id: "txn_001", 
    date: "2025-01-01", 
    description: "Opening balance adjustment", 
    category: "Other", 
    type: "income", 
    amount: 500 },

  return (
    <div>
        <form>
            <label htmlFor='id'>Id</label>
            <input id='id' type='text'></input>

            <label htmlFor='date'>Date</label>
            <input id='date' type='date'></input>

            <label htmlFor='desc'>Description</label>
            <input id='desc' type='text'></input>

            <label htmlFor='category'>Category</label>
            
            <label htmlFor='type'>Type</label>

            <label htmlFor='amount'>Amount</label>
            <input id='amount' type='number'></input>

            
        </form>
    </div>
  )
}

export default AddForm