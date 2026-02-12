import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const MotionCard = motion(Card);

export default function Education() {
  return (
    <MotionCard 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      sx={{ 
        maxWidth: 700, 
        margin: '2rem auto', 
        boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)',
        borderRadius: 4,
        background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.9) 0%, rgba(13, 16, 37, 0.9) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(102, 126, 234, 0.2)',
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{ 
            fontWeight: 800,
            mb: 4,
            background: 'linear-gradient(45deg, #667eea 30%, #ffd700 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <SchoolIcon sx={{ color: '#667eea' }} /> Education
        </Typography>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Box 
            sx={{ 
              p: 3, 
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(255, 215, 0, 0.1) 100%)',
              border: '1px solid rgba(102, 126, 234, 0.2)',
            }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#667eea',
                fontWeight: 700,
                mb: 1,
              }}
            >
              🎓 Bachelor of Technology (B.Tech)
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#fff',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Computer Science and Engineering
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#b0b3b8',
                fontWeight: 500,
                mb: 2,
              }}
            >
              Madan Mohan Malaviya University of Technology, Gorakhpur
            </Typography>
            
            <Box display="flex" gap={1} flexWrap="wrap">
              <Chip
                icon={<CalendarMonthIcon />}
                label="2018 - 2021"
                size="small"
                sx={{
                  background: 'rgba(255, 215, 0, 0.2)',
                  color: '#ffd700',
                  border: '1px solid rgba(255, 215, 0, 0.3)',
                  fontWeight: 600,
                }}
              />
              <Chip
                icon={<LocationOnIcon />}
                label="Gorakhpur, Uttar Pradesh"
                size="small"
                sx={{
                  background: 'rgba(102, 126, 234, 0.2)',
                  color: '#667eea',
                  border: '1px solid rgba(102, 126, 234, 0.3)',
                  fontWeight: 600,
                }}
              />
            </Box>
          </Box>
        </motion.div>
      </CardContent>
    </MotionCard>
  );
}
