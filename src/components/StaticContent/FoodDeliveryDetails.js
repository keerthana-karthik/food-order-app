import React from 'react';
import indexClasses from '../../index.css';
const FoodDeliveryDetails = () => {
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
        <div>FOOD DELIVERY at your door step </div>
      </header>
      <div className={indexClasses.responsiveRow}>
        <ul className={indexClasses.styleUl}>
          <li>💰Delivery Charges: </li>
          <li>✔️ $5 Folsom</li>
          <li>✔️ $10 El-Dorado, RanchoCordova</li>
          <li>✔️ $15 Roseville, GraniteBay </li>
          <li>✔️ $20 ElkGrove, Loomis </li>
          <li>🔍Minimum food order to avail delivery service $20 </li>
          <li>🕘 Orders need to placed by 9pm</li>
          <li>🚗 Same-day delivery between 11am - 3pm </li>
          <li>
            📜 One-time form to enter delivery address &nbsp;
            <a target="_blank" href="https://forms.gle/JS3Yn6jMpuYJSkWU7">
              https://forms.gle/JS3Yn6jMpuYJSkWU7
            </a>
          </li>
          <li>
            ❗In case delivery is NOT received at your end, and my driver has to
            deliver your food back to me - delivery charges will double.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default FoodDeliveryDetails;
