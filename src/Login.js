import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withTheme } from "@material-ui/styles";
import PropTypes from "prop-types";

const classes = theme => ({
    root: {
        height: '100vh',
        fontFamily: 'Lato',
    },
    image: {
        height: '500',
        backgroundImage: 'url("https://source.unsplash.com/random")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        zIndex: '- 2',
        opacity: '0.8',
        position:'relative'
},
    paper: {
        margin: theme.spacing(6, 6),
            display: 'flex',
                flexDirection: 'column',
                    alignItems: 'center',
                        padding: '40px',
    },
loginText: {
    color: '#333333',
        fontSize: '33px',
            paddingLeft: '4%',
                margin: '60px 0 20px 30px',
                    fontWeight: '800',
    },
typo: {
    paddingLeft: "4%",
        textAlign: 'left',
            margin: '0 0 20px 30px',
                color: '#787878',
                    fontSize: '18px'
},
form: {
    width: '100%',
        marginTop: theme.spacing(1),
            top: '51px',
                left: '0',

    },
textField: {
    width: '82%',
        margin: '20px 0 20px 55px',
            color: '#575757'
},
submit: {
    width: '82%',
        margin: '20px 0 20px 55px',
            textAlign: 'center',
                height: '60px',
                    fontSize: '25px',
                        backgroundColor: '#fcb116',
                            color: '#333333'
},
link: {
    float: 'right',
        fontSize: '16px',
            margin: '20px 45px',
                color: '#f1b43e',
                    textDecoration: 'underline'
},
linkRegister: {
    padding: '36px 0px 0px 0px',
        fontSize: '16px',
            color: '#fcb116',
                textDecoration: 'underline',
                    float: 'left'
},
accountLink: {
    marginLeft: 'auto',
        marginRight: 'auto',
            float: 'left',
                textAlign: 'center',
                    color: '#5d5d5d',
                        padding: '36px 0px 0px 201px'
},
overlayCenter: {
    position: "absolute",
        paddingTop: "17%",
            paddingLeft: "25%",
                fontSize: '40px',
                    color: '#fff',
                        fontWeight: '700'
    // transform: `${`translate`("-50", "-50")}`
},
overlayCenterBottom: {
    position: "absolute",
        paddingTop: "23%",
            paddingLeft: "37%",
                fontSize: '40px',
                    color: '#fff',
                        fontWeight: '700'
    // transform: `${`translate`("-50", "-50")}`
}
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    // handleChange = (name) => (event) =>{
    //     console.log(name, event)
    //     // setValues({...values,[name]:event.target.value})
    // }

    handleChange = () => {
        console.log("fired")
    }


    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <Grid container component="main" className={classes.root}>
                    <CssBaseline />
                    <Grid item xs={false} sm={6} md={6} className={classes.image} >
                        <React.Fragment>
                            <Grid xs={6} sm={2}></Grid>
                            <Grid xs={6} sm={8}><Typography className={classes.overlayCenter}>WELCOME TO THE</Typography></Grid>
                            <Grid xs={6} sm={2}></Grid>
                        </React.Fragment>
                        <React.Fragment>
                            <Grid xs={6} sm={2}></Grid>
                            <Grid xs={6} sm={8}><Typography className={classes.overlayCenterBottom}>LA SHOP</Typography></Grid>
                            <Grid xs={6} sm={2}></Grid>
                        </React.Fragment>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
                        <Typography component="h5" variant="h5" className={classes.loginText}>
                            LOG IN
                    </Typography>
                        <Typography component="h6" variant="h6" className={classes.typo}>
                            Your address and medical documentation is all saved to your account. No need to enter it every time you order.
                    </Typography>
                        <form className={classes.form}>
                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                className={classes.textField}
                                type="email"
                                name="email"
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange}
                            // onChange={(e)=>this.handleChange(e,'email')}
                            // value={this.state.email}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                className={classes.textField}
                                type="password"
                                name="password"
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange}
                            // onChange={(e)=>this.handleChange(e,'password')}
                            // value={this.state.password}
                            />
                            <Grid item xs>
                                <Link className={classes.link}>
                                    Forgot password?
                        </Link>
                            </Grid>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                className="submit-btn"
                            // onClick={login()}
                            >
                                LOG IN
                    </Button>
                            <Grid>
                                <Grid item>
                                    <Typography className={classes.accountLink}>Don't have an account?&nbsp;</Typography>
                                    <Link className={classes.linkRegister}>
                                        {"Register"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withStyles(classes)(Login)