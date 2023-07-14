import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dimension() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={5} lg={4}>
          <Item>Dimension</Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={8} lg={9}>
            <Item>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
               DIMENSION 1
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <li>23 x 45</li>
                <li>90 x 56</li>
                <li>98 x 11</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={8} lg={9}>
            <Item>
              <Box
                id="category-b"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
               DIMENSION 2
              </Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
              <li>245 x 45</li>
                <li>100 x 56</li>
                <li>98 x 241</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={8} lg={9}>
            <Item>
              <Box
                id="category-c"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                DIMENSION 3
              </Box>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
              <li>65 x 45</li>
                <li>90 x 562</li>
                <li>456 x 11</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={8} lg={9}>
            <Item>
              <Box
                id="category-d"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                DIMENSION 4
              </Box>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
              <li>433 x 90</li>
                <li>24 x 56</li>
                <li>87 x 32</li>
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
        >
          
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>KITCHEN</Item>
            </Grid>
            <Grid>
              <Item>LIVING AREA</Item>
            </Grid>
            <Grid>
              <Item>BEDROOM</Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}