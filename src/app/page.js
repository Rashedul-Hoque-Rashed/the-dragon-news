import LatestNews from '@/components/ui/LatestNews/LatestNews';
import Sidebar from '@/components/ui/Sidebar/Sidebar';
import { Grid } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Grid container spacing={2}>
  <Grid item xs={6} md={8}>
    <LatestNews/>
  </Grid>
  <Grid item xs={6} md={4}>
    <Sidebar/>
  </Grid>
</Grid>
    </div>
  );
};

export default HomePage;