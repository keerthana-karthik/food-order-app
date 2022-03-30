import React from 'react';
import indexClasses from '../../index.css';
const Payment = () => {
  return (
    <div
      className={[indexClasses.responsiveContainer, indexClasses.textLeft].join(
        ' '
      )}
    >
      <header
        className={[
          indexClasses.responsiveContainer,
          indexClasses.fontSize18,
          indexClasses.displayFlex,
          indexClasses.marginTop50,
          indexClasses.marginBottom20
        ].join(' ')}
      >
        <div>Payment</div>
      </header>
      <div className={indexClasses.responsiveRow}>
        <ul className={indexClasses.styleUl}>
          <li>💲Cash preferred </li>
          <li>💲Venmo/Zelle/Paypal/CASH app etc accepted </li>
          <li>👉 V (for vemo) or </li>
          <li>👉 Z (for zelle) or </li>
          <li>👉 P (for paypal) or</li>
          <li>👉 C (for CASH). </li>
        </ul>
      </div>
    </div>
  );
};
export default Payment;
