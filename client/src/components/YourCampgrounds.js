import React, { useContext } from 'react';
import { UserContext } from '../App';
import useData from '../hooks/useData';
import {Link} from 'react-router-dom';
import StandardPanel from './StandardPanel';
import styled from 'styled-components/macro';

const EditButton = styled(Link)`
  margin-top: 0.5rem;
  border: 1px solid #216ba5;
  text-decoration: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #216ba5;
  padding: 1px 6px;
`;

// List of Campgrounds owned by the current user
const YourCampgrounds = () => {
  const user = useContext(UserContext);

  const userId = user && user.id ? user.id : undefined;

  const {loading, error, data} = useData({url: '/api/get_users_campgrounds/' + userId});

  let output;
  if (loading) {
    output = <div>Loading...</div>
  } else if (error !== undefined) {
    console.error(error);
    output = null;
  } else if (data !== undefined) {
    const campgrounds = data.campgrounds.length ? data.campgrounds.map(({id, name, lat, lng}) => {
      return (
        <p key={id}>
          <small>
            <Link to={`/campground/${id}`}>{name}</Link>
            <br />
            <EditButton to={`/edit-campground/${id}`}>Edit</EditButton>
          </small>
        </p>
      );
    }) : (
      <p>You do not own any Campgrounds</p>
    );
    output = (
      <div>
        {campgrounds}
      </div>
    )
  } else {
    output = null;
  }

  return (
    <StandardPanel>
      <h3>Your Campgrounds</h3>
      {output}
      <EditButton to={'/add-campground'}>Add Campground</EditButton>
    </StandardPanel>
  );

}

export default YourCampgrounds;