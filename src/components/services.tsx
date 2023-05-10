import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Speed } from '@styled-icons/material-outlined/Speed'
import { useTheme } from '@mui/material';

const ServiceCard = () => {
    return <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '22%'
    }}>
        <Speed height={24}/>
        <Typography>
        Business
        </Typography>
        <Typography>
        Development Loan
        </Typography>
    </Card>
}

const Services = () => {
    const { spacing } = useTheme()
    return <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: { xs: '', md: '40px 140px' }
    }}>
        <Typography sx={{
            textAlign: 'center'
        }}>
        We have better Service for your needs!
        </Typography>
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: spacing(4),
            justifyContent: 'center'
        }}>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
        </Box>
    </Box>
}

export default Services


