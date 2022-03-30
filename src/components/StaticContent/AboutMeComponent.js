import React from 'react';
import indexClasses from '../../index.css';
const AboutMeComponent = () => {
  return (
    <div
      className={[indexClasses.responsiveContainer, indexClasses.textLeft].join(
        ' '
      )}
    >
      <header
        className={[
          indexClasses.responsiveContainer,
          indexClasses.fontSize24,
          indexClasses.displayFlex,
          indexClasses.marginTop50,
          indexClasses.marginBottom20
        ].join(' ')}
      >
        <div>WELCOME to Holistic KITCHEN</div>
      </header>

      <header
        className={[
          indexClasses.responsiveContainer,
          indexClasses.fontSize18,
          indexClasses.displayFlex,
          indexClasses.marginTop50,
          indexClasses.marginBottom20
        ].join(' ')}
      ></header>
      <div className={indexClasses.responsiveRow}>
        <ul className={indexClasses.styleUl}>
          <li>🍯 Menu and pricing are posted on the website</li>
          <li>🫔 Please order on this website </li>
        </ul>
      </div>
    </div>
  );
};
export default AboutMeComponent;
