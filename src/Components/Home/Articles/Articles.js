import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', 
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
    }
}));

const Articles = ({car}) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="col d-flex justify-content-center">
            <Card className={classes.root} style={{marginBottom: '20px'}}>
      <CardHeader
        title="Best Quality Car Service"
        subheader="April 18, 2021"
      />
      <CardMedia
        className={classes.media}
        image={car.img}
        title="Car Service"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This is a great place to checkup your car and get it right.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
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
         
         
          <Typography paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus maiores illo id voluptate obcaecati, a maxime itaque temporibus eaque explicabo ullam necessitatibus iste velit voluptatibus perferendis. Doloribus nulla hic vero!
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
            
        </div>
    );
};

export default Articles;