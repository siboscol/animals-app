import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const resetNewAnimal = {
    name: '',
    type: '',
    age: 1,
    diet: '',
    cry: '',
    feature: '',
    image: ''
}

const AddAnimalDialog = props => {
  const { open, animalType, onClose, onAddAnimal } = props;
  const [newAnimal, setNewAnimal] = useState(resetNewAnimal);

  const handleClose = () => {
    onClose(false);
    setNewAnimal(resetNewAnimal);
  };

  const handleAddAnimal = () => {
    onAddAnimal(newAnimal);
    setNewAnimal(resetNewAnimal)
  };

  const handleChange = name => event => {
    const tempAnimal = {
      name: newAnimal.name,
      type: animalType.type,
      age: newAnimal.age,
      diet: animalType.diet,
      cry: animalType.cry,
      feature: newAnimal.feature,
      image: animalType.image
    };
    setNewAnimal({ ...tempAnimal, [name]: event.target.value });
  };

  let titleTypeAnimal = 'animal';
  if (animalType && animalType.type) {
    const type = animalType.type;
    if (type === 'Fishes') {
      titleTypeAnimal = animalType.type.slice(0, -2);
    } else {
      titleTypeAnimal = animalType.type.slice(0, -1);
    }
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{`Add new ${titleTypeAnimal}`}</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-name"
            label="Name"
            value={newAnimal.name}
            onChange={handleChange('name')}
            margin="dense"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-age"
            label="Age"
            value={newAnimal.age}
            type="number"
            onChange={handleChange('age')}
            margin="dense"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-feature"
            label="Feature"
            value={newAnimal.feature}
            onChange={handleChange('feature')}
            margin="dense"
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddAnimal} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddAnimalDialog;
