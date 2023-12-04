import { Box, Button, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";




const navItem = [
    {
        route: 'Home',
        pathName: '/',
    },
    {
        route: 'Pages',
        pathName: '/pages',
    },
    {
        route: 'Category',
        pathName: '/category',
    },
    {
        route: 'News',
        pathName: '/news',
    },
    {
        route: 'Post',
        pathName: '/post',
    },
    {
        route: 'Contact',
        pathName: '/contact',
    },
];

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#011321', py: '100px', textAlign: 'center' }}>
            <Container>
                <Box>
                    <IconButton aria-label="facebook">
                        <FacebookIcon sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton aria-label="facebook">
                        <TwitterIcon sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton aria-label="facebook">
                        <YouTubeIcon sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton aria-label="facebook">
                        <LinkedInIcon sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton aria-label="facebook">
                        <InstagramIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Box>
                <Box sx={{textAlign: 'center' }}>
                    {navItem.map((item, index) => (
                        <Link
                            key={index}
                            href={item.pathName}>
                            <Button
                                sx={{ my: 2, color: 'white' }}
                            >
                                {item.route}
                            </Button>
                        </Link>
                    ))}
                </Box>
                <Typography variant="body2" color='gray' sx={{textAlign: 'center' }}>
                @2023 Dragon News. Design by Rashedul Hoque
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;