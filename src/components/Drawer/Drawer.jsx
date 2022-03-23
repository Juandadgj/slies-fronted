import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import logoUnac from '../../core/assets/img/logo_unac_amarillo.png';
import { routes } from '../../core/router/routes';
import { drawerStyles } from './DrawerStyles';

const Drawer = () => {
  const [closed, setClosed] = useState(false);
  const classes = drawerStyles();

  const toogleDrawer = () => {
    setClosed(!closed);
  };

  const DrawerOpen = () => {
    return (
      <Box className={classes.ancho}>
        <Box className={classes.header__drawer}>
          <Typography className={classes.arrow} onClick={toogleDrawer}>
            <Icon>arrow_back_ios</Icon>
          </Typography>
          <img src={logoUnac} alt='' />
          <hr className={classes.hr} />
          <Typography variant='h1' className={classes.titulos}>
            UNAC
          </Typography>
          <Typography className={classes.nombre}>
            CORPORACION UNIVERSITARIA ADVENTISTA COLOMBIA
          </Typography>
        </Box>

        <List className={classes.lista}>
          {routes.map((route) => (
            <Link to={route.path}>
              <ListItem button key={route.title} className={classes.items}>
                <ListItemIcon>
                  <Icon className={classes.icons}>{route.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={route.title} />
              </ListItem>
            </Link>
          ))}
          <ListItem button className={classes.items}>
            <ListItemIcon>
              <Icon className={classes.icons}>settings</Icon>
            </ListItemIcon>
            <ListItemText primary='Salir' />
          </ListItem>
        </List>
      </Box>
    );
  };

  const DrawerClosed = () => {
    return (
      <Box className={classes.closed}>
        <Typography className={classes.arrow__closed} onClick={toogleDrawer}>
          <Icon>arrow_forward_ios</Icon>
        </Typography>

        <Box className={classes.icons__container}>
          <hr className={classes.divider} />
          <List>
            {routes.map((route) => (
              <ListItem button key={route.title} className={classes.items}>
                <ListItemIcon>
                  <Icon className={classes.icons__closed}>{route.icon}</Icon>
                </ListItemIcon>
              </ListItem>
            ))}
            <ListItem button className={classes.items}>
              <ListItemIcon>
                <Icon className={classes.icons__closed}>settings</Icon>
              </ListItemIcon>
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  };

  return (
    <Box className={closed ? classes.root__closed : classes.root}>
      {closed ? <DrawerClosed /> : <DrawerOpen />}
    </Box>
  );
};

export default Drawer;
