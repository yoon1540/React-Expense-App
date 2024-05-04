import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom'; // If using React Router v5
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { closeModal } from '../actions/modalActions';

const AddExpenseModal = ({ modalOpen, dispatch, history }) => {

    return( 
        <div>
            
            <Modal 
                isOpen={modalOpen}
                contentLabel="Add Expense"
                ariaHideApp={false}
            >
                <h3>Add Expense</h3>
                <ExpenseForm
                    onSubmit={(expense) => {
                        dispatch(startAddExpense(expense));
                        history.push('/');
                        dispatch(closeModal());


                    }}
                />
                <button onClick = {() => dispatch(closeModal())}>Cancel</button>
            </Modal>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { 
        modalOpen: state.modal.modalOpen
    };
};

export default withRouter(connect(mapStateToProps)(AddExpenseModal)); // Use withRouter if history is not passed from parent
