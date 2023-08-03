import { useContext } from "react";

import ExpansesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";

function AllExpenses() {
  const expenses = useContext(ExpensesContext)

  return (
    <ExpansesOutput periodName='Total' expenses={expenses.expenses} fallbackText={'No expenses registered found'} />
  )
}

export default AllExpenses;