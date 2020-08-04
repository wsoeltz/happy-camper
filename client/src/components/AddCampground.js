import React, { useContext } from 'react';
import StandardPanel from './StandardPanel';
import CampgroundForm from './CampgroundForm';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../App';

const AddCampground = () => {
  const history = useHistory();
  const {refetch} = useContext(AppContext);

  const postFormData = data => {
    axios({
      method: 'post',
      url: process.env.REACT_APP_API_BASE_URL + '/api/add_campground',
      data,
    }).then(res => {
      if (res && res.data) {
        history.push('/your-campgrounds');
        refetch();
      }
    }).catch(err => {
      console.error(err);
    })
  }

  return (
    <StandardPanel>
      <h3>Add Campground</h3>
      <CampgroundForm postFormData={postFormData} submitButtonText={'Add Campground'} />
    </StandardPanel>
  );

}

export default AddCampground;