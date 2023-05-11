import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Button from '@mui/material/Button';

const Navbar = () => {
    const menuStyles = {
        color: '#000000'
    }
    return <Box sx={{
        backgroundColor: '#FFFFFF',
        padding: '10px 140px',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'fixed',
        width: '100vw'
    }}>
        <Image src="/MMPeN4N.png" alt="fin-logo" width={140} height={60} />
        <Box sx={{
            display: {
                xs: 'none',
                md: 'flex'
            },
            gap: {
                xs: 0,
                md: '50px'
            },
            alignItems: {
                md: 'center'
            }
        }}>
            <Typography sx={{
                ...menuStyles
            }}>
                Home
            </Typography>
            <Typography sx={{
                ...menuStyles
            }}>
                Loans
            </Typography>
            <Typography sx={{
                ...menuStyles
            }}>
                FAQ
            </Typography>
            <Typography sx={{
                ...menuStyles
            }}>
                Investments
            </Typography>
            <Typography sx={{
                ...menuStyles
            }}>
                Contact
            </Typography>
            <Button variant="contained">
                Get loan
            </Button>
        </Box>
    </Box>
}

export default Navbar