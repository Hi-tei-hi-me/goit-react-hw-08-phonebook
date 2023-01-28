import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/Header/AppBar/AppBar';
import { Box } from './Layout.styled';

export const Layout = () => {
  return (
    <Box>
      <Toaster />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
