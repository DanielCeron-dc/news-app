import { Link, Typography } from '@mui/material';

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://danielceron-dc.me/">
                Daniel Cerón
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}