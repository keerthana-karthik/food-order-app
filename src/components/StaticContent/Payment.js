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
          <li>π²Cash preferred </li>
          <li>π²Venmo/Zelle/Paypal/CASH app etc accepted </li>
          <li>π V (for vemo) or </li>
          <li>π Z (for zelle) or </li>
          <li>π P (for paypal) or</li>
          <li>π C (for CASH). </li>
        </ul>
      </div>
    </div>
  );
};
export default Payment;
