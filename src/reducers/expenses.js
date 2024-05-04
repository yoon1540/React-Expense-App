// Expenses Reducer

import expenses from "../selectors/expenses"; // This import is not used here and should be removed unless it's for another purpose.

const expensesReducerDefaultState = {
  expenses: [],
  totalBalance: 0
};

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    // Add Expense
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.expense],
        totalBalance: state.totalBalance + action.expense.amount
      };

    // Delete Expense
    case 'REMOVE_EXPENSE':
      const remainingExpenses = state.expenses.filter(expense => expense.id !== action.id);
      const removedExpense = state.expenses.find(expense => expense.id === action.id);
      const newTotal = removedExpense ? state.totalBalance - removedExpense.amount : state.totalBalance;
      return {
        ...state,
        expenses: remainingExpenses,
        totalBalance: newTotal
      };

    // Edit Expense
    case 'EDIT_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map(expense => {
          if (expense.id === action.id) {
            return {
              ...expense,
              ...action.updates
            };
          } else {
            return expense;
          }
        }),
        totalBalance: state.expenses.reduce((total, expense) => {
          if (expense.id === action.id) {
            return total - expense.amount + (action.updates.amount || expense.amount);
          }
          return total + expense.amount;
        }, 0)
      };

    default:
      return state;
  }
};
