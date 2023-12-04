import { Box, Container, Grid } from "@mui/material";
import CategoryList from '@/components/ui/CategoryList/CategoryList';


const CategoryLayout = ({children}) => {
    return (
        <Box>
           <Container>
           <Grid container spacing={2}>
  <Grid item xs={6} md={3}>
    <CategoryList/>
  </Grid>
  <Grid item xs={6} md={9}>
    {children}
  </Grid>
</Grid>
            </Container> 
        </Box>
    );
};

export default CategoryLayout;