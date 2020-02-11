import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';
import Spinners from './Loading-Spinner';
import MissionKey from './MissionKey';

const Launches = () => {
  const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
      launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
      }
    }
  `;
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  return (
    <div>
      <h1 className="display-5 my-3">Launches</h1>
      <MissionKey />
      {loading ? <Spinners /> : ''}
      {error ? <h1>Sorry an error occured!!</h1> : ''}
      {data
        ? data.launches.map(launch => (
            <LaunchItem key={launch.flight_number} launch={launch} />
          ))
        : ''}
    </div>
  );
};

export default Launches;
