import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { RecordCircleFill } from '@styled-icons/bootstrap/RecordCircleFill'


const Point = ({
    h1,
    subtext,
    content
}: { h1: string; subtext: string; content: string; }) => {
    return <Box sx={{
        display: 'flex',
        flexDirection: 'column',
    }}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <RecordCircleFill height="32px" fill="#0033FF" />
            <Typography sx={{
                color: '#000000',
                fontSize: '40px',
                lineHeight: '50px',
                fontWeight: 600,
                marginLeft: '20px'
            }}>
                {h1}
            </Typography>
            <Typography sx={{
                color: '#000000',
                fontSize: '20px',
                lineHeight: '40px',
                fontWeight: 400,
                marginTop: '12px',
                marginLeft: '8px'
            }}>
                {subtext}
            </Typography>
        </Box>
        <Typography sx={{
            color: '#000000',
            fontSize: '15px',
            lineHeight: '23px',
            fontWeight: 400,
            width: '60%'
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
            color: '#000000',
            marginBottom: '90px'
        }}>
            Learn how Hyge Finance works
        </Typography>
        <Box sx={{
            display: 'flex',
            width: '100%'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '60px',
                justifyContent: 'center'
            }}>
                <Point h1="Trusted" subtext="Company" content="Personalized loans for unique needs, including weddings, businesses, 
and cars. Wide range of options available at our company." />
                <Point h1="Quick" subtext="Processing" content="A borrower works with various loan team members in three stages: 
application, underwriting, and closing." />
 <Point h1="Quick" subtext="Processing" content="A borrower works with various loan team members in three stages: 
application, underwriting, and closing." />
            </Box>
            <Box>
                <Image src="/IN78CdW.png" alt="How it works" height="570" width="770" />
            </Box>
        </Box>
    </Box>
}

export default HowItWorks