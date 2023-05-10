import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import { CheckCircleFill } from '@styled-icons/bootstrap/CheckCircleFill'

const CTA = () => {
    return <Box sx={{
        display: 'flex'
    }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%'
        }}>
            <Typography>
                Benefits of hyge Finance
                Loan offers.
            </Typography>
            <Typography>
                We provide wide range of benefits with our loans, each loans are
                curated for all category of seekers.
            </Typography>
            <Typography>
                <CheckCircleFill size={24} />Personalized loan solutions for your unique financial needs
            </Typography>
            <Typography>
                <CheckCircleFill size={24} /> Fast and hassle-free loan process
            </Typography>
            <Typography>
                <CheckCircleFill size={24} />Quick approvals and easy repayment options
            </Typography>
            <Typography>
                <CheckCircleFill size={24} />Competitive interest rates and flexible terms
            </Typography>
            <Typography>
                <CheckCircleFill size={24} />Exceptional service and support from our team of financial
                experts
            </Typography>
        </Box>
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%'
        }}>
            <Typography>
                Request a Callback
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <TextField placeholder='Name' />
                <TextField placeholder='Email' />
                <TextField placeholder='Phone number' />
                <TextField placeholder='How can we help you ?' />
            </Box>
        </Card>
    </Box>
}

export default CTA