import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'

const Footer = () => {
    return <Box sx={{
        display: 'flex',
        padding: '80px 140px 80px',
        justifyContent: {
            md: 'space-between'
        },
        alignItems: {
            md: 'flex-end'
        },
        flexDirection: {
            sx: 'column',
            md: 'row'
        }
    }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
        }}>
            <Image src="/1JaI7HJ.png" alt="finance-logo" width={140} height={80} />
            <Typography sx={{
                marginTop: '24px',
                width: '70%',
                fontSize: '12px',
                fontWeight: 600
            }}>
                At Hyge Construction, we are committed to providing top-quality construction services to meet the needs of our clients.
            </Typography>
        </Box>
        <Box sx={{
            width: '30%'
        }}>
            <Typography sx={{
                fontSize: '24px',
                fontWeight: 700
            }}>
                Address
            </Typography>
            <Typography sx={{
                fontSize: '12px',
                fontWeight: 600
            }}>
                Dot Cowork - Tidel Park,
                1st Floor D Block, Tharamani,
                Chennai - 600113
            </Typography>
            <Typography sx={{
                fontSize: '12px',
                fontWeight: 600
            }}>
                support@hygeinfotech.com
            </Typography>
            <Typography sx={{
                fontSize: '12px',
                fontWeight: 600
            }}>
                Mon - Friday, 8am : 5pm
            </Typography>
        </Box>
        <Box sx={{
            width: '30%'
        }}>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                <Typography sx={{
                    fontSize: '50px',
                    lineHeight: '70px',
                    fontWeight: 700,
                    color: '#FFFFFF'
                }}>
                    Simple
                </Typography>
                <Typography sx={{
                    fontSize: '50px',
                    lineHeight: '70px',
                    fontWeight: 700,
                    color: '#FFCC00'
                }}>
                    &
                </Typography>
                <Typography sx={{
                    fontSize: '50px',
                    lineHeight: '70px',
                    fontWeight: 700,
                    color: '#FFFFFF'
                }}>
                    Reliable
                </Typography>
                <Typography sx={{
                    fontSize: '50px',
                    lineHeight: '70px',
                    fontWeight: 700,
                    color: '#FFFFFF'
                }}>
                    Loans
                </Typography>
            </Box>
            <Button>
                Contact us
            </Button>
        </Box>
    </Box>
}

export default Footer