import React, { Component } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  Paper 
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RefreshIcon from '@mui/icons-material/Refresh';
import HomeIcon from '@mui/icons-material/Home';
import { motion } from 'framer-motion';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
    // Log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  handleRetry = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleGoBack = () => {
    window.history.back();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="md">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '80vh',
              textAlign: 'center',
              py: 4
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                width: '100%',
                maxWidth: 600,
                borderRadius: 2,
                bgcolor: 'background.paper'
              }}
            >
              <ErrorOutlineIcon 
                sx={{ 
                  fontSize: '4rem',
                  color: 'error.main',
                  mb: 2
                }}
              />
              
              <Typography 
                variant="h4" 
                component="h1"
                sx={{ 
                  mb: 2,
                  fontWeight: 'bold'
                }}
              >
                Oops! Something went wrong
              </Typography>

              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ mb: 4, maxWidth: '500px', mx: 'auto' }}
              >
                We're sorry, but there was an error while trying to display this content. 
                You can try refreshing the page or returning to the home page.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
                <Button
                  variant="contained"
                  startIcon={<RefreshIcon />}
                  onClick={this.handleRetry}
                  sx={{ minWidth: 150 }}
                >
                  Try Again
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<HomeIcon />}
                  onClick={this.handleGoHome}
                  sx={{ minWidth: 150 }}
                >
                  Go Home
                </Button>
              </Box>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <Box
                  sx={{
                    mt: 4,
                    p: 3,
                    backgroundColor: 'grey.50',
                    borderRadius: 2,
                    textAlign: 'left'
                  }}
                >
                  <Typography 
                    variant="h6" 
                    component="h2"
                    sx={{ mb: 2, color: 'text.primary' }}
                  >
                    Error Details
                  </Typography>
                  <Box
                    component="pre"
                    sx={{
                      p: 2,
                      backgroundColor: 'grey.100',
                      borderRadius: 1,
                      overflow: 'auto',
                      fontSize: '0.875rem',
                      lineHeight: 1.5
                    }}
                  >
                    <Typography component="code" sx={{ color: 'error.main', display: 'block' }}>
                      {this.state.error.toString()}
                    </Typography>
                    {this.state.errorInfo && (
                      <Typography component="code" sx={{ color: 'text.secondary', display: 'block', mt: 1 }}>
                        {this.state.errorInfo.componentStack}
                      </Typography>
                    )}
                  </Box>
                </Box>
              )}
            </Paper>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

