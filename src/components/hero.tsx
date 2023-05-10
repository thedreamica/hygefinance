import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import Image from 'next/image';

const Hero = () => {
    const { spacing } = useTheme();
    return <Box sx={{
        backgroundColor: '#EEB609',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        padding: { xs: '', md: '80px 140px' }
    }}>
        <Box sx={{
            width: { xs: '100%', md: '50%' },
        }}>
            <Typography variant="h2" sx={{
                color: '#000000',
                fontWeight: 700
            }}>
                Get Instant
                Loans with Low Interest
            </Typography>
            <Typography variant="h6" sx={{
                color: '#000000',
                fontWeight: 400
            }}>
                Our team of experts uses a methodology to
                Identify your loan needs.
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    md: 'row'
                },
                gap: spacing(1.5)
            }}>
                <TextField
                    id="outlined-email"
                    placeholder="Enter email address"
                    type="email"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="contained">Get started</Button>
            </Box>
            <Box sx={{
                display: 'flex'
            }}>
                <Box>
                        <Typography sx={{
                            color: '#000000',
                        }}>
                        Get 30 day free trial
                        </Typography>
                </Box>
                <Box>
                <Typography sx={{
                    color: '#000000',
                }}>
                        Get 30 day free trial
                        </Typography>
                </Box>
            </Box>
        </Box>
        <Box>
            <Image
                src="BQwkKh9.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
        </Box>
    </Box>
}

export default Hero