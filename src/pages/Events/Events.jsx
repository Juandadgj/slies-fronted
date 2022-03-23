import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Event } from '../../components/Event/Event';
import { useEventsStyle } from './EventsStyle';
import './Events.css';

export const Events = () => {
  const classes = useEventsStyle();
  const GetEvents = gql`
    query events {
      events {
        id
        name
        date
        timeInit
        duration
        assistentNumber
        idTutor
        place
        closingDateRegistration
        icon
        finished
      }
    }
  `;
  const { data } = useQuery(GetEvents);
  return (
    <div className='colum-card'>
      {data?.events.map((event) => {
        console.log(event);
        return (
          <div className={classes.card}>
            <Event evento={event} />
          </div>
        );
      })}
    </div>
  );
};
