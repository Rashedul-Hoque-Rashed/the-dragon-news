import {Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import sideImg from "@/assets/sideImg.png"
import finish from '@/assets/finish.png'


const Sidebar = () => {
    return (
        <Box sx={{ my: '24px' }}>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={sideImg} width={800} height={400} alt="latest news" />
                    </CardMedia>
                    <CardContent>
                        <Typography sx={{ width: 'fit-content', px: '16px', py: '6px', backgroundColor: 'red', color: '#FFF', borderRadius: '8px', my: '12px' }}>
                            Technology
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography sx={{ my: '8px' }} variant="body2" color="text.secondary">
                            By Rashedul Hoque - Mar 18 2023
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>


            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, mt: '24px' }}>
                <Grid container wrap="nowrap" spacing={2} className="mb-6 border-b-2 pb-2 items-center" >
                    <Grid item>
                      
                            <Image src={sideImg} alt="newsImg" className="rounded-lg w-[120px] h-[80px]" />
                        
                    </Grid>
                    <Grid item>
                        <Typography className="text-sm font-medium" >
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography sx={{ my: '8px' }} variant="body2" color="text.secondary">
                            By Rashedul Hoque - Mar 18 2023
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container wrap="nowrap" spacing={2} className="mb-6 border-b-2 pb-2 items-center" >
                    <Grid item>
                      
                            <Image src={sideImg} alt="newsImg" className="rounded-lg w-[120px] h-[80px]" />
                        
                    </Grid>
                    <Grid item>
                        <Typography className="text-sm font-medium" >
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography sx={{ my: '8px' }} variant="body2" color="text.secondary">
                            By Rashedul Hoque - Mar 18 2023
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container wrap="nowrap" spacing={2} className="mb-6 border-b-2 pb-2 items-center" >
                    <Grid item>
                      
                            <Image src={sideImg} alt="newsImg" className="rounded-lg w-[120px] h-[80px]" />
                        
                    </Grid>
                    <Grid item>
                        <Typography className="text-sm font-medium" >
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography sx={{ my: '8px' }} variant="body2" color="text.secondary">
                            By Rashedul Hoque - Mar 18 2023
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container wrap="nowrap" spacing={2} className="mb-6 border-b-2 pb-2 items-center" >
                    <Grid item>
                      
                            <Image src={sideImg} alt="newsImg" className="rounded-lg w-[120px] h-[80px]" />
                        
                    </Grid>
                    <Grid item>
                        <Typography className="text-sm font-medium" >
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography sx={{ my: '8px' }} variant="body2" color="text.secondary">
                            By Rashedul Hoque - Mar 18 2023
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container wrap="nowrap" spacing={2} className="mb-6 border-b-2 pb-2 items-center" >
                    <Grid item>
                      
                            <Image src={sideImg} alt="newsImg" className="rounded-lg w-[120px] h-[80px]" />
                        
                    </Grid>
                    <Grid item>
                        <Typography className="text-sm font-medium" >
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography sx={{ my: '8px' }} variant="body2" color="text.secondary">
                            By Rashedul Hoque - Mar 18 2023
                        </Typography>
                    </Grid>
                </Grid>
                    <Grid>
                      
                            <Image src={finish} alt="lastImg" className="rounded-lg w-full h-full" />
                        
                    </Grid>


            </Box>


        </Box>
    );
};

export default Sidebar;