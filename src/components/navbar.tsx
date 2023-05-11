import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image'

const Navbar = () => {
    return <Box sx={{
        backgroundColor: '#FFFFFF',
        padding: '0 140px',
    }}>
        <Image src="/MMPeN4N.png" alt="fin-logo" width={140} height={60} />
        <Box sx={{
            display: {
                xs: 'none',
                md: 'flex'
            }
        }}>
            <Typography>
                Home
            </Typography>
            <Typography>
                Loans
            </Typography>
            <Typography>
                FAQ
            </Typography>
            <Typography>
                Investments
            </Typography>
            <Typography>
                Contact
            </Typography>
        </Box>
    </Box>
}

export default Navbar