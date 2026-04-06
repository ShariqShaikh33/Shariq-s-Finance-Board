import React from 'react'
import CustomCheckboxComponent from '../../common/CheckboxComponent/CustomCheckboxComponent'

function FilterButton() {
  
  const filterlist = [
    {
      "name":"income","type":"Income","list":[
        "Salary", "Freelance", "Investment", "Other",
        
      ]
    },
    {
      "name":"expense","type":"Expense","list":[
        "Food", "Groceries", "Rent", "Transport",
        "Entertainment", "Health", "Shopping", "Utilities",
        "Education", "Travel"
      ]
    }


   
  ]
  return (
    <div className='border flex'>
      <CustomCheckboxComponent name={filterlist[0].type} type={filterlist[0].type} checkboxlist={filterlist[0].list} k="filterbytype"></CustomCheckboxComponent>
      <CustomCheckboxComponent name={filterlist[1].type} type={filterlist[1].type} checkboxlist={filterlist[1].list} k="filterbycategory"></CustomCheckboxComponent>
    </div>
  )
}

export default FilterButton