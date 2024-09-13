import React from 'react';

const ConfirmationDialog = ({ show, onConfirm, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Confirm Submission</h2>
        <p>Are you sure you want to submit the survey?</p>
        <div className="modal-buttons">
          <button onClick={onClose} className="modal-button cancel">No</button>
          <button onClick={onConfirm} className="modal-button confirm">Yes</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
