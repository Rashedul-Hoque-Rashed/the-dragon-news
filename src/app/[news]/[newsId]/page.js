import { getNewsById } from "@/utils/getNewsById";
import { Box, Container, Grid, Typography, Avatar } from "@mui/material";
import Image from "next/image";




const NewsDetailsPage = async ({params}) => {

    const {data: news} = await getNewsById(params.newsId);

    return (
        <Box sx={{ my: '24px' }}>
<Container>
<Grid container spacing={2}>
  <Grid item xs={6} md={6}>
   <Image src={news.thumbnail_url} width={800} height={500} alt='news' />
   <Grid container spacing={2} sx={{my: 1}}>
  <Grid item xs={6} md={6}>
   <Image src={news.image_url} width={800} height={500} alt='news' />
  </Grid>
  <Grid item xs={6} md={6}>
  <Image src={news.image_url} width={800} height={500} alt='news' />
  </Grid>
</Grid>
  </Grid>
  <Grid item xs={6} md={6}>
  <Typography gutterBottom variant="h6" component="h2">
                        {news.title}
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                        <Avatar alt="author" src={news.author.img} />
                        <Typography color="text.secondary">
                            By {news.author.name} - {news.author.published_date}
                        </Typography>
                        </Box>
                        <Typography color="text.secondary" style={{
                          textAlign: 'justify',
                          margin: '16px 0',
                          whiteSpace: 'pre-line'
                        }}>
                            {news.details}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                        ``Many desktop publishing packages and web page editors now use as their default model text!
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                        -- Rashedul Hoque
                        </Typography>
  </Grid>
</Grid>
</Container>
        </Box>
    );
};

export default NewsDetailsPage;