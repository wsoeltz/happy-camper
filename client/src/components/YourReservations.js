import React, { useContext } from 'react';
import { UserContext } from '../App';
import useData from '../hooks/useData';
import {cancelReservation} from './CampgroundDetail';
import {Link} from 'react-router-dom';
import StandardPanel from './StandardPanel';
import styled from 'styled-components/macro';

const CancelButton = styled.button`
  margin-top: 0.5rem;
  border: 1px solid red;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: red;
`;

// List of Reservations made by the current user
const YourReservations = () => {
  const user = useContext(UserContext);

  const userId = user && user.id ? user.id : undefined;

  const {loading, error, data, refetch} = useData({url: '/api/get_users_reservations/' + userId});

  let output;
  if (loading) {
    output = <div>Loading...</div>
  } else if (error !== undefined) {
    console.error(error);
    output = null;
  } else if (data !== undefined) {
    const { reservations } = data;
    const reservationElms = reservations.length ? reservations.map(({id, title, campground}) => {
      return (
        <p key={id}>
          <Link to={'/campground/' + campground}><small>{title}</small></Link>
          <br />
          <CancelButton onClick={() => cancelReservation(id, refetch)}>Cancel</CancelButton>
        </p>
      );
    }) : (
      <p>You have not made any reservations</p>
    );
    output = (
      <div>
        {reservationElms}
      </div>
    )
  } else {
    output = null;
  }

  return (
    <StandardPanel>
      <h3>Your Reservations</h3>
      {output}
    </StandardPanel>
  );

}

export default YourReservations;