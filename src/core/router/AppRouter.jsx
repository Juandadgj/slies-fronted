import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Header from '../../components/Header/Header';
import { Events } from '../../pages/Events/Events';
import Drawer from '../../components/Drawer/Drawer';
import { appRouterStyles } from './AppRouterStyles';
import { AdminEvents } from '../../pages/AdminEvents/AdminEvents';

export const AppRouter = () => {
  const classes = appRouterStyles();

  return (
    <Router>
      <Box className={classes.root}>
        <Drawer />
        <Box className={classes.mainContent}>
          <Box>
            <Header />
          </Box>

          <Switch>
            <Route exact path='/' component={Events} />
            <Route path='/eventos' component={Events} />
            <Route exact path='/config/admin-eventos' component={AdminEvents} />
          </Switch>
        </Box>
      </Box>
    </Router>
  );
};
