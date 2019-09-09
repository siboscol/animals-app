import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PetsIcon from '@material-ui/icons/Pets';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
});

const AnimalGlobal = props => {
  const { animal } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => props.onTypeClick(animal.type)}>
        <CardMedia
          component="img"
          className={classes.media}
          image={animal.image}
          title={animal.type}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {animal.type}
          </Typography>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <LocalDiningIcon />
              </ListItemIcon>
              <ListItemText primary={`Diet: ${animal.diet || ''}`} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PetsIcon />
              </ListItemIcon>
              <ListItemText primary={`N. individual: ${animal.individuals}`}>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Tooltip title={animal.cry || ''} placement="right">
                  <AudiotrackIcon />
                </Tooltip>
              </ListItemIcon>
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => props.onAdd(animal)}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default AnimalGlobal;
