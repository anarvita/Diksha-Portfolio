import { Card, CardContent, Typography, Avatar, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const stats = [
  { icon: <CodeIcon />, value: '3.8+', label: 'Years Experience', color: '#667eea' },
  { icon: <RocketLaunchIcon />, value: '15+', label: 'Projects Delivered', color: '#f093fb' },
  { icon: <EmojiEventsIcon />, value: '100%', label: 'Client Satisfaction', color: '#ffd700' },
];

export default function About() {
  return (
    <MotionCard 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{ 
        maxWidth: 700, 
        margin: '2rem auto', 
        boxShadow: '0 15px 50px rgba(102, 126, 234, 0.4)',
        borderRadius: 4,
        background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.95) 0%, rgba(13, 16, 37, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(102, 126, 234, 0.3)',
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(102, 126, 234, 0.15) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}
    >
      <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
        <Box display="flex" alignItems="center" flexDirection="column" mb={4}>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <Avatar 
              sx={{ 
                width: 120, 
                height: 120, 
                mb: 3,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                fontSize: 48,
                fontWeight: 900,
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.5)',
                border: '4px solid rgba(255,255,255,0.2)',
              }}
            >
              DS
            </Avatar>
          </motion.div>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Typography 
              variant="h4" 
              component="div" 
              gutterBottom
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(45deg, #667eea 30%, #f093fb 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center',
              }}
            >
              Diksha Sharma
            </Typography>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Typography 
              sx={{
                color: '#ffd700',
                fontWeight: 700,
                fontSize: '1.2rem',
                mb: 3,
              }}
            >
              💻 Full Stack Developer
            </Typography>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Typography 
              variant="body1" 
              align="center"
              sx={{
                color: '#b0b3b8',
                lineHeight: 1.8,
                fontSize: '1.05rem',
                maxWidth: 600,
              }}
            >
              Full-stack developer with <strong style={{ color: '#ffd700' }}>3.8 years</strong> of experience building scalable, high-performance web applications. 
              Skilled in creating modern, responsive UI with <strong style={{ color: '#61dafb' }}>React</strong>, <strong style={{ color: '#61dafb' }}>Next.js</strong>, 
              and <strong style={{ color: '#3178c6' }}>TypeScript</strong>, and developing robust backend services using <strong style={{ color: '#339933' }}>Node.js</strong>, 
              Express, and <strong style={{ color: '#009688' }}>FastAPI</strong>. Proficient in PostgreSQL and Sequelize with hands-on experience in data visualization, 
              CI/CD pipelines, AWS deployment, and automated testing.
            </Typography>
          </MotionBox>
        </Box>
        
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={4} key={stat.label}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                sx={{
                  textAlign: 'center',
                  p: 2,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${stat.color}20 0%, ${stat.color}10 100%)`,
                  border: `1px solid ${stat.color}40`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: `0 10px 30px ${stat.color}40`,
                  }
                }}
              >
                <Box sx={{ color: stat.color, mb: 1, display: 'flex', justifyContent: 'center' }}>
                  {stat.icon}
                </Box>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 900,
                    color: stat.color,
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#b0b3b8',
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </MotionCard>
  );
}
