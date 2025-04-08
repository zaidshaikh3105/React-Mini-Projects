import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  useTheme 
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotFound = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Container maxWidth="md">
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="initial"
        animate="animate"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          textAlign: 'center',
          py: 8
        }}
      >
        <motion.div variants={itemVariants}>
          <ErrorOutlineIcon 
            sx={{ 
              fontSize: '6rem',
              color: theme.palette.error.main,
              mb: 2
            }} 
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography 
            variant="h1" 
            component="h1"
            sx={{ 
              fontSize: { xs: '4rem', md: '6rem' },
              fontWeight: 'bold',
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.error.main})`,
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            404
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography 
            variant="h4" 
            component="h2"
            sx={{ 
              mb: 2,
              fontWeight: 'medium',
              color: theme.palette.text.primary
            }}
          >
            Page Not Found
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ 
              mb: 4,
              maxWidth: '600px'
            }}
          >
            The page you're looking for doesn't exist or has been moved. 
            Please check the URL or navigate back to the home page.
          </Typography>
        </motion.div>

        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{ 
            display: 'flex', 
            gap: 2,
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <Button
            component={Link}
            to="/"
            variant="contained"
            startIcon={<HomeIcon />}
            sx={{ 
              minWidth: 200,
              py: 1.5
            }}
          >
            Go to Home
          </Button>
          <Button
            onClick={() => navigate(-1)}
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            sx={{ 
              minWidth: 200,
              py: 1.5
            }}
          >
            Go Back
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;

