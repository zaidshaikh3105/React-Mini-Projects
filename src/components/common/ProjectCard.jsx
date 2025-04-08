import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  CardActions,
  Chip,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LaunchIcon from '@mui/icons-material/Launch';
import LazyImage from './LazyImage';

const ProjectCard = ({ project }) => {
  const { id, title, description, image, path, technologies, difficulty } = project;
  const navigate = useNavigate();
  const theme = useTheme();

  // Define difficulty color
  const difficultyColor = () => {
    switch (difficulty) {
      case 'Beginner': return theme.palette.success.main;
      case 'Intermediate': return theme.palette.warning.main;
      case 'Advanced': return theme.palette.error.main;
      default: return theme.palette.info.main;
    }
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Card 
      component={motion.div}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -8,
        boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'
      }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <LazyImage 
        src={image || `https://source.unsplash.com/random/300x200?${title.toLowerCase().replace(/\s/g, ',')}`}
        alt={title}
        height={180}
      />
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Chip 
            label={difficulty || 'Beginner'} 
            size="small" 
            sx={{ 
              backgroundColor: difficultyColor(),
              color: 'white',
            }} 
          />
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description || 'A React mini project showcasing various front-end development techniques and best practices.'}
        </Typography>
        
        {technologies && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
            {technologies.map((tech, index) => (
              <Chip 
                key={index} 
                label={tech} 
                size="small" 
                variant="outlined"
                sx={{ fontSize: '0.7rem' }} 
              />
            ))}
          </Box>
        )}
      </CardContent>
      
      <CardActions sx={{ justifyContent: 'flex-end', p: 2, pt: 0 }}>
        <Button 
          size="small" 
          variant="contained" 
          color="primary"
          endIcon={<LaunchIcon />}
          onClick={() => navigate(path)}
        >
          View Project
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;

