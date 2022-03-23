import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { headerStyles } from './HeaderStyles';
import iconoUser from '../../core/assets/img/2048px-User_icon_2.svg.png';

const Header = () => {
  const classes = headerStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.info}>
        <img src={iconoUser} alt='' className={classes.image} />
        <Box>
          <Typography className={classes.info__titles} variant='h6'>
            Santiago Mazuera
          </Typography>
          <Typography className={classes.info__titles} variant='span'>
            Student
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
