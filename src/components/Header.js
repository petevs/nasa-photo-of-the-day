import React from "react";
import "../App.css";
import styled from "styled-components"

const newToday = new Date().toISOString().split('T')[0]

const Header = props => {
    const {date, handleDateSelection} = props;
    console.log(date)

return (
    <HeaderDiv>
        <Headline><span role="img" aria-label="accessible-emoji">🚀 </span>NASA's Photo of The Day</Headline>
        <DatePicker value={date} type="date" max={newToday} onChange={handleDateSelection} />
    </HeaderDiv>
);
};

const HeaderDiv = styled.div`
padding: 20px;
`

const Headline = styled.h1``

const DatePicker = styled.input`
    padding: 0.25rem;
    font-size: 1rem;
    font-family: "Orbitron", sans-serif;
`

export default Header;