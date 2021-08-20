import React from 'react';
import store from '../../store';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// contains code to render card
const like = (sutraid) => {
    store.dispatch({type: 'todos/liked',payload: sutraid});
    console.log(store.getState());
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(data=[]) {
  let id= data.mandal+data.sungfor+data.sukta
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [liked,setliked] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const update = (id) => {
	  setliked(!liked);
    // console.log(id);
	  like(id);
  };
  const title = "Mandal : " + data.mandal
  const subtitle = "Sung by " + data.sungby
  const iconletter = data.sungforcategory.split(' ').pop().charAt(0).toUpperCase();
  let img;
  if(iconletter === 'M'){
	  img = "https://static.india.com/wp-content/uploads/2016/03/144-414x246.jpg";
  }
  else{
	  img = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202102/goddess-saraswati-wallpaper-fr_1200x768.jpeg?xDt39HypHi3m3131Pcr_YDJ2TWy1gZ3d&size=1200:675"; 
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {iconletter}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia
        className={classes.media}
		image={img}
		height="200"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This extract is sungby by {data.sungby} for category {data.sungforcategory}. The meter for the extract is {data.meter} and it is dedicated {data.sungfor}.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => update(id)} color={store.getState().fav.has(id) ? "primary" : "default"}>
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Summary:</Typography>
          <Typography paragraph>
            The sukta number is {data.sukta} for this verse. It is sung by category {data.sungbycategory} and sung for the category {data.sungforcategory}.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
