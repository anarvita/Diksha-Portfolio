import { Box, Typography, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const MotionIconButton = motion(IconButton);

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4,
        px: 2,
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(13, 16, 37, 0.95) 0%, rgba(26, 31, 58, 0.95) 100%)',
        borderTop: '1px solid rgba(102, 126, 234, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(102, 126, 234, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}
    >
      <Stack spacing={2} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack direction="row" spacing={1}>
          <MotionIconButton
            component="a"
            href="https://linkedin.com"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            sx={{
              color: '#0077b5',
              background: 'rgba(0, 119, 181, 0.1)',
              '&:hover': {
                background: 'rgba(0, 119, 181, 0.2)',
              }
            }}
          >
            <LinkedInIcon />
          </MotionIconButton>
          
          <MotionIconButton
            component="a"
            href="https://github.com"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            sx={{
              color: '#fff',
              background: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.2)',
              }
            }}
          >
            <GitHubIcon />
          </MotionIconButton>
          
          <MotionIconButton
            component="a"
            href="mailto:diksha.sharma@example.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            sx={{
              color: '#f44336',
              background: 'rgba(244, 67, 54, 0.1)',
              '&:hover': {
                background: 'rgba(244, 67, 54, 0.2)',
              }
            }}
          >
            <EmailIcon />
          </MotionIconButton>
        </Stack>
        
        <Typography 
          variant="body2"
          sx={{
            color: '#b0b3b8',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontWeight: 500,
          }}
        >
          Made with <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <FavoriteIcon sx={{ color: '#f44336', fontSize: 18 }} />
          </motion.span> by Diksha Sharma
        </Typography>
        
        <Typography 
          variant="caption"
          sx={{
            color: '#667eea',
            fontWeight: 600,
          }}
        >
          © {new Date().getFullYear()} All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
}
