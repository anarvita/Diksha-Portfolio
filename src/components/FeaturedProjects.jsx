import { Card, CardContent, CardMedia, Typography, Grid, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SecurityIcon from '@mui/icons-material/Security';

const MotionCard = motion(Card);
const MotionGrid = motion(Grid);

const featured = [
  {
    title: 'Time-Series Data Visualization',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    desc: 'Interactive analytics platform with React, ECharts, and FastAPI.',
    icon: <TrendingUpIcon />,
    color: '#667eea',
    tag: 'Analytics',
  },
  {
    title: 'Car Rental Modernization',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
    desc: 'Legacy system transformed into a scalable React + TypeScript app.',
    icon: <DirectionsCarIcon />,
    color: '#f093fb',
    tag: 'Web App',
  },
  {
    title: 'Role-Based Security App',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    desc: 'Secure document management with Node.js, PostgreSQL, AWS.',
    icon: <SecurityIcon />,
    color: '#ffd700',
    tag: 'Enterprise',
  },
];

export default function FeaturedProjects() {
  return (
    <Box sx={{ mb: 6 }}>
      
      
      <Grid container spacing={3}>
        {featured.map((proj, index) => (
          <MotionGrid 
            item 
            xs={12} 
            md={4} 
            key={proj.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <MotionCard 
              whileHover={{ 
                y: -10,
                boxShadow: `0 20px 50px ${proj.color}50`,
              }}
              sx={{ 
                boxShadow: `0 10px 30px ${proj.color}30`,
                borderRadius: 4, 
                height: '100%',
                background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.9) 0%, rgba(13, 16, 37, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${proj.color}40`,
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.4s ease',
              }}
            >
              <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={proj.image}
                  alt={proj.title}
                  sx={{
                    transition: 'transform 0.4s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    }
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: `${proj.color}`,
                    color: '#000',
                    borderRadius: '50%',
                    width: 50,
                    height: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 15px ${proj.color}80`,
                  }}
                >
                  {proj.icon}
                </Box>
                <Chip
                  label={proj.tag}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    background: 'rgba(0,0,0,0.7)',
                    color: proj.color,
                    fontWeight: 700,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${proj.color}60`,
                  }}
                />
              </Box>
              
              <CardContent sx={{ p: 3 }}>
                <Typography 
                  variant="h6" 
                  fontWeight={700}
                  gutterBottom
                  sx={{ 
                    color: '#fff',
                    mb: 1,
                  }}
                >
                  {proj.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#b0b3b8',
                    lineHeight: 1.6,
                  }}
                >
                  {proj.desc}
                </Typography>
              </CardContent>
            </MotionCard>
          </MotionGrid>
        ))}
      </Grid>
    </Box>
  );
}
