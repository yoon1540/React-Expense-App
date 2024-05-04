import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../actions/modalActions';

const SomeComponent = ({ openModal, closeModal }) => (
    <div>
        <button onClick={openModal}>Open Modal</button>
        <button onClick={closeModal}>Close Modal</button>
    </div>
);

const mapDispatchToProps = {
    openModal,
    closeModal
};

export default connect(null, mapDispatchToProps)(SomeComponent);
