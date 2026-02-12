import { Card, CardContent, Typography, Box, Chip, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';

const MotionCard = motion(Card);
const MotionChip = motion(Chip);

const skillsData = [
  { name: 'React.js', level: 95, icon: <CodeIcon />, color: '#61dafb' },
  { name: 'TypeScript', level: 90, icon: <CodeIcon />, color: '#3178c6' },
  { name: 'Material UI', level: 92, icon: <WebIcon />, color: '#007fff' },
  { name: 'Redux', level: 88, icon: <BuildIcon />, color: '#764abc' },
  { name: 'Node.js', level: 85, icon: <StorageIcon />, color: '#339933' },
  { name: 'FastAPI', level: 82, icon: <StorageIcon />, color: '#009688' },
  { name: 'PostgreSQL', level: 80, icon: <StorageIcon />, color: '#336791' },
  { name: 'Next.js', level: 87, icon: <WebIcon />, color: '#000000' },
];

const additionalSkills = [
  'Responsive Design', 'Formik', 'Yup', 'Sequelize', 'AWS', 'CI/CD', 
  'Jest', 'Git', 'REST APIs', 'GraphQL'
];

export default function Skills() {
  return (
    <MotionCard 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{ 
        maxWidth: 700, 
        margin: '2rem auto', 
        boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)',
        borderRadius: 4,
        background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.9) 0%, rgba(13, 16, 37, 0.9) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(102, 126, 234, 0.2)',
      }}>
      <CardContent sx={{ p: 4 }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            fontWeight: 800,
            mb: 4,
            background: 'linear-gradient(45deg, #667eea 30%, #f093fb 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
          }}
        >
          🛠️ Technical Skills
        </Typography>
        
        <Box mb={4}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#ffd700',
              fontWeight: 700,
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <BuildIcon /> Core Competencies
          </Typography>
          
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Box mb={3}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box sx={{ color: skill.color, display: 'flex', alignItems: 'center' }}>
                      {skill.icon}
                    </Box>
                    <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
                      {skill.name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#b0b3b8', fontWeight: 700 }}>
                    {skill.level}%
                  </Typography>
                </Box>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                >
                  <LinearProgress 
                    variant="determinate" 
                    value={skill.level}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 5,
                        background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}dd 100%)`,
                        boxShadow: `0 0 10px ${skill.color}88`,
                      }
                    }}
                  />
                </motion.div>
              </Box>
            </motion.div>
          ))}
        </Box>
        
        <Box>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#f093fb',
              fontWeight: 700,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <CodeIcon /> Additional Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {additionalSkills.map((skill, index) => (
              <MotionChip
                key={skill}
                label={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.15,
                  boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: '1px solid rgba(102, 126, 234, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: '1px solid rgba(255, 215, 0, 0.6)',
                  }
                }}
              />
            ))}
          </Box>
        </Box>
      </CardContent>
    </MotionCard>
  );
}
