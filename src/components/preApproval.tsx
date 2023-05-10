import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';


const PreApproval = () => {
    return <Box sx={{
        display: 'flex',
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    }}>
        <Box>
            <Image src="/q9kNcDh.png" alt="pre-approval" height={700} width={780} />
        </Box>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '80px'
        }}>
            <Typography sx={{
                fontSize: '50px',
                fontWeight: 600,
                lineHeight: '60px',
                color: '#000',
                width: '60%',
                marginBottom: '30px'
            }}>
                Get a Pre-Approved Instant
                Loan offers.
            </Typography>
            <Typography sx={{
                width: '60%',
                color: '#000',
                fontSize: '20px',
                lineHeight: '35px'
            }}>
                During each phase of the loan process, a borrower will work with different
                members of the loan team. The three stages of every loan are the application,
                underwriting and closing.
            </Typography>
            <Box sx={{
                display: 'flex',
                marginTop: '50px'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <Typography sx={{
                        fontSize: '50px',
                        fontWeight: 600,
                        color: '#000',
                    }}>
                        50+
                    </Typography>
                    <Typography sx={{
                        color: '#000',
                        width: '50%'
                    }}>
                        Loans
                        Distributed
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <Typography sx={{
                        fontSize: '50px',
                        fontWeight: 600,
                        color: '#000',
                    }}>
                        ₹&nbsp; 2Cr
                    </Typography>
                    <Typography sx={{
                        color: '#000',
                        width: '50%'
                    }}>
                        Worth Loans
                        Transferred
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
}

export default PreApproval