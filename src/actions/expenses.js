
import { database } from '../firebase/firebase';
import { ref, push } from "firebase/database";


// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});


console.log("Database instance:", database);  // This should log the database instance, not 'undefined'

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
      createdBy = ''
    } = expenseData;
    const expense = { description, note, amount, createdAt, createdBy };

    console.log("Before database operation");  // Confirm this logs before error
    return push(ref(database, 'expenses'), expense)
      .then((ref) => {
        console.log("Push successful, ref:", ref);  // Check if push was successful
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      })
      .catch((error) => {
        console.error("Failed to add expense:", error);
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
