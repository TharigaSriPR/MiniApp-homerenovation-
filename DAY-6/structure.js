import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Structure() {
  return (
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i0.wp.com/theconstructor.org/wp-content/uploads/2014/11/matfoundation.jpg?fit=493%2C370&ssl=1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Foundation
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The foundation evenly distributes the weight of 
        the building and its contents to the soil or rock underneath. 
        This prevents excessive settlement and ensures stability.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <br>
    </br>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://api.gharpedia.com/wp-content/uploads/2019/02/Braced-Framed-Structure-03-0202030035-e1551171769374.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Frame
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A frame home, also known as a timber frame home or a post-and-beam home, refers to a type of
         construction where the primary structural support is provided by a framework of large
          wooden beams (posts) and horizontal beams (beams).
         This construction method has been used for centuries and 
         is known for its durability, strength, and aesthetic appea
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <br>
    </br>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://wcroofingportland.com/learning-center/assets/images/most-affordable-roof-types-1920x1080.webp"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Roof
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The roof of a house is the uppermost covering or structure 
        that provides protection from weather elements such as rain, snow, sunlight, and wind. 
        It plays a crucial role in keeping the interior of the house dry, maintaining structural integrity, 
        and regulating temperature.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}