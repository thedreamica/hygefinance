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
            <Typography>
                {h1}
            </Typography>
            <Typography>
                {subtext}
            </Typography>
        </Box>
        <Typography>
            {content}
        </Typography>
    </Box>
}


const HowItWorks = () => {
    return <Box sx={{
        display: 'flex',
        flexDirection: 'column'
    }}>
        <Typography>

        </Typography>
        <Typography>

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