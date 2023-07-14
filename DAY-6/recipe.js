import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Img from './rec.jpg';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

import './recipe.css';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Recipe() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div sx={{color:"blue"}} >
      <h1 sx={{color: "white"}}>Sample Templates</h1>
      <br></br>
       </div>
    <div sx={{ paddingTop: "40px"}}>
    <Card sx={{ maxWidth: 345}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            T
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="visuals of your future homes"
        subheader="67"
      />
      <CardMedia
        component="img"
        height="194"
        image={Img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Visualization plays a crucial role in home renovation as it allows homeowners, 
        designers, and contractors to have a clear understanding of the desired changes and outcomes before 
        the actual work begins. Here are some key benefits and use cases of visualization in home renovation:
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <a href="https://www.coohom.com/pub/tool/yundesign/cloud?designid=3FO3VOO0R4HO&redirecturl=/pub/saas/apps/project/list&redirectbim=false&locale=en_US" target='blank'><ShareIcon /> </a>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>USE:</Typography>
          <Typography paragraph>
          Design Concept Development: Visualization tools enable homeowners to explore
          and experiment with various design concepts, materials, colors, and layouts. They can 
          create virtual representations of their renovated space and make informed decisions about the
          design elements they prefer.
          Space Planning: Visualization helps in planning the optimal 
          use of available space. It allows homeowners to visualize different furniture arrangements, 
          storage solutions, and traffic flow patterns. This helps in determining the most functional and efficient 
          layout for the renovated space.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    <br></br>
    <ImageSlider slides={SliderData} />;
     </div>
  );
}