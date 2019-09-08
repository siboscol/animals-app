import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[500]
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Animals app
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
