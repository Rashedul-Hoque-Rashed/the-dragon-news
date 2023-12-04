import { getAllCategory } from "@/utils/getAllCategory";
import { Box, Typography, Divider, Stack, Button } from "@mui/material";
import Link from 'next/link';




const CategoryList = async () => {

  const {data: allCategory} = await getAllCategory();

    return (
      <Box sx={{my: '24px'}}>
        <Typography variant="h6" sx={{mb: '10px', fontWeight: 700}}>
Categories
        </Typography>
        <Divider />
        <Stack sx={{mt: '16px'}}>
        {
          allCategory.map(category => <Button key={category.id} variant="outlined" sx={{my: '4px'}}>
<Link href={`/category/news?category=${category.title.toLowerCase()}`}>{category.title}</Link>
          </Button>)
        }
        </Stack>
      </Box>
    );
  };
  
  export default CategoryList;