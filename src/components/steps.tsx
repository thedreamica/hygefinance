import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleFill } from '@styled-icons/bootstrap/CheckCircleFill'

const Steps = () => {
    return <Box sx={{
        display: 'flex',
        padding: { xs: '', md: '40px 140px' },
        background: 'url(https://i.imgur.com/QyByPoZ.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
        <Box sx={{
            width: '50%',
            padding: '120px 0 0'
        }}>
            <Typography sx={{
                fontSize: '40px',
                lineHeight: '50px',
                fontWeight: 600,
                width: '60%',
                marginBottom: '28px'
            }}>
                Get loan from 3 simple
                process
            </Typography>
            <Typography sx={{
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '30px',
                width: '60%',
            }}>
                During each phase of the loan process, a borrower will work with
                different members of the loan team. The three stages of every
                loan are the application, underwriting and closing.
            </Typography>
            <Box>
                <Typography sx={{
                    marginTop: '30px',
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <CheckCircleFill size={16} fill="#0033FF" /> Request for a loan
                </Typography>
                <Typography sx={{
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                <CheckCircleFill size={16} fill="#0033FF" /> Our Hyge agent will respond within 24-hours.
                </Typography>
                <Typography sx={{
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                <CheckCircleFill size={16} fill="#0033FF" /> He will continue the process from there
                </Typography>
            </Box>
            <Link style={{
                marginTop: '30px',
                color: '#0033FF',
                display: 'block'
            }} href="/">Learn about the process </Link>
        </Box>
        <Box sx={{
            width: '50%'
        }}>
            <Image src="iLBloG2.png" alt="steps-desktop" width={680} height={620} />
        </Box>
    </Box>
}

export default Steps
