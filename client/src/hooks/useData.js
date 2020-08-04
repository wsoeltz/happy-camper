import {useEffect, useState, useCallback} from 'react';
import axios from 'axios';

// Custom hook to return the correct state of the data for any GET
// request. Also returns a refetch function to be used when the data
// should be updated

export default ({url}) => {
  const [output, setOutput] = useState({loading: true, error: undefined, data: undefined});

  // useCallback will allow this function to be updated
  // everytime the url changes
  const fetchData = useCallback(() => {
    axios(process.env.REACT_APP_API_BASE_URL + url)
      .then(res => {
        if (res && res.data) {
          setOutput({
            loading: false,
            error: undefined,
            data: res.data
          });
        } else {
          setOutput({
            loading: false,
            error: 'No data',
            data: undefined
          });
        }
      }).catch(err => {
        console.error(err);
        setOutput({
          loading: false,
          error: 'Unable to fetch the data',
          data: undefined
        });
      })

    }, [url]);

  // useEffect will call fetchData again everytime
  // it is updated, which is everytime the url changes
  useEffect(() => {
    fetchData();
  }, [fetchData])

  // this hook will return everytime the state is updated,
  // which will happen if the url is updated or if refetch
  // is manually called
  return {...output, refetch: fetchData};
}