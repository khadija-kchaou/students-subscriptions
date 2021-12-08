import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import { Typography} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons components
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import {Link} from "react-router-dom";
import * as action from '../actions/auth';

import { Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// core components 
import componentStyles from "assets/theme/views/auth/login.js";
const useStyles = makeStyles(componentStyles);


const Login = () => {
  const classes = useStyles();
  const theme = useTheme();

  const error = useSelector(state=> state.auth.error)
  const loading = useSelector(state => state.auth.loading)    
  const token = useSelector(state => state.auth.token)    
  const dispatch = useDispatch() 

 /* if (error){
      dispatch(errorMessage(error.data.detail, error.status))
  }*/
  const handleSubmit = (e) =>{
      e.preventDefault()
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      dispatch(action.authLogin(email, password))
      
  }
  if (token!==null){
      return <Redirect to="/"/>
  }

/*
    let history = useHistory()

    const initialFormData = Object.freeze({
      username: '',
      password: '',
    });
  
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim(),
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
  
      axiosInstance
        .post(`token/`, {
          username: formData.username,
          password: formData.password,
        })
        .then((res) => {
          localStorage.setItem('access_token', res.data.access);
          localStorage.setItem('refresh_token', res.data.refresh);
          axiosInstance.defaults.headers['Authorization'] =
            'JWT ' + localStorage.getItem('access_token');
            history.push('/admin/centers');
          console.log(res);
          console.log(res.data);
        });
    };
  


*/
  return (
    <>

      <Grid item xs={12} lg={5} md={7}>
      <form onSubmit={handleSubmit}>

        <Card classes={{ root: classes.cardRoot }}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Box
              color={theme.palette.gray[600]}
              textAlign="center"
              marginBottom="1rem"
              marginTop=".5rem"
              fontSize="2rem"
            >
              <Box fontSize="100%" fontWeight="800" component="small">
                Login
              </Box>
             
            </Box>

            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1rem!important"
            >
              <FilledInput
              id="username"
              name="username"
                autoComplete="off"
                type="text"
                placeholder="UserName"
                startAdornment={
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                }
                  />
            </FormControl>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1rem!important"
            >
              <FilledInput
              id="password"
              name="password"
                autoComplete="off"
                type="password"
                placeholder="Password"
                startAdornment={
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                }
                  />
            </FormControl>
            
              
            <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
              <Button color="primary" variant="contained"  type="submit"                          >
                             {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
                Sign in
              </Button>
             
            </Box>
               
            <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
            <Typography variant="h4">
              Don't have an account ?
           </Typography>
           <Link to={'/auth/register/'} className="text-decoration-none">
              <Button color="default" variant="contained">
                Register
              </Button>
             </Link>
            </Box>

          </CardContent>
        </Card>

        <Grid container component={Box} marginTop="1rem">
          <Grid item xs={6} component={Box} textAlign="left">
            <a
              href="#admui"
              onClick={(e) => e.preventDefault()}
              className={classes.footerLinks}
            >
              Forgot password
            </a>
          </Grid>
          
        </Grid>
        </form>

      </Grid>
    </>
  );
}

export default Login;
