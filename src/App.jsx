


import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './components/Message';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';

import { ThemeProvider, CssBaseline, Container, createTheme, Box } from '@mui/material';
import baseTheme from './components/Theme';
import AnimatedSection from './components/AnimatedSection';
import { useState, useMemo } from 'react';



function App() {
  const [mode, setMode] = useState('dark');
  const theme = useMemo(() => createTheme({
    ...baseTheme,
    palette: {
      ...baseTheme.palette,
      mode,
      background: {
        default: mode === 'dark' ? '#0a0e27' : '#f4f6fa',
        paper: mode === 'dark' ? '#1a1f3a' : '#fff',
      },
      text: {
        primary: mode === 'dark' ? '#fff' : '#181a1b',
        secondary: mode === 'dark' ? '#b0b3b8' : '#555',
      },
    },
  }), [mode]);

  const toggleMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header mode={mode} toggleMode={toggleMode} />
      <Box sx={{ display: 'flex', paddingTop: '64px', minHeight: '100vh' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flex: 1,
            marginLeft: { xs: 0, sm: '240px' },
            minHeight: '100vh',
            background: mode === 'dark'
              ? 'linear-gradient(180deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)'
              : 'linear-gradient(180deg, #f0f4ff 0%, #fef8ff 50%, #f0f4ff 100%)',
            position: 'relative',
            overflow: 'auto',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: mode === 'dark'
                ? 'radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(118, 75, 162, 0.1) 0%, transparent 50%)'
                : 'radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(240, 147, 251, 0.05) 0%, transparent 50%)',
              pointerEvents: 'none',
            }
          }}
        >
          <Container maxWidth="md" sx={{ py: 4, position: 'relative', zIndex: 1 }}>

            <Box id="about"><AnimatedSection><About /></AnimatedSection></Box>
            <Box id="skills"><AnimatedSection><Skills /></AnimatedSection></Box>
            <Box id="projects"><AnimatedSection><Projects /></AnimatedSection></Box>
            <Box id="experience"><AnimatedSection><Experience /></AnimatedSection></Box>
            <Box id="education"><AnimatedSection><Education /></AnimatedSection></Box>
            <Box id="contact"><AnimatedSection><Contact /></AnimatedSection></Box>
            <Box id="message"><AnimatedSection><Message /></AnimatedSection></Box>
          </Container>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
