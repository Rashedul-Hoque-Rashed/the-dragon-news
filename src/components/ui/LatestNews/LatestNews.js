import { getAllNews } from "@/utils/getAllNews";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import latestNews from "@/assets/latestNews.png"
import news1 from "@/assets/news1.png"
import news2 from "@/assets/news2.png"
import news3 from "@/assets/news3.png"
import news4 from "@/assets/news4.png"


const LatestNews = async () => {

    const {data} = await getAllNews();

    return (
        <Box sx={{ my: '24px' }}>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={data[0].thumbnail_url} width={800} height={400} alt="latest news" />
                    </CardMedia>
                    <CardContent>
                        <Typography sx={{ width: 'fit-content', px: '16px', py: '6px', backgroundColor: 'red', color: '#FFF', borderRadius: '8px', my: '12px' }}>
                            {data[0].category}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {data[0].title}
                        </Typography>
                        <Typography sx={{ my: '8px' }} variant="body2" color="text.secondary">
                            By {data[0].author.name} - {data[0].author.published_date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data[0].details.length > 200 ? data[0].details.slice(0, 200) + '...' : data[0].details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>


            <Grid sx={{mt: '24px'}} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                
                {
                    data.slice(1,5).map(news => (
                        <Grid key={news._id} item xs={6}>
                <Card>
                <CardActionArea>
                    <CardMedia sx={{"& img": {width: 'full', height: '250px'}}}>
                        <Image src={news.thumbnail_url} width={800} height={400} alt="latest news" />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        {news.title.length>30 ? news.title.slice(0,30)+'...' : news.title}
                        </Typography>
                        <Typography sx={{ my: '8px' }} variant="body2" color="text.secondary">
                        By {news.author.name} - {news.author.published_date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {news.details.length > 200 ? news.details.slice(0,200) + '...' : news.details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
                </Grid>
                    ))
                }
                
                

            </Grid>


        </Box>
    );
};

export default LatestNews;