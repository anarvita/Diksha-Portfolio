import { Drawer, List, ListItem, ListItemButton, ListItemText, Avatar, Typography, Box } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BuildIcon from '@mui/icons-material/Build';

const MotionBox = motion(Box);
const MotionAvatar = motion(Avatar);

const sections = [
  { label: 'About', id: 'about', icon: <InfoIcon /> },
  { label: 'Skills', id: 'skills', icon: <BuildIcon /> },
  { label: 'Projects', id: 'projects', icon: <CodeIcon /> },
  { label: 'Experience', id: 'experience', icon: <WorkIcon /> },
  { label: 'Education', id: 'education', icon: <SchoolIcon /> },
  { label: 'Contact', id: 'contact', icon: <ContactMailIcon /> },
];

export default function Sidebar() {
  const [selected, setSelected] = useState('about');

  const handleNav = (id) => {
    setSelected(id);
    const el = document.getElementById(id);
    if (el) {
      // Scroll with offset for header
      const yOffset = -80; // Account for fixed header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        display: { xs: 'none', sm: 'block' },
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
          background: 'linear-gradient(180deg, #1a1f3a 0%, #0d1025 100%)',
          color: '#fff',
          border: 'none',
          borderRight: '1px solid rgba(102, 126, 234, 0.2)',
          top: 64,
          height: 'calc(100vh - 64px)',
          boxShadow: '4px 0 20px rgba(0,0,0,0.3)',
        },
      }}
    >
      <MotionBox 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        py={4}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <MotionAvatar 
          sx={{ 
            width: 90, 
            height: 90, 
            mb: 2, 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff', 
            fontSize: 38,
            fontWeight: 900,
            boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)',
            border: '3px solid rgba(255,255,255,0.2)',
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          DS
        </MotionAvatar>
        <Typography variant="h6" fontWeight={800} gutterBottom sx={{ 
          background: 'linear-gradient(45deg, #667eea 30%, #f093fb 90%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Diksha Sharma
        </Typography>
        <Typography variant="body2" sx={{ 
          color: 'rgba(255,255,255,0.7)',
          mb: 2,
          fontWeight: 500,
        }}>
          Full Stack Developer
        </Typography>
      </MotionBox>
      
      <List>
        {sections.map((section, index) => (
          <ListItem key={section.id} disablePadding>
            <motion.div
              style={{ width: '100%' }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <ListItemButton
                selected={selected === section.id}
                onClick={() => handleNav(section.id)}
                component={motion.div}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  color: selected === section.id ? '#ffd700' : '#b0b3b8',
                  background: selected === section.id 
                    ? 'linear-gradient(90deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)' 
                    : 'transparent',
                  borderRadius: 2,
                  mx: 1,
                  my: 0.5,
                  borderLeft: selected === section.id ? '4px solid #ffd700' : '4px solid transparent',
                  fontWeight: selected === section.id ? 700 : 500,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(90deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
                    color: '#ffd700',
                    borderLeft: '4px solid #ffd700',
                  },
                  display: 'flex',
                  gap: 1.5,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
                  {section.icon}
                </Box>
                <ListItemText 
                  primary={section.label}
                  primaryTypographyProps={{
                    fontWeight: selected === section.id ? 700 : 500,
                  }}
                />
              </ListItemButton>
            </motion.div>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
