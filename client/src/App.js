import React, {
  useEffect,
  createContext,
  useState,
} from 'react';
import Nav from './components/Nav';
import LoginRegisterForm from './components/LoginRegisterForm';
import Map from './components/Map';
import CampgroundDetail from './components/CampgroundDetail';
import AddCampground from './components/AddCampground';
import YourReservations from './components/YourReservations';
import YourCampgrounds from './components/YourCampgrounds';
import EditCampground from './components/EditCampground';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import axios from 'axios';
import useData from './hooks/useData';
import noop from 'lodash/noop';

// Set a user context so that the logged in users data
// may be accessed anywhere in the app
export const UserContext = createContext(null);

// Set a date context so that the searched date can
// be accessed anywhere in the app
export const DateContext = createContext(new Date());

// The app context includes the global data for all
// all campgrounds along with the refetch function,
// so that any app that needs to modify the data
// can also call to refetch
export const AppContext = createContext({
  data: undefined,
  refetch: noop,
});

const App = () => {
  // set the loggedIn state by checking localstorage for
  // a json webtoken
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false);
  const [user, setUser] = useState(undefined);

  // selectedDate defaults to today
  const [selectedDate, setSelectedDate] = useState(new Date());

  // call the useData hook. Everytime refetch is called, the data
  // variable will be updated and any component that references it
  // will be rerendered
  const {data, refetch} = useData({url: '/api/get_campgrounds'});

  // if the user is logged in but no user data exists,
  // call the server for the users data
  useEffect(() => {
    if (loggedIn && user === undefined) {
      axios(process.env.REACT_APP_API_BASE_URL + '/api/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res && res.data && res.data.username) {
          setUser(res.data);
        } else {
          setLoggedIn(false);
          setUser(undefined);
        }
      }).catch(err => {
        // log the error to the console
        // but there is no need to display
        // an error to the user in this scenario
        console.error(err);
      })
    }
  }, [loggedIn, user]);

  const handleLogin = (e, data) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: process.env.REACT_APP_API_BASE_URL + '/token-auth/',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    }).then(res => {
      if (res && res.data && res.data.user) {
        localStorage.setItem('token', res.data.token);
        setUser(res.data.user);
        setLoggedIn(true);
      }
    }).catch(err => {
      console.error(err);
      alert('There was a problem logging you in. Please try again.');
    })
  };

  const handleRegister = (e, data) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: process.env.REACT_APP_API_BASE_URL + '/api/register/',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    }).then(res => {
      if (res && res.data && res.data.username && res.data.id) {
        localStorage.setItem('token', res.data.token);
        setUser({username: res.data.username, id: res.data.id});
        setLoggedIn(true);
      }
    }).catch(err => {
      console.error(err);
      alert('There was a problem registering. Please try again.');
    })
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(undefined);
    setLoggedIn(false);
  };

  // the following routes should only be available to a user who is logged in
  const loggedInRoutes = user && user.id ? (
    <>
      <Route exact path={'/reservations'} component={YourReservations} />
      <Route exact path={'/your-campgrounds'} component={YourCampgrounds} />
      <Route exact path={'/add-campground'} component={AddCampground} />
      <Route exact path={'/edit-campground/:id'} component={EditCampground} />
    </>
  ) : null;

  return (
    <UserContext.Provider value={user}>
      <AppContext.Provider value={{data, refetch}}>
        <DateContext.Provider value={{selectedDate, setSelectedDate}}>
          <Router>
            <Nav
              handleLogout={handleLogout}
            />
            <Switch>
              <Route
                exact path={'/login'} 
                render={(props) => (
                  <LoginRegisterForm {...props}
                    onSubmit={handleLogin}
                    title={'Log In'}
                    submitButtonText={'Log In'}
                  />
                )}
              />
              <Route
                exact path={'/register'} 
                render={(props) => (
                  <LoginRegisterForm {...props}
                    onSubmit={handleRegister}
                    title={'Register'}
                    submitButtonText={'Create Account'}
                  />
                )}
              />
              <Route exact path={'/campground/:id'} component={CampgroundDetail} />
              {loggedInRoutes}
            </Switch>
            <Map data={data} />
          </Router>
        </DateContext.Provider>
      </AppContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
