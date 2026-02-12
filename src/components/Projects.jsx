import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';

const MotionCard = motion(Card);

const projects = [
  {
    title: 'Time-Series Data Visualization Platform',
    icon: <TrendingUpIcon />,
    color: '#667eea',
    tags: ['React', 'FastAPI', 'ECharts', 'CI/CD'],
    highlights: [
      '📈 35% faster data exploration',
      '⚡ 40% reduction in analysis time',
      '🚀 30-50% faster API responses',
      '⏱️ Deployment time: hours → 10 minutes',
      '🎨 25% improved UI consistency'
    ]
  },
  {
    title: 'Car Rental Application Modernization',
    icon: <SpeedIcon />,
    color: '#f093fb',
    tags: ['React', 'TypeScript', 'Material UI', 'Jest'],
    highlights: [
      '🚗 45% faster page load speed',
      '✅ 60% reduction in form errors',
      '🧪 85% code coverage',
      '🐛 30% fewer production defects',
      '💰 20% better transaction success'
    ]
  },
  {
    title: 'Role-Based Security Application',
    icon: <SecurityIcon />,
    color: '#ffd700',
    tags: ['Node.js', 'PostgreSQL', 'AWS Lambda', 'RBAC'],
    highlights: [
      '🔐 40% better compliance efficiency',
      '⚡ 35% faster data retrieval',
      '☁️ 25% reduced infrastructure costs',
      '📊 30% improved task completion',
      '🛡️ Enhanced security & audit trails'
    ]
  }
];

export default function Projects() {
  return (
    <Box sx={{ maxWidth: 900, margin: '2rem auto' }}>
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
        🚀 Featured Projects
      </Typography>
      
      {projects.map((project, idx) => (
        <MotionCard
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.2, duration: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: `0 20px 60px ${project.color}40`,
          }}
          sx={{ 
            mb: 3,
            boxShadow: `0 10px 30px ${project.color}30`,
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.9) 0%, rgba(13, 16, 37, 0.9) 100%)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${project.color}40`,
            overflow: 'hidden',
            position: 'relative',
            transition: 'all 0.3s ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: `linear-gradient(90deg, ${project.color} 0%, ${project.color}88 100%)`,
            }
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <Box 
                sx={{ 
                  color: project.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: `${project.color}20`,
                  boxShadow: `0 5px 15px ${project.color}30`,
                }}
              >
                {project.icon}
              </Box>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#fff',
                  fontWeight: 700,
                  flex: 1,
                }}
              >
                {project.title}
              </Typography>
            </Box>
            
            <Box mb={2} display="flex" flexWrap="wrap" gap={1}>
              {project.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  icon={<CodeIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    background: `${project.color}20`,
                    color: project.color,
                    border: `1px solid ${project.color}40`,
                    fontWeight: 600,
                    '&:hover': {
                      background: `${project.color}30`,
                    }
                  }}
                />
              ))}
            </Box>
            
            <Box>
              {project.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 + i * 0.1, duration: 0.4 }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#b0b3b8',
                      mb: 1,
                      pl: 2,
                      borderLeft: `2px solid ${project.color}40`,
                      py: 0.5,
                      '&:hover': {
                        color: '#fff',
                        borderLeftColor: project.color,
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {highlight}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </CardContent>
        </MotionCard>
      ))}
    </Box>
  );
}
