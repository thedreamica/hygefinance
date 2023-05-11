import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CheckCircleFill } from '@styled-icons/bootstrap/CheckCircleFill'

const CTA = () => {

    const regularFonts = {
        fontSize: '15px',
        lineHeight: '20px',
        fontWeight: 400,
        marginBottom: '20px'
    }
    return <Box sx={{
        display: 'flex',
        padding: '80px 140px 80px',
        justifyContent: 'space-between'
    }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%'
        }}>
            <Typography sx={{
                fontSize: '40px',
                lineHeight: '50px',
                fontWeight: 600,
                marginBottom: '28px',
                width: '80%'
            }}>
                Benefits of hyge Finance
                Loan offers.
            </Typography>
            <Typography sx={{
                ...regularFonts,
                width: '50%',
                lineHeight: '25px',
                marginBottom: '28px'
            }}>
                We provide wide range of benefits with our loans, each loans are
                curated for all category of seekers.
            </Typography>
            <Typography sx={{
                ...regularFonts
            }}>
                <CheckCircleFill fill={'#0033FF'} size={16} /> &nbsp; Personalized loan solutions for your unique financial needs
            </Typography>
            <Typography sx={{
                ...regularFonts
            }}>
                <CheckCircleFill fill={'#0033FF'} size={16} /> &nbsp; Fast and hassle-free loan process
            </Typography>
            <Typography sx={{
                ...regularFonts
            }}>
                <CheckCircleFill fill={'#0033FF'} size={16} /> &nbsp; Quick approvals and easy repayment options
            </Typography>
            <Typography sx={{
                ...regularFonts
            }}>
                <CheckCircleFill fill={'#0033FF'} size={16} /> &nbsp; Competitive interest rates and flexible terms
            </Typography>
            <Typography sx={{
                ...regularFonts
            }}>
                <CheckCircleFill fill={'#0033FF'} size={16} /> &nbsp; Exceptional service and support from our team of financial
                experts
            </Typography>
            <Typography sx={{
                ...regularFonts
            }}>
                <CheckCircleFill fill={'#0033FF'} size={16} /> &nbsp; Fast and hassle-free loan process
            </Typography>
            <Typography sx={{
                ...regularFonts
            }}>
                <CheckCircleFill fill={'#0033FF'} size={16} /> &nbsp; Quick approvals and easy repayment options
            </Typography>
            <Typography sx={{
                ...regularFonts
            }}>
                <CheckCircleFill fill={'#0033FF'} size={16} /> &nbsp; Competitive interest rates and flexible terms
            </Typography>
        </Box>
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '40%',
            padding: '70px 50px'
        }}>
            <Typography sx={{
                fontSize: '30px',
                lineHeight: '23px',
                fontWeight: 700,
                marginBottom: '40px'
            }}>
                Request a Callback
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <TextField placeholder='Name' />
                <TextField placeholder='Email' />
                <TextField placeholder='Phone number' />
                <TextField placeholder='How can we help you ?' />
                <Button sx={{
                    width: '23%',
                    height: '52px'
                }} variant="contained">Submit</Button>
            </Box>
        </Card>
    </Box>
}

export default CTA