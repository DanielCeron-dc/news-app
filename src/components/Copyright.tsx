import { Link, Typography } from '@mui/material';

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{ color: 'var(--text)', zIndex: 30 }}>
            {'Copyright © '}
            <Link color="inherit" href="https://danielceron-dc.me/" >
                Daniel Cerón
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}