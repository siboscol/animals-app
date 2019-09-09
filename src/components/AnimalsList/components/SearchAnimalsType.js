import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { fetchSpecies, fetchCollection } from '../../../helpers/utils';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  fab: {
    margin: theme.spacing(1)
  }
}));

const SearchAnimalsType = props => {
  const { onAddCollection } = props;
  const classes = useStyles();
  const [type, setType] = React.useState('');
  // State to handle search species
  const [species, setSpecies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchSpeciesList = async () => {
      const data = await fetchSpecies();
      setSpecies(data.results);
    };
    fetchSpeciesList();
  }, []);

  useEffect(() => {
    const fetchTypeCollection = async () => {
      const data = await fetchCollection(search);
      if (data && data.results) {
          const collection = data.results.map(animal => ({
                name: animal.canonicalName,
                type: animal.kingdom,
                age: animal.phylumKey,
                diet: animal.vernacularName,
                cry: animal.phylum,
                feature: animal.scientificName,
                image: '/images/Types/GenericType.jpg',
                isGeneric: true
          }));
          onAddCollection(collection);
      }
    };
    fetchTypeCollection();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="select-species">Select Species</InputLabel>
        <Select
          value={type}
          onChange={e => setType(e.target.value)}
          inputProps={{
            name: 'key',
            id: 'select-species'
          }}
          autoWidth
        >
          {species.map((type, index) => (
            <MenuItem key={index} value={type.key}>
              {type.canonicalName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Fab className={classes.fab} onClick={() => setSearch(type)}>
        <AddIcon />
      </Fab>
    </form>
  );
};

export default SearchAnimalsType;
