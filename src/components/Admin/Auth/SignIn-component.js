import * as React from 'react';
import {useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import styles from './SignIn-component.module.css'
import AuthContext from "../../store/auth-context";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Copyright(props) {
    return (
        <Typography variant="body2" color="white" align="center" {...props}>
            {'Copyright © '}
            StudPro 5.0
            {' '}
            {new Date().getFullYear()}
        </Typography>
    );
}


const theme = createTheme();

const SignIn = (props) => {


    const authCtx = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        authCtx.onLogin(data.get('email'), data.get('password'));
    };

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Grid container component="main" sx={{height: '100vh'}}>
                <CssBaseline/>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid style={{backgroundColor: "#262521"}} item xs={12} sm={8} md={5} component={Paper} elevation={6}
                      square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: "#262521"
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                           <span> <span
                               className="animate-stud" style={{fontSize: '50px'}}>Stud</span>
                            <span
                                className="animate-login" style={{fontSize: '50px'}}>Pro</span>
                        </span><br/>
                            <span style={{color: "white"}} className={'font'}> System User Sign In</span>
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} sx={{mt: 1}}>
                            <TextField
                                sx={{input: {color: 'white'}}}
                                FormHelperTextProps={{
                                    classes: {
                                        root: styles['helper-text'],
                                    },
                                }}
                                InputProps={{
                                    classes: {
                                        notchedOutline: styles['input-border'],
                                    },
                                }}
                                InputLabelProps={{
                                    classes: {
                                        root: styles.inputLabel,
                                        focused: styles.inputLabel,
                                    },
                                }}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                type="email"
                            />
                            <TextField
                                FormHelperTextProps={{
                                    classes: {
                                        root: styles['helper-text'],
                                    },
                                }}
                                InputProps={{
                                    classes: {
                                        notchedOutline: styles['input-border'],
                                    },
                                }}
                                InputLabelProps={{
                                    classes: {
                                        root: styles.inputLabel,
                                        focused: styles.inputLabel,
                                    },
                                }}
                                sx={{input: {color: 'white'}}}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{mt: 5}}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default SignIn;