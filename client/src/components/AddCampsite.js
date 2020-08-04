import React, {useState} from 'react';
import axios from 'axios';
import {
  StandardLabel,
  StandardInput,
  StandardSubmitButton,
} from './Utils';

const addCampsite = (name, campground_id, callback) => {
  axios({
      method: 'post',
      url: process.env.REACT_APP_API_BASE_URL + '/api/create_campsite',
      data: {name, campground_id},
    }).then(res => {
      if (res && res.data) {
        callback();
      }
    }).catch(err => {
      console.error(err);
    })
}

// Form component for adding a campsite to a campground
const AddCampsite = ({id, refetch}) => {
  const [newCampsiteName, setNewCampsiteName] = useState('');

  const onSubmit = e => {
      e.preventDefault();
      if (newCampsiteName) {
        addCampsite(newCampsiteName, id, () => {
          refetch();
          setNewCampsiteName('');
        })
      }
    }

  return (
    <form onSubmit={onSubmit}>
      <StandardLabel htmlFor={'add-new-campsite-input'}>Add another campsite</StandardLabel>
      <StandardInput
        id={'add-new-campsite-input'}
        type={'text'}
        value={newCampsiteName}
        onChange={e => setNewCampsiteName(e.target.value)}
        required={true}
      />
      <StandardSubmitButton type={'submit'} value={'Add Campsite'} />
    </form>
  );
}

export default AddCampsite;
