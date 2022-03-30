import React from 'react';
import indexClasses from '../../index.css';
const FAQ = () => {
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
        <div>Ordering Food </div>
      </header>
      <div className={indexClasses.responsiveRow}>
        <ul className={indexClasses.styleUl}>
          <li>
            🙋‍♂️First time patrons will receive my address and directions in a
            whatsapp message *on the phone number you listed in your order*{' '}
          </li>
          <li>
            🕘 Orders need to placed by 9pm for pickup/delivery the next day
            ​Pickup/Delivery after 10am
          </li>
        </ul>
      </div>

      <header
        className={[
          indexClasses.responsiveContainer,
          indexClasses.fontSize18,
          indexClasses.displayFlex,
          indexClasses.marginTop50,
          indexClasses.marginBottom20
        ].join(' ')}
      >
        <div>BATTER</div>
      </header>
      <div className={indexClasses.responsiveRow}>
        <ul className={indexClasses.styleUl}>
          <li>
            📦For Saturday/Sunday batter orders, please order latest by Thursday
          </li>
          <li>⚪ It's the same batter for both Idli and Dosa </li>
        </ul>
      </div>

      <header
        className={[
          indexClasses.responsiveContainer,
          indexClasses.fontSize18,
          indexClasses.displayFlex,
          indexClasses.marginTop50,
          indexClasses.marginBottom20
        ].join(' ')}
      >
        <div>Paratha and Curd </div>
      </header>
      <div className={indexClasses.responsiveRow}>
        <ul className={indexClasses.styleUl}>
          <li>
            ❓ "Was that paratha, really sach mein Gluten Free?" -{' '}
            <b>"Yes they were! Exactly as advertised"</b>
          </li>
          <li>
            ❓"Was that curd and tea, plant-based?" -{' '}
            <b>"Yes they were! Exactly as advertised"</b>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default FAQ;
