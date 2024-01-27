import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Courses.css';

import mlImage from"../../resources/ml1.jpg"; // Import the image file for machine learning card
import aiImage from '../../resources/web3.jpg'; // Import the image file for artificial intelligence card
import csImage from '../../resources/sql1.jpg'; // Import the image file for artificial intelligence card
import ccImage from '../../resources/soft2.jpg';
import bdImage from '../../resources/sec3.jpg';
import zdImage from '../../resources/prog2.jpg';
import vdImage from '../../resources/pega1.jpg';
import mdImage from '../../resources/micro1.png';



export default function MediaCard() {
  return (
     <div className='cou'>
         
         <marquee  behavior="alternate" direction="right">         
          
    <h1>COURSES AVAILABLE</h1>
    </marquee> 

    <div className="media-container">
      <div className="card-wrapper">
      <Card className="card-item">
        <CardMedia
          sx={{ height: 140 }}
          image={mlImage}
          title="machine learning"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            machine learning
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Machine learning is an area of artificial intelligence and computer science that comprises supervised and unsupervised learning and includes the development 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">LEARN MORE</Button>
          <Link to="/courseRegistration">
          <Button size="small">REGISTER NOW</Button>
          </Link>
        </CardActions>
      </Card>
</div>
<div className="card-wrapper">
      <Card className="card-item">
        <CardMedia
          sx={{ height: 140 }}
          image={aiImage}
          title="artificial intelligence"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Web Technology
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Web Technology is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">LEARN MORE</Button>
          <Link to="/courseRegistration">
          <Button size="small">REGISTER NOW</Button>
          </Link>
        </CardActions>
      </Card>
</div>

<div className="card-wrapper">
      <Card className="card-item">
        <CardMedia
          sx={{ height: 140 }}
          image={csImage}
          title="cybersecurity"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            SQL
          </Typography>
          <Typography variant="body2" color="text.secondary">
          SQL is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">LEARN MORE</Button>
          <Link to="/courseRegistration">
          <Button size="small">REGISTER NOW</Button>
          </Link>
        </CardActions>
      </Card>
</div>
<div className="card-wrapper">
      <Card className="card-item">
        <CardMedia
          sx={{ height: 140 }}
          image={ccImage}
          title="cloud computing"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Software Testing
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Software Testing enables customers to use infrastructure and applications via the internet, without installing and maintaining them on-premises.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">LEARN MORE</Button>
          <Link to="/courseRegistration">
          <Button size="small">REGISTER NOW</Button>
          </Link>
        </CardActions>
      </Card>
</div>
<div className="card-wrapper">
      <Card className="card-item">
        <CardMedia
          sx={{ height: 140 }}
          image={bdImage}
          title="artificial intelligence"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Cybersecurity
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Cybersecurity primarily refers to data sets that are too large or complex to be dealt with by traditional data-processing application software. 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">LEARN MORE</Button>
          <Link to="/courseRegistration">
          <Button size="small">REGISTER NOW</Button>
          </Link>
        </CardActions>
      </Card>
</div>

<div className="card-wrapper">
      <Card className="card-item">
        <CardMedia
          sx={{ height: 140 }}
          image={zdImage}
          title="artificial intelligence"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Programming Language
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Programming Language primarily refers to data sets that are too large or complex to be dealt with by traditional data-processing application software. 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">LEARN MORE</Button>
          <Link to="/courseRegistration">
          <Button size="small">REGISTER NOW</Button>
          </Link>
        </CardActions>
      </Card>
</div>

<div className="card-wrapper">
      <Card className="card-item">
        <CardMedia
          sx={{ height: 140 }}
          image={vdImage}
          title="artificial intelligence"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Pega
          </Typography>
          <Typography variant="body2" color="text.secondary">
          pega primarily refers to data sets that are too large or complex to be dealt with by traditional data-processing application software. 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">LEARN MORE</Button>
          <Link to="/courseRegistration">
          <Button size="small">REGISTER NOW</Button>
          </Link>
        </CardActions>
      </Card>
</div>

<div className="card-wrapper">
      <Card className="card-item">
        <CardMedia
          sx={{ height: 140 }}
          image={mdImage}
          title="artificial intelligence"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Big Data
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Big data primarily refers to data sets that are too large or complex to be dealt with by traditional data-processing application software. 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">LEARN MORE</Button>
          <Link to="/courseRegistration">
          <Button size="small">REGISTER NOW</Button>
          </Link>
        </CardActions>
      </Card>
</div>

<br></br>

      
</div>


</div>

);
}
