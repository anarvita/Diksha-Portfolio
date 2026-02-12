import { Box, Typography, Button, Stack, Avatar } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionAvatar = motion(Avatar);

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
   <></>
  );
}
