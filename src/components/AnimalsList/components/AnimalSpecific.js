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
import StarBorderIcon from '@material-ui/icons/StarBorder';
import EventIcon from '@material-ui/icons/Event';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 250
  }
});

const AnimalSpecific = props => {
  const { animal } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => props.onClick(animal.type)}>
        <CardMedia
          component="img"
          className={classes.media}
          image={animal.image}
          title={animal.type}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {animal.name}
          </Typography>
          <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
              <ListItemIcon>
                <PetsIcon />
              </ListItemIcon>
              <ListItemText primary={`Type: ${animal.type || ''}`} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary={`Age: ${animal.age || 1}`} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <StarBorderIcon />
              </ListItemIcon>
              <ListItemText primary={`Feature: ${animal.feature || ''}`} />
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
        <Button size="small" color="primary" onClick={() => props.onRemove(animal)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default AnimalSpecific;
