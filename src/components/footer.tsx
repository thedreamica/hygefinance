import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'

const Footer = () => {
    return <Box sx={{
        display: 'flex',
        flexDirection: {
            sx: 'column',
            md: 'row'
        }
    }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* <Image /> */}
            <Typography>
                At Hyge Construction, we are committed to providing top-quality construction services to meet the needs of our clients.
            </Typography>
        </Box>
        <Box>
            <Typography>
                Address
            </Typography>
            <Typography>
                Dot Cowork - Tidel Park,
                1st Floor D Block, Tharamani,
                Chennai - 600113
            </Typography>
            <Typography>
                support@hygeinfotech.com
            </Typography>
            <Typography>
                Mon - Friday, 8am : 5pm
            </Typography>
        </Box>
        <Box>
            <Box>
                <Typography>
                    Simple
                </Typography>
                <Typography>
                    &
                </Typography>
                <Typography>
                    Reliable Loans
                </Typography>
            </Box>
            <Button>
                Contact us
            </Button>
        </Box>
    </Box>
}

export default Footer