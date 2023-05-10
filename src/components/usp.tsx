import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Headset } from '@styled-icons/fluentui-system-filled/Headset'

const UspItem = () => {
    return <Box sx={{
        display: 'flex',
        padding: { xs: '', md: '40px 140px' }
    }}>
        <Headset height={'24px'} />
        <Typography>
            Fast, hassle-free loans with
            flexible terms.
        </Typography>
    </Box>
}

const Usp = () => {
    return <Box sx={{
        display: 'flex',
        flexDirection: {
            xs: 'column',
            md: 'row'
        }
    }}>
        <UspItem />
        <UspItem />
        <UspItem />
    </Box>
}

export default Usp