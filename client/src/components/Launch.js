import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Spinners from './Loading-Spinner';

export default function Launch(props) {
  const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
      launch(flight_number: $flight_number) {
        flight_number
        mission_name
        launch_year
        launch_success
        launch_date_local
        rocket {
          rocket_id
          rocket_name
          rocket_type
        }
      }
    }
  `;
  let { flight_number } = props.match.params;
  flight_number = parseInt(flight_number);

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number }
  });

  return (
    <div>
      {loading ? <Spinners /> : ''}
      {error ? <h1>Sorry an error occured!!</h1> : ''}
      {data ? (
        <div>
          <h1 className="display-4 my-3">
            <span className="text-dark">Mission:</span>{' '}
            {data.launch.mission_name}
          </h1>
          <h4 className="mb-3">Launch Details</h4>
          <ul className="list-group">
            <li className="list-group-item">
              flight_number: {data.launch.flight_number}
            </li>
            <li className="list-group-item">
              Launch Year: {data.launch.launch_year}
            </li>
            <li className="list-group-item">
              Launch Success:{' '}
              <span
                className={classNames({
                  'text-success': data.launch.launch_success,
                  'text-danger': !data.launch.launch_success
                })}
              >
                {' '}
                {data.launch.launch_success ? 'Yes' : 'No'}
              </span>
            </li>
          </ul>

          <h4 className="my-3">Rocket Details</h4>
          <ul className="list-group">
            <li className="list-group-item">
              Rocket ID: {data.launch.rocket.rocket_id}
            </li>
            <li className="list-group-item">
              Rocket Name: {data.launch.rocket.rocket_name}
            </li>
            <li className="list-group-item">
              Rocket Type: {data.launch.rocket.rocket_type}
            </li>
          </ul>
          <hr />
          <Link to="/" className="btn btn-secondary">
            Back
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
