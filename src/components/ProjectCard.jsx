import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  IconButton,
  Button,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProjectCard = ({ project }) => {
  const theme = useTheme();
  const { title, description, image, path, technologies, demoUrl, githubUrl } = project;

  return (
    <motion.div
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: theme.shadows[2],
          borderRadius: 2,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: theme.shadows[6],
          }
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={image || 'https://via.placeholder.com/400x200'}
          alt={title}
          sx={{
            borderBottom: `4px solid ${theme.palette.primary.main}`,
            objectFit: 'cover'
          }}
        />
        
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="h2"
            sx={{ 
              fontWeight: 600,
              mb: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {title}
          </Typography>
          
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              mb: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              height: '3em',
            }}
          >
            {description}
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 0.5,
              mb: 2
            }}
          >
            {technologies?.slice(0, 3).map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: theme.palette.primary.main + '15',
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                  fontSize: '0.7rem'
                }}
              />
            ))}
            {technologies?.length > 3 && (
              <Chip
                label={`+${technologies.length - 3}`}
                size="small"
                sx={{ 
                  fontSize: '0.7rem',
                  bgcolor: 'rgba(0, 0, 0, 0.04)',
                }}
              />
            )}
          </Box>

          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 'auto',
              pt: 2,
              borderTop: `1px solid ${theme.palette.divider}`
            }}
          >
            <Box>
              {demoUrl && (
                <IconButton
                  component="a"
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  color="primary"
                  sx={{ mr: 1 }}
                >
                  <LaunchIcon fontSize="small" />
                </IconButton>
              )}
              {githubUrl && (
                <IconButton
                  component="a"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  color="inherit"
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
              )}
            </Box>
            
            <Button
              component={Link}
              to={path}
              endIcon={<ArrowForwardIcon />}
              variant="outlined"
              size="small"
              sx={{ 
                borderRadius: 4,
                px: 2,
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: theme.palette.primary.main,
                  color: 'white',
                  transform: 'translateX(5px)',
                }
              }}
            >
              View Project
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

