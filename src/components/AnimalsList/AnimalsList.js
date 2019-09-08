import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import AnimalGlobal from './components/AnimalGlobal';
import AnimalSpecific from './components/AnimalSpecific';
import animalsList from './data';
import {
  getAnimalsTypeList,
  getAnimalsByType,
  removeAnimalByName
} from '../../helpers/utils';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  gridRoot: {
    flexGrow: 1
  },
  bar: {
    display: 'flex',
    paddingBottom: theme.spacing(2)
  },
  grow: {
    flexGrow: 1
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  }
}));

const AnimalsList = () => {
  const [totalAnimalsList, setTotalAnimalsList] = useState(animalsList);
  const [isSpecific, setIsSpecific] = useState(false);
  const classes = useStyles();

  const globalAnimalsType = getAnimalsTypeList(totalAnimalsList);
  const [globalList, setGlobalList] = useState(globalAnimalsType);
  const [specificList, setSpecificList] = useState([]);

  const handleSearch = e => {
    console.log('Something typed', e);
  };

  const handleSelectedType = type => {
    const animalsByType = getAnimalsByType(totalAnimalsList, type);
    setSpecificList(animalsByType);
    setIsSpecific(true);
  };

  const addAnimal = () => {
    console.log('Adding a new animal');
  };

  const removeAnimal = animal => {
    console.log('Removing animal', animal);
    // Removing animal from the total list of animals
    const newAnimalsList = removeAnimalByName(totalAnimalsList, animal.name);
    setTotalAnimalsList(newAnimalsList);
    // Recreating the global list
    setGlobalList(getAnimalsTypeList(totalAnimalsList));
    // Recreating the specific list
    const animalsByType = getAnimalsByType(totalAnimalsList, animal.type);
    setSpecificList(animalsByType);
  };

  const handleBack = () => {
    const globalAnimalsType = getAnimalsTypeList(totalAnimalsList);
    setGlobalList(globalAnimalsType);
    setIsSpecific(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.bar}>
        <TextField
          id="searchAnimalsType"
          placeholder="Search for Animals type"
          margin="normal"
          onChange={handleSearch}
        />
        <div className={classes.grow} />
        {isSpecific && (
          <Button className={classes.button} size="small" onClick={handleBack}>
            <NavigateBeforeIcon className={classes.leftIcon} />
            Back
          </Button>
        )}
      </div>
      <Grid container className={classes.gridRoot} spacing={3}>
        {!isSpecific &&
          globalList.map((animal, index) => (
            <Grid key={index} item xs={12} sm={6} lg={3} xl={2}>
              <AnimalGlobal
                isSpecific={isSpecific}
                animal={animal}
                onTypeClick={handleSelectedType}
                onAdd={addAnimal}
              />
            </Grid>
          ))}
        {isSpecific &&
          specificList.map((animal, index) => (
            <Grid key={index} item xs={12} sm={6} lg={3} xl={2}>
              <AnimalSpecific animal={animal} onRemove={removeAnimal} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default AnimalsList;
