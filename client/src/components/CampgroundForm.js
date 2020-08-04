import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
import {
  StandardLabel,
  StandardInput,
  StandardTextarea,
  StandardSubmitButton,
} from './Utils';

// Form component for adding or editing a Campground
const CampgroundForm = ({initialData, postFormData, submitButtonText}) => {
  const user = useContext(UserContext);

  const [name, setName] = useState(initialData ? initialData.name : '');
  const [image_url, setImageUrl] = useState(initialData ? initialData.image_url : '');
  const [description, setDescription] = useState(initialData ? initialData.description : '');
  const [phone, setPhone] = useState(initialData ? initialData.phone : '');
  const [lat, setLat] = useState(initialData ? initialData.lat : '');
  const [lng, setLng] = useState(initialData ? initialData.lng : '');

  const userId = user && user.id ? user.id : undefined;

  const onSubmit = e => {
    e.preventDefault();
    if (userId && name && phone && lat && lng) {
      postFormData({name, image_url, description, phone, lat, lng, user_id: userId});
    }
  }

  return (
      <form onSubmit={onSubmit}>
        <StandardLabel htmlFor={'add-campground-name'}>Name</StandardLabel>
        <StandardInput
          type='text'
          id={'add-campground-name'}
          placeholder={'Name'}
          value={name}
          onChange={e => setName(e.target.value)}
          required={true}
        />
        <StandardLabel htmlFor={'add-campground-image'}>Image URL</StandardLabel>
        <StandardInput
          type='text'
          id={'add-campground-image'}
          placeholder={'Image URL'}
          value={image_url}
          onChange={e => setImageUrl(e.target.value)}
        />
        <StandardLabel htmlFor={'add-campground-description'}>Description</StandardLabel>
        <StandardTextarea
          id={'add-campground-description'}
          placeholder={'Description'}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <StandardLabel htmlFor={'add-campground-phone'}>Phone</StandardLabel>
        <StandardInput
          type='phone'
          id={'add-campground-phone'}
          placeholder={'Phone'}
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required={true}
        />
        <StandardLabel htmlFor={'add-campground-latitude'}>Latitude</StandardLabel>
        <StandardInput
          type='number'
          id={'add-campground-latitude'}
          placeholder={'Latitude'}
          value={lat}
          onChange={e => setLat(e.target.value)}
          step={'0.000001'}
          min={-90}
          max={90}
          required={true}
        />
        <StandardLabel htmlFor={'add-campground-longitude'}>Longitude</StandardLabel>
        <StandardInput
          type='number'
          id={'add-campground-longitude'}
          placeholder={'Longitude'}
          value={lng}
          onChange={e => setLng(e.target.value)}
          step={'0.000001'}
          min={-180}
          max={180}
          required={true}
        />
        <StandardSubmitButton type='submit' value={submitButtonText} />
      </form>
  );
}

export default CampgroundForm;
