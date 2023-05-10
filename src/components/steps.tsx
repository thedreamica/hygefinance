import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';

const Steps = () => {
    return <Box sx={{
        display: 'flex',
        padding: { xs: '', md: '40px 140px' }
    }}>
        <Box sx={{
            width: '50%'
        }}>
            <Typography>
                Get loan from 3 simple
                process
            </Typography>
            <Typography>
                During each phase of the loan process, a borrower will work with
                different members of the loan team. The three stages of every
                loan are the application, underwriting and closing.
            </Typography>
            <Box>
                <Typography>
                    Request for a loan
                </Typography>
                <Typography>
                    Our Hyge agent will respond within 24-hours.
                </Typography>
                <Typography>
                    He will continue the process from there
                </Typography>
            </Box>
            <Link href="/">Learn about the process </Link>
        </Box>
        <Box sx={{
            width: '50%'
        }}>
            <Image src="iLBloG2.png" alt="steps-desktop" width={500} height={500} />
        </Box>
    </Box>
}

export default Steps
