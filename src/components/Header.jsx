import React from 'react';
import LOGO from '../assets/img/logo.png';
import BBC from '../assets/img/logo-bbc.png';
import FORBES from '../assets/img/logo-forbes.png';
import TECH_CRUNCH from '../assets/img/logo-techcrunch.png';
import BI from '../assets/img/logo-bi.png';

const Header = () => {
  return (
    <header className="header">
      <img src={LOGO} alt="Nexter Logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our properties</button>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src={BBC} alt="BBC" />
        <img src={FORBES} alt="Forbes" />
        <img src={TECH_CRUNCH} alt="techcrunch" />
        <img src={BI} alt="Business Insider" />
      </div>
    </header>
  );
};

export default Header;
