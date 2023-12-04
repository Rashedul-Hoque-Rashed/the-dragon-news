import { getCategoryData } from "@/utils/getCategoryData";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from 'next/link';




const DynamicCategoryPage = async ({searchParams}) => {

    const {data} = await getCategoryData(searchParams.category);

    return (
        <Box sx={{ my: '24px' }}>
<Grid sx={{mt: '24px'}} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {data.map(news => (<Grid key={news._id} item xs={6}>
                <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                <Card>
                <CardActionArea>
                    <CardMedia sx={{"& img": {width: 'full', height: '250px'}}}>
                        <Image src={news.thumbnail_url} width={400} height={100} alt="latest news" />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        {news.title.length>30 ? news.title.slice(0,30)+'...' : news.title}
                        </Typography>
                        <Typography sx={{ mb: '16px' }} variant="body2" color="text.secondary">
                            By {news.author.name} - {news.author.published_date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {news.details.length > 200 ? news.details.slice(0,200) + '...' : news.details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
                </Link>
                </Grid>))}
                </Grid>
        </Box>
    );
};

export default DynamicCategoryPage;