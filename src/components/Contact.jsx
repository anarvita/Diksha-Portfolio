import { Card, CardContent, Typography, Box, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const MotionCard = motion(Card);
const MotionButton = motion(Button);

const contacts = [
  { 
    icon: <PhoneIcon />, 
    label: 'Phone', 
    value: '+91 9821953631',
    href: 'tel:+919821953631',
    color: '#4caf50'
  },
  { 
    icon: <EmailIcon />, 
    label: 'Email', 
    value: 'diksha.sharma@example.com',
    href: 'mailto:diksha.sharma@example.com',
    color: '#f44336'
  },
  { 
    icon: <LinkedInIcon />, 
    label: 'LinkedIn', 
    value: 'Connect on LinkedIn',
    href: 'https://linkedin.com',
    color: '#0077b5'
  },
  { 
    icon: <GitHubIcon />, 
    label: 'GitHub', 
    value: 'View My Repositories',
    href: 'https://github.com',
    color: '#fff'
  },
];

export default function Contact() {
  return (
    <MotionCard 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{ 
        maxWidth: 700, 
        margin: '2rem auto', 
        boxShadow: '0 15px 50px rgba(240, 147, 251, 0.4)',
        borderRadius: 4,
        background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.95) 0%, rgba(13, 16, 37, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(240, 147, 251, 0.3)',
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{ 
            fontWeight: 800,
            mb: 2,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #f093fb 30%, #667eea 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <ContactMailIcon sx={{ color: '#f093fb' }} /> Get In Touch
        </Typography>
        
        <Typography 
          variant="body1" 
          align="center"
          sx={{ 
            color: '#b0b3b8',
            mb: 4,
          }}
        >
          Let's connect and discuss how I can help bring your ideas to life!
        </Typography>
        
        <Stack spacing={2}>
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <MotionButton
                component="a"
                href={contact.href}
                target={contact.label === 'Phone' || contact.label === 'Email' ? '_self' : '_blank'}
                fullWidth
                whileHover={{ scale: 1.03, x: 5 }}
                whileTap={{ scale: 0.98 }}
                sx={{
                  py: 2,
                  px: 3,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${contact.color}20 0%, ${contact.color}10 100%)`,
                  border: `1px solid ${contact.color}40`,
                  color: '#fff',
                  textTransform: 'none',
                  justifyContent: 'flex-start',
                  gap: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${contact.color}30 0%, ${contact.color}20 100%)`,
                    boxShadow: `0 8px 25px ${contact.color}30`,
                    borderColor: contact.color,
                  }
                }}
              >
                <Box 
                  sx={{ 
                    color: contact.color,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 28,
                  }}
                >
                  {contact.icon}
                </Box>
                <Box sx={{ textAlign: 'left', flex: 1 }}>
                  <Typography variant="caption" sx={{ color: '#b0b3b8', display: 'block' }}>
                    {contact.label}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
                    {contact.value}
                  </Typography>
                </Box>
              </MotionButton>
            </motion.div>
          ))}
        </Stack>
      </CardContent>
    </MotionCard>
  );
}
