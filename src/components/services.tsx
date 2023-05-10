import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Speed } from '@styled-icons/material-outlined/Speed'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'
import { useTheme } from '@mui/material';

const ServiceCard = () => {
    return <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '275px',
        minHeight: '250px',
        paddingTop: '50px'
    }}>
        <Speed height={48}/>
        <Typography sx={{
            marginTop: '40px',
            fontSize: '23px',
            fontWeight: 600
        }}>
        Business
        </Typography>
        <Typography sx={{
            marginTop: '20px',
            fontSize: '15px',
            fontWeight: 400
        }}>
        Development Loan
        </Typography>
    </Card>
}

const CustomCard = () => {
    return <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '275px',
        minHeight: '250px',
        backgroundColor: '#0033FF',
        justifyContent: 'center'
    }}>
        <Typography sx={{
            fontSize: '50px',
            fontWeight: 700,
            color: '#FFFFFF'
        }}>
        7+
        </Typography>
        <Typography sx={{
            marginTop: '20px',
            fontSize: '15px',
            fontWeight: 400,
            color: '#FFFFFF'

        }}>
        Load more options <ArrowRight size={18} />
        </Typography>
    </Card>
}

const Services = () => {
    const { spacing } = useTheme()
    return <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: { xs: '', md: '140px 140px 100px' },
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    }}>
        <Typography sx={{
            textAlign: 'center',
            fontSize: '50px',
            fontWeight: 700,
            color: '#000000',
            marginBottom: '90px'
        }}>
        We have better Service for your needs!
        </Typography>
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: spacing(4),
            width: '80%',
            justifyContent: 'center'
        }}>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <CustomCard/>
        </Box>
    </Box>
}

export default Services


