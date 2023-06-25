import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button, Header, List } from 'semantic-ui-react';

function App() {
  // var to store activities and a function to set activities (useState - react hook)
  const [activities, setActivities] = useState([]);

  // react hook - useEffect - every time the app is updated it will recall this useEffect hook
  // what we want react to do when we open up
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data); // this will loop indefinitely unless we add some dependencies
      })
  }, []) // adding this [] dependencies will tell it to only fire useEffect once (not strictly true but in general)

  return (
    <div className="container-fluid p-4">
      <Header as='h2' icon='users' content='Reactivities' />
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
