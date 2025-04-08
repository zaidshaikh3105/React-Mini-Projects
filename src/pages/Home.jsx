import React from 'react';
import { 
  Typography, 
  Grid, 
  Box, 
  Container, 
  Paper,
  useTheme,
  Button 
} from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import BrushIcon from '@mui/icons-material/Brush';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const features = [
  {
    icon: <CodeIcon fontSize="large" />,
    title: "Modern React",
    description: "Projects use the latest React features and best practices including Hooks, Context API, and functional components."
  },
  {
    icon: <DevicesIcon fontSize="large" />,
    title: "Responsive Design",
    description: "All projects are fully responsive and work seamlessly across desktop, tablet, and mobile devices."
  },
  {
    icon: <BrushIcon fontSize="large" />,
    title: "Material Design",
    description: "Built with Material-UI components for a consistent, professional, and accessible user interface."
  }
];

const Home = () => {
  const theme = useTheme();

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(45deg, #3f51b5 30%, #f50057 90%)',
          py: { xs: 6, md: 10 },
          borderRadius: 2,
          mb: 6,
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ 
              position: 'relative', 
              zIndex: 2,
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            <Typography 
              variant="h2" 
              component="h1"
              sx={{ 
                fontWeight: 'bold',
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              React Mini Projects
            </Typography>
            <Typography 
              variant="h5"
              sx={{ 
                mb: 4, 
                maxWidth: { md: '70%' },
                mx: { xs: 'auto', md: 0 }
              }}
            >
              A collection of practical React components and applications to demonstrate modern web development techniques.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{ px: 4, py: 1.5 }}
            >
              Explore Projects
            </Button>
          </Box>
        </Container>
        
        {/* Decorative elements */}
        <Box 
          component={motion.div}
          animate={{ 
            rotate: 360,
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          sx={{ 
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '300px',
            height: '300px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            display: { xs: 'none', md: 'block' }
          }} 
        />
        <Box 
          component={motion.div}
          animate={{ 
            rotate: -360,
            transition: { duration: 15, repeat: Infinity, ease: "linear" }
          }}
          sx={{ 
            position: 'absolute',
            bottom: '-20%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%'
          }} 
        />
      </Box>

      {/* Projects Grid */}
      <Container maxWidth="lg">
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              mb: 4, 
              fontWeight: 'bold',
              textAlign: 'center',
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                width: '80px',
                height: '4px',
                backgroundColor: theme.palette.primary.main,
                transform: 'translateX(-50%)'
              }
            }}
          >
            Browse Projects
          </Typography>
          
          <Grid 
            container 
            spacing={4} 
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <Grid 
                item 
                key={project.id} 
                xs={12} 
                sm={6} 
                md={4} 
                component={motion.div}
                variants={itemVariants}
              >
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Features Section */}
        <Box sx={{ my: 8 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              mb: 6, 
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            Key Features
          </Typography>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper 
                  component={motion.div}
                  whileHover={{ y: -8 }}
                  elevation={2}
                  sx={{ 
                    p: 3, 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  <Box 
                    sx={{ 
                      color: theme.palette.primary.main,
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;

