import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import latestNews from "@/assets/latestNews.png"
import news1 from "@/assets/news1.png"
import news2 from "@/assets/news2.png"
import news3 from "@/assets/news3.png"
import news4 from "@/assets/news4.png"


const LatestNews = () => {
    return (
        <Box sx={{ my: '24px' }}>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={latestNews} width={800} height={400} alt="latest news" />
                    </CardMedia>
                    <CardContent>
                        <Typography sx={{ width: 'fit-content', px: '16px', py: '6px', backgroundColor: 'red', color: '#FFF', borderRadius: '8px', my: '12px' }}>
                            Technology
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography sx={{ my: '8px' }} variant="body2" color="text.secondary">
                            By Rashedul Hoque - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>


            <Grid sx={{mt: '24px'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={news1} width={800} height={400} alt="latest news" />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        EU’s New Sanctions Aim to Cut Russia Off From World Bank
                        </Typography>
                        <Typography sx={{ my: '8px' }} variant="body2" color="text.secondary">
                            By Rashedul Hoque - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        It is a long established fact that a reader will be distracted by the readable.....
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
                </Grid>
                <Grid item xs={6}>
                <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={news2} width={800} height={400} alt="latest news" />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Battle Analysis: Russian Tank Armada vs Ukraine
                        </Typography>
                        <Typography sx={{ my: '8px' }} variant="body2" color="text.secondary">
                            By Rashedul Hoque - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        It is a long established fact that a reader will be distracted by the readable.....
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
                </Grid>
                <Grid item xs={6}>
                <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={news3} width={800} height={400} alt="latest news" />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        France’s Largest Business Summit to Conclude on Mar 22
                        </Typography>
                        <Typography sx={{ my: '8px' }} variant="body2" color="text.secondary">
                            By Rashedul Hoque - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        It is a long established fact that a reader will be distracted by the readable.....
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
                </Grid>
                <Grid item xs={6}>
                <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={news4} width={800} height={400} alt="latest news" />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Marquez Explains Lack of Confidence During Qatar GP Race
                        </Typography>
                        <Typography sx={{ my: '8px' }} variant="body2" color="text.secondary">
                            By Rashedul Hoque - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        It is a long established fact that a reader will be distracted by the readable.....
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
                </Grid>

            </Grid>


        </Box>
    );
};

export default LatestNews;