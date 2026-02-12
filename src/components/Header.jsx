import { AppBar, Toolbar, Typography, IconButton, useTheme, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { motion } from 'framer-motion';

const MotionIconButton = motion(IconButton);

export default function Header({ mode, toggleMode }) {
  const theme = useTheme();
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: theme.zIndex.drawer + 1, 
        background: mode === 'dark'
          ? 'linear-gradient(135deg, #1a1f3a 0%, #2d3561 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
      }} 
      elevation={0}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 800,
                background: 'linear-gradient(45deg, #ffd700 30%, #fff 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.5px',
                textShadow: '0 2px 10px rgba(255,215,0,0.3)',
              }}
            >
              💼 Diksha Sharma
            </Typography>
          </motion.div>
        </Box>
        
        <MotionIconButton 
          color="inherit" 
          onClick={toggleMode}
          whileHover={{ scale: 1.2, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          sx={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              background: 'rgba(255,215,0,0.3)',
            }
          }}
        >
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </MotionIconButton>
      </Toolbar>
    </AppBar>
  );
}
