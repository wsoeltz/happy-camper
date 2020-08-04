import React, { useContext } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import useData from '../hooks/useData';
import axios from 'axios';
import StandardPanel from './StandardPanel';
import { AppContext } from '../App';
import CampgroundForm from './CampgroundForm';


const EditCampground = () => {
  // Get the id from the url for target campground
  const {id} = useParams();
  const history = useHistory();
  const {refetch} = useContext(AppContext);

  const postFormData = data => {
    axios({
      method: 'post',
      url: process.env.REACT_APP_API_BASE_URL + '/api/edit_campground',
      data: {...data, campground_id: id},
    }).then(res => {
      if (res && res.data) {
        history.push('/your-campgrounds');
        refetch();
      }
    }).catch(err => {
      console.error(err);
    })
  }

  const {loading, error, data} = useData({url: '/api/get_campground/' + id});

  let output;
  if (loading) {
    output = <div>Loading...</div>
  } else if (error !== undefined) {
    console.error(error);
    output = null;
  } else if (data !== undefined) {
    output = (
      <CampgroundForm
        postFormData={postFormData}
        initialData={data.campground}
        submitButtonText={'Edit Campground'}
      />
    );
  } else {
    output = null;
  }
  return (
    <StandardPanel>
      <h3>Edit Campground</h3>
      {output}
    </StandardPanel>
  );

}

export default EditCampground;