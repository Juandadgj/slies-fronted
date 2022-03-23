import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Grid,
  Button,
  Box,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LaunchIcon from '@material-ui/icons/Launch';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PropTypes from 'prop-types';
import { eventStyles } from './EventStyles';

export const Event = ({ evento }) => {
  const classes = eventStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image='https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg'
      />
      <CardContent>
        <Grid
          container
          item
          spacing={1}
          direction='row'
          justifyContent='space-around'
          alignItems='center'
        >
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='h6'>
                  {evento.name}
                </Typography>
                <Typography variant='body2' gutterBottom>
                  {evento.place}
                </Typography>
              </Grid>
              <Grid
                container
                direction='row'
                justifyContent='flex-end'
                alignItems='center'
              >
                <AccessTimeIcon />
                <Typography style={{ paddingLeft: '5px' }} variant='body2'>
                  In Progress
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <LaunchIcon />
        </IconButton>
      </CardActions>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
        }}
      >
        <Button variant='contained' color='primary'>
          Inscribirme
        </Button>
      </Box>
    </Card>
  );
};

Event.propTypes = {
  evento: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    timeInit: PropTypes.string,
    duration: PropTypes.string,
    assistentNumber: PropTypes.number,
    idTutor: PropTypes.string,
    place: PropTypes.string,
    closingDateRegistration: PropTypes.string,
    icon: PropTypes.string,
    finished: PropTypes.bool,
  }),
};
