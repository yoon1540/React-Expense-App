import React from 'react';
import { connect } from 'react-redux';

// ExpensesTotal component
const ExpensesTotal = ({ total }) => {
    return (
        <div>
            <h3>Total Expenses: ${total.toFixed(2)}</h3>
        </div>
    );
};

// Mapping the Redux state to the component's props
const mapStateToProps = (state) => {
    return {
        total: state.expenses.totalBalance
    };
};

export default connect(mapStateToProps)(ExpensesTotal);
