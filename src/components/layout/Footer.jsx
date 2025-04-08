import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Link, 
  Divider, 
  Grid, 
  IconButton,
  useTheme,
  Tooltip
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <GitHubIcon />, 
      url: 'https://github.com/your-username/react-mini-projects',
      label: 'GitHub Repository'
    },
    { 
      icon: <LinkedInIcon />, 
      url: 'https://linkedin.com',
      label: 'LinkedIn Profile'
    },
    { 
      icon: <TwitterIcon />, 
      url: 'https://twitter.com',
      label: 'Twitter Profile'
    }
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/' },
    { name: 'Contact', path: '/contact' }
  ];

  const iconAnimation = {
    hover: { 
      scale: 1.2,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <Tooltip key={index} title={social.label}>
                  <motion.span
                    variants={iconAnimation}
                    whileHover="hover"
                    whileTap="tap"
                    style={{ display: 'inline-block' }}
                  >
                    <IconButton
                      component="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      sx={{ 
                        color: 'text.secondary',
                        '&:hover': {
                          color: theme.palette.primary.main,
                        }
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.span>
                </Tooltip>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={link.path}
                  underline="hover"
                  color="text.secondary"
                  sx={{ 
                    mb: 1,
                    '&:hover': {
                      color: theme.palette.primary.main
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Made with
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                <FavoriteIcon fontSize="small" color="error" sx={{ mr: 0.5 }} />
                and React, Material-UI, Redux Toolkit, and other modern web technologies.
              </Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              © {currentYear} React Mini Projects. All rights reserved.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />
        
        <Typography 
          variant="caption" 
          color="text.secondary" 
          align="center" 
          sx={{ display: 'block' }}
        >
          This project is for educational purposes only. Not intended for commercial use.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

