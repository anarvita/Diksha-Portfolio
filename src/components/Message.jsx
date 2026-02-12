import { Card, CardContent, Typography, TextField, Button, Box, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';

const MotionCard = motion(Card);
const MotionButton = motion(Button);

export default function Message() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    setForm({ name: '', email: '', message: '' });
  };

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
            background: 'linear-gradient(45deg, #667eea 30%, #f093fb 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <MessageIcon sx={{ color: '#667eea' }} /> Send a Message
        </Typography>
        
        <Typography 
          variant="body1" 
          align="center"
          sx={{ 
            color: '#b0b3b8',
            mb: 4,
          }}
        >
          Have a project in mind? Let's discuss how we can work together!
        </Typography>
        
        <Box 
          component={motion.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          display="flex" 
          flexDirection="column" 
          gap={3}
        >
          <TextField 
            label="Your Name" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            required
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                '& fieldset': {
                  borderColor: 'rgba(102, 126, 234, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(102, 126, 234, 0.6)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#667eea',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#b0b3b8',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#667eea',
              },
            }}
          />
          
          <TextField 
            label="Your Email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            required 
            type="email"
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                '& fieldset': {
                  borderColor: 'rgba(102, 126, 234, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(102, 126, 234, 0.6)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#667eea',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#b0b3b8',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#667eea',
              },
            }}
          />
          
          <TextField 
            label="Your Message" 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            required 
            multiline 
            rows={5}
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                '& fieldset': {
                  borderColor: 'rgba(102, 126, 234, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(102, 126, 234, 0.6)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#667eea',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#b0b3b8',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#667eea',
              },
            }}
          />
          
          <MotionButton 
            type="submit" 
            variant="contained"
            endIcon={<SendIcon />}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            sx={{
              py: 1.5,
              background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.1rem',
              boxShadow: '0 5px 20px rgba(102, 126, 234, 0.4)',
              '&:hover': {
                background: 'linear-gradient(45deg, #764ba2 30%, #f093fb 90%)',
                boxShadow: '0 8px 30px rgba(102, 126, 234, 0.6)',
              }
            }}
          >
            Send Message
          </MotionButton>
        </Box>
        
        <Snackbar 
          open={open} 
          autoHideDuration={4000} 
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert 
            onClose={() => setOpen(false)} 
            severity="success" 
            sx={{ 
              width: '100%',
              background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
              color: '#fff',
              fontWeight: 600,
            }}
          >
            ✅ Message sent successfully! (Demo only)
          </Alert>
        </Snackbar>
      </CardContent>
    </MotionCard>
  );
}
