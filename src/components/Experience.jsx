import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const MotionCard = motion(Card);

const experience = [
  {
    company: 'Tata Consultancy Services',
    role: 'Full-stack Developer',
    duration: '3.8 years',
    location: 'Noida, Uttar Pradesh',
    highlights: [
      '🚀 Built scalable, high-performance web applications',
      '⚡ Improved performance and optimized workflows',
      '✅ Delivered reliable end-to-end solutions in Agile environments',
      '💡 Mentored junior developers and led code reviews'
    ]
  }
];

export default function Experience() {
  return (
    <MotionCard 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      sx={{ 
        maxWidth: 700, 
        margin: '2rem auto', 
        boxShadow: '0 10px 40px rgba(240, 147, 251, 0.3)',
        borderRadius: 4,
        background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.9) 0%, rgba(13, 16, 37, 0.9) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(240, 147, 251, 0.2)',
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{ 
            fontWeight: 800,
            mb: 4,
            background: 'linear-gradient(45deg, #f093fb 30%, #667eea 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <WorkIcon sx={{ color: '#f093fb' }} /> Work Experience
        </Typography>
        
        {experience.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Box 
              sx={{ 
                p: 3, 
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%)',
                border: '1px solid rgba(240, 147, 251, 0.2)',
                mb: 3,
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#f093fb',
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {exp.role}
              </Typography>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#fff',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                @ {exp.company}
              </Typography>
              
              <Box display="flex" gap={1} mb={2} flexWrap="wrap">
                <Chip
                  icon={<CalendarMonthIcon />}
                  label={exp.duration}
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
                  label={exp.location}
                  size="small"
                  sx={{
                    background: 'rgba(102, 126, 234, 0.2)',
                    color: '#667eea',
                    border: '1px solid rgba(102, 126, 234, 0.3)',
                    fontWeight: 600,
                  }}
                />
              </Box>
              
              <Box>
                {exp.highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  >
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#b0b3b8',
                        mb: 1,
                        pl: 2,
                        borderLeft: '2px solid rgba(240, 147, 251, 0.4)',
                        py: 0.5,
                        '&:hover': {
                          color: '#fff',
                          borderLeftColor: '#f093fb',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {item}
                    </Typography>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        ))}
      </CardContent>
    </MotionCard>
  );
}
