import React from "react";
import "../App.css";

const Header = props => {
    const {date, handleDateSelection} = props;
    console.log(date)


return (
    <div className="header">
        <h1><span role="img" aria-label="accessible-emoji">🚀 </span>NASA's Photo of The Day</h1>
        <input value={date} type="date" max="2020-10-20" onChange={handleDateSelection} />
    </div>
);
};


export default Header;