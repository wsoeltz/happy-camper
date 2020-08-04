import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext, DateContext } from '../App';
import DatePicker from "react-datepicker";
import styled from 'styled-components/macro';
 
import "react-datepicker/dist/react-datepicker.css";

/**
  Styled Components for the Nav
**/
const Root = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255);
  padding: 1rem;
  border-bottom-left-radius: 8px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.34);
`;

const Title = styled.h1`
  margin: 0.55rem 0 0;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 0.85rem;
    margin: 0.5rem 0 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

const DatePickerContainer = styled.div`
  text-align: center;
  color: #555;

  .react-datepicker-wrapper,
  input {
    text-align: center;
    width: 100%;
    box-sizing: border-box;
  }

  input {
    padding: 0.25rem;
    border: none;
    border-radius: 4px;
    margin: 5px 0;
    box-shadow: 0px 0px 2px 0px rgba( 0, 0, 0, 0.3);
  }

  @media (max-width: 700px) {
    margin-top: 0.5rem;
  }
`;
const DateTitle = styled.div`
  font-size: 0.7rem;
  text-transform: uppercase;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0 0 0 3rem;
  padding: 0;
  text-align: center;

  @media (max-width: 700px) {
    margin: 0;
  }
`;

const linkStyles = `
  display: block;
  margin: 0 0.6rem;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  color: #216ba5;

  &:hover {
    border-bottom: solid 1px #216ba5;
  }

  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const NavLink = styled(Link)`
  ${linkStyles}
`;

const LogoutLink = styled.span`
  ${linkStyles}
  cursor: pointer;
`;
/**
  End component styling
**/


function Nav({handleLogout}) {
  const user = useContext(UserContext);
  const {selectedDate, setSelectedDate} = useContext(DateContext);
  const text = user && user.username
    ? <>Welcome to Happy Camper, <strong>{user.username}</strong>.</>
    : 'Welcome to Happy Camper. Please login or register.';

  let output;
  if (!user) {
    output = (
      <>
        <li>
          <NavLink to='/login'>
            login
          </NavLink>
        </li>
        <li>
          <NavLink to='/register'>
            register
          </NavLink>
        </li>
      </>
    );
  } else {
    output = (
      <>
        <li>
          <NavLink to='/reservations'>
            Your Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to='/your-campgrounds'>
            Your Campgrounds
          </NavLink>
        </li>
        <li onClick={handleLogout}>
          <LogoutLink>
            logout
          </LogoutLink>
        </li>
      </>
    );
  }

  // Don't allow the user to book days in the past
  const minDate = new Date();

  return (
    <Root>
      <Content>
        <DatePickerContainer>
          <DateTitle>Looking to go camping on:</DateTitle>
          <DatePicker
            selected={selectedDate}
            onChange={setSelectedDate}
            minDate={minDate}
          />
        </DatePickerContainer>
        <NavLinks>
          {output}
        </NavLinks>
      </Content>
      <Title>{text}</Title>
    </Root>
  );
}

export default Nav;
