import {
  Box,
  Button,
  Card,
  CardActions,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { Event as EventIcon } from '@material-ui/icons/';
import React, { useState } from 'react';
import { Events } from '../Events/Events';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    date: '',
    timeInit: '',
    duration: '',
    assistentNumber: '',
    idTutor: '',
    place: '',
    closingDateRegistration: '',
    icon: '',
    finished: '',
  });

  const handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    setForm({
      [name]: value,
    });
  };
  return (
    <>
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px 10px',
          flexGrow: 1,
        }}
      >
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <EventIcon />
          <Typography style={{ marginLeft: '10px' }} variant='h5'>
            Registrar Evento
          </Typography>
        </Box>
        <Grid container justifyContent='center' spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={4}>
              <TextField
                name='name'
                id='outlined-basic'
                label='Nombre del evento'
                variant='outlined'
                value={form.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name='duration'
                id='outlined-basic'
                label='Duración del evento'
                value={form.duration}
                onChange={handleInputChange}
                variant='outlined'
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                value={form.place}
                name='place'
                id='outlined-basic'
                onChange={handleInputChange}
                label='Lugar del evento'
                variant='outlined'
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={4}>
              <TextField
                name='date'
                value={form.date}
                id='outlined-basic'
                onChange={handleInputChange}
                label='Fecha del evento'
                variant='outlined'
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                value={form.assistentNumber}
                name='assistentNumber'
                id='outlined-basic'
                label='Número de asistentes del evento'
                onChange={handleInputChange}
                variant='outlined'
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                value={form.closingDateRegistration}
                name='closingDateRegistration'
                id='outlined-basic'
                label='Fecha límite de inscripción al evento'
                onChange={handleInputChange}
                variant='outlined'
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={4}>
              <TextField
                value={form.timeInit}
                name='timeInit'
                id='outlined-basic'
                label='Hora de inicio del evento'
                onChange={handleInputChange}
                variant='outlined'
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                value={form.idTutor}
                onChange={handleInputChange}
                name='idTutor'
                id='outlined-basic'
                label='Tutor del evento'
                variant='outlined'
              />
            </Grid>
          </Grid>
        </Grid>
        <CardActions style={{ marginTop: '30px' }}>
          <Button variant='contained' color='primary' size='small'>
            Registrar
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export const AdminEvents = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '15px 20px ',
        }}
      >
        <Button
          onClick={() => setShowForm(!showForm)}
          variant='contained'
          color='primary'
        >
          {showForm ? 'Cancelar' : 'Registar nuevo'}
        </Button>
      </Box>
      {showForm ? <Form /> : <></>}
      <Events />
    </Box>
  );
};
