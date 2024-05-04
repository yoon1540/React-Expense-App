import { connect } from 'react-redux';
import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseTotal from './ExpenseTotal';
import AddExpenseModal from './AddExpenseModal';
import AddExpenseButton from './AddExpenseButton';


const ExpenseDashboardPage = () => (

  <div>

    <AddExpenseButton/>
    <AddExpenseModal/>
    <ExpenseListFilters />
    <ExpenseTotal />
    <ExpenseList />
  </div>
);

export default connect()(ExpenseDashboardPage);
