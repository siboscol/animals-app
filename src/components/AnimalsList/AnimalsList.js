import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Animal from './components/Animal';
import animalsList from './data';

const useStyles = makeStyles( ( )=> ({
    root: {
        padding: 24
    },
    gridRoot: {
      flexGrow: 1,
    }
}));

const AnimalsList = () => {
  const [animals] = useState(animalsList);
  const classes = useStyles();

  const handleSearch = e => {
    console.log('Something typed', e);
  };

  return (
    <div className={classes.root}>
      <TextField
        id="searchAnimalsType"
        placeholder="Search for Animals type"
        margin="normal"
        onChange={handleSearch}
      />
      <Grid container className={classes.gridRoot} spacing={2}>
        {animals.map((animal, index) => (
          <Grid key={index} item xs={3}>
            <Animal animal={animal}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AnimalsList;
