import React from 'react';
import { 
  Box, 
  CircularProgress, 
  Typography, 
  Container,
  useTheme 
} from '@mui/material';
import { motion } from 'framer-motion';

const LoadingScreen = ({ message = 'Loading...' }) => {
  const theme = useTheme();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          background: theme.palette.background.default,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CircularProgress
            size={60}
            thickness={4}
            sx={{ 
              color: theme.palette.primary.main,
              filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.2))',
              '& .MuiCircularProgress-circle': {
                strokeLinecap: 'round',
              }
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Typography
            variant="h6"
            sx={{
              mt: 3,
              mb: 1,
              fontWeight: 500,
              color: theme.palette.text.primary,
              position: 'relative',
              textAlign: 'center',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '2px',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '2px'
              }
            }}
          >
            {message}
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', mt: 3, gap: 1 }}>
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.primary.main,
                  filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))'
                }}
              />
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              maxWidth: '300px', 
              mx: 'auto',
              mt: 3,
              textAlign: 'center'
            }}
          >
            This might take a few seconds. Please wait while we prepare everything for you.
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
};

export default LoadingScreen;

