import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import headerLogo from '@/assets/The Dragon News.png'
import { showDateTime } from '@/utils/showDateTime';


const Header = () => {

    const currentDate = showDateTime();

    return (
        <Box sx={{textAlign: 'center', my: '40px'}}>
            <Container>
                <Image src={headerLogo} width={450} height={250} className='mx-auto' alt='dragon-header-img'/>
                <Typography variant="body2" color='gray' sx={{textAlign: 'center', my: 1 }}>
                Journalism Without Fear or Favour
                </Typography>
                <Typography sx={{textAlign: 'center' }}>
                {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;