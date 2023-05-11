import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import Image from 'next/image';
import { RecordCircleFill } from '@styled-icons/bootstrap/RecordCircleFill'
import { TypeH1 } from 'styled-icons/bootstrap';


const Point = ({
    h1,
    subtext,
    content
}: { h1: string; subtext: string; content: string; }) => {
    return <Box sx={{
        display: 'flex',
        flexDirection: 'column'
    }}>
        <Box sx={{
            display: 'flex'
        }}>
            <RecordCircleFill height="32px" fill="#0033FF" />
            <Typography sx={{
                color: '#000000'
            }}>
                {h1}
            </Typography>
            <Typography sx={{
                 color: '#000000'
            }}>
                {subtext}
            </Typography>
        </Box>
        <Typography sx={{
                color: '#000000'
            }}>
            {content}
        </Typography>
    </Box>
}


const HowItWorks = () => {
    return <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: '80px 140px 80px'
    }}>
        <Typography sx={{
            color: '#A9AAAD',
            fontSize: '15px',
            fontWeight: 700
        }}>
            About us
        </Typography>
        <Typography sx={{
            fontSize: '50px',
            fontWeight: 700,
            color: '#000000'
        }}>
            Learn how Hyge Finance works
        </Typography>
        <Box>
            <Box>
                <Point h1="Trusted" subtext="Company" content="Personalized loans for unique needs, including weddings, businesses, 
and cars. Wide range of options available at our company." />
                <Point h1="Quick" subtext="Processing" content="A borrower works with various loan team members in three stages: 
application, underwriting, and closing." />
            </Box>
            <Box>
                {/* <Image /> */}
            </Box>
        </Box>
    </Box>
}

export default HowItWorks