import React, { useContext } from 'react';
import { DateContext, UserContext } from '../App';
import useData from '../hooks/useData';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import StandardPanel from './StandardPanel';
import AddCampsite from './AddCampsite';
import styled from 'styled-components/macro';

/**
  Styled Components for the CampgroundsDetail page
**/
const Image = styled.img`
  width: 100%;
`;

const Description = styled.p`
  line-height: 1.5;
  font-size: 0.85rem;
`;

const BookButton = styled.button`
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.7rem;
  transition: all 0.2s ease;
`;

const SiteReservationBase = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
  font-size: 0.85rem;
  transition: all 0.2s ease;

  strong {
    font-weight: 600;
    text-transform: uppercase;
  }

  small {
    display: flex;
    justify-content: space-between;
  }
`;

const AvailabileSite = styled(SiteReservationBase)`
  color: blue;

  button {
    color: blue;
    border-color: blue;
  }
`;

const BookedSite = styled(SiteReservationBase)`
  color: red;

  button {
    color: red;
    border-color: red;
  }
`;

const ReservedSite = styled(SiteReservationBase)`
  color: green;

  button {
    color: green;
    border-color: green;
  }
`;

/**
  End component styling
**/


/**
  API Mutation calls for various actions that can be 
  performed on the CampgroundDetail page
**/
const deleteCampsite = (campsite_id, callback) => {
  axios({
      method: 'post',
      url: process.env.REACT_APP_API_BASE_URL + '/api/delete_campsite',
      data: {campsite_id},
    }).then(res => {
      if (res && res.data) {
        callback();
      }
    }).catch(err => {
      console.error(err);
    })
}

const bookSite = (date, campsite_id, camper_id, callback) => {
  const day = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate();
  const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1).toString() : date.getMonth() + 1;
  const pythonDate = `${date.getFullYear()}-${month}-${day}`;
  axios({
      method: 'post',
      url: process.env.REACT_APP_API_BASE_URL + '/api/create_booking',
      data: {date: pythonDate, campsite_id, camper_id},
    }).then(res => {
      if (res && res.data) {
        callback();
      }
    }).catch(err => {
      console.error(err);
    })
}

export const cancelReservation = (reservation_id, callback) => {
  axios({
      method: 'post',
      url: process.env.REACT_APP_API_BASE_URL + '/api/cancel_reservation',
      data: {reservation_id},
    }).then(res => {
      if (res && res.data) {
        callback();
      }
    }).catch(err => {
      console.error(err);
    })
}
/**
  End API Mutation calls
**/

const CampgroundsDetail = () => {
  // Get the id from the url for target campground
  const {id} = useParams();

  const {loading, error, data, refetch} = useData({url: '/api/get_campground/' + id});

  const {selectedDate} = useContext(DateContext);
  const user = useContext(UserContext);

  let output;
  if (loading) {
    output = <div>Loading...</div>
  } else if (error !== undefined) {
    console.error(error);
    output = null;
  } else if (data !== undefined) {
    const {
      campground: {name, image_url, description, phone, campsites, owner},
    } = data;
    const campsiteElms = campsites.map(site => {
      // Find a reservation for the current user selected date
      const reservation = site.reservations.find(r => {
        // The time must be appended to the returned date in order for the correct
        // date to be created with the javascript Date class
        const reservationDate = new Date(r.date + 'T00:00:00');
        return (selectedDate.getDate() === reservationDate.getDate() &&
                selectedDate.getFullYear() === reservationDate.getFullYear() &&
                selectedDate.getMonth() === reservationDate.getMonth())
      });
      let CampsiteRoot;
      let availability;
      // if there is already a reservation made for a site on the selected day
      if (reservation) {
        if (user && (user.id === reservation.camper || user.id === owner)) {
          const text = user.id === reservation.camper
            // If it is the current users reservation, let them know and give them
            // the option to cancel
            ? 'Reserved! Click to cancel'
            // If the current user is the owner of the campground, let them know
            // someone has booked the site. Also give them the option to cancel
            // the booking
            : 'Reserved by a user. Click to cancel';
          const onClick = () => {
            cancelReservation(reservation.id, refetch);
          }
          availability = <BookButton onClick={onClick}>{text}</BookButton>
          CampsiteRoot = ReservedSite;
        } else {
          // If the site is booked but not by the current user and you are not
          // the campground owner, simply show a message that the site is booked
          availability = <em>Site is booked for this day</em>
          CampsiteRoot = BookedSite;
        }
      } else {
        const onClick = () => {
          // If the user is logged in, book the
          if (user && user.id) {
            bookSite(selectedDate, site.id, user.id, refetch);
          } else {
            // Otherwise tell them to login
            alert('Please login or register to book a site');
          }
        }
        availability = <BookButton onClick={onClick}>Book site</BookButton>
        CampsiteRoot = AvailabileSite;
      }

      // Allow the owner of the campground to delete campsites
      const deleteCampsiteButton = user && user.id === owner ? (
        <BookButton onClick={() => deleteCampsite(site.id, refetch)}>Delete site</BookButton>
      ) : null;

      return (
        <CampsiteRoot key={'campsite-' + site.id}>
          <strong>
            <span role='img' aria-label='campsite'>⛺</span> {site.name}
          </strong>
          <small>{availability} {deleteCampsiteButton}</small>
        </CampsiteRoot>
      );
    })

    // If there is no image_url, don't try to render an image
    const image = image_url ? <Image src={image_url} alt={name} /> : null;

    // Allow the owner of the campground to add campsites
    const addCampsiteForm = user && user.id === owner ? (
      <AddCampsite
        id={id}
        refetch={refetch}
      />
    ) : null;

    output = (
      <div>
        <h3>
          <span role='img' aria-label='campground'>🏕️</span> {name}
        </h3>
        {image}
        <p>
          <small>
            <span role='img' aria-label='phone'>📞</span> <a href={`tel:${phone}`}>{phone}</a>
          </small>
        </p>
        <Description>{description}</Description>
        <p>
          <strong>Campsites:</strong>
        </p>
        {campsiteElms}
        {addCampsiteForm}
      </div>
    )
  } else {
    output = null;
  }

  return (
    <StandardPanel>
      {output}
    </StandardPanel>
  );
}

export default CampgroundsDetail;
