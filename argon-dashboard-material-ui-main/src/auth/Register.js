import React, {useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import {useForm} from "react-hook-form";
import { CardContent } from "@material-ui/core";
// @material-ui/icons components

import FormGroup from "@material-ui/core/FormGroup";
import { FormLabel } from "@material-ui/core";

// core components
import componentStyles from "assets/theme/views/auth/register.js";

import { useHistory } from "react-router";
import axios from "axios";

const useStyles = makeStyles(componentStyles);

function Register() {

  const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const classes = useStyles();
    const theme = useTheme();

    let history = useHistory()




    // user state for form
    const [user, setUser] = useState(null);


    // effect runs on component mount
    useEffect(() => {
        // simulate async api call with set timeout
        setTimeout(() => setUser(
            {username: '', password: ''}), 1000);
    }, []);

    // effect runs when user state is updated
    useEffect(() => {
        // reset form with user data
        reset(user);
    }, [user]);


    const addUser = (data) => {
        axios.post('http://127.0.0.1:8000/users/', data)
            .then(response => {

                setUser({
                    data
                });

                console.log(response.data)
                history.push("/auth/login")

            })
            .catch(e => {
                console.log(e);
            });
    }; 



  return (
    <>
      <Grid item xs={12} lg={6} md={8}>
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title={
              <Box
                fontSize="80%"
                fontWeight="400"
                component="small"
                color={theme.palette.gray[600]}
              >
                Sign up with
              </Box>
            }
            titleTypographyProps={{
              component: Box,
              textAlign: "center",
              marginBottom: "1rem!important",
              marginTop: ".5rem!important",
              fontSize: "1rem!important",
            }}
            subheader={
              <Box textAlign="center">
                <Box
                  component={Button}
                  variant="contained"
                  marginRight="2rem!important"
                  classes={{ root: classes.buttonRoot }}
                >
                  <Box component="span" marginRight="4px">
                    <Box
                      alt="..."
                      component="img"
                      width="20px"
                      className={classes.buttonImg}
                      src={
                        require("assets/img/icons/common/github.svg").default
                      }
                    ></Box>
                  </Box>
                  <Box component="span" marginLeft=".75rem">
                    Github
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  classes={{ root: classes.buttonRoot }}
                >
                  <Box component="span" marginRight="4px">
                    <Box
                      alt="..."
                      component="img"
                      width="20px"
                      className={classes.buttonImg}
                      src={
                        require("assets/img/icons/common/google.svg").default
                      }
                    ></Box>
                  </Box>
                  <Box component="span" marginLeft=".75rem">
                    Google
                  </Box>
                </Button>
              </Box>
            }
            

          ></CardHeader>
                              <CardContent classes={{ root: classes.cardContent }}>
                              <Box
              color={theme.palette.gray[600]}
              textAlign="center"
              marginBottom="1.5rem"
              marginTop=".5rem"
              fontSize="1rem"
            >
              <Box fontSize="80%" fontWeight="400" component="small">
                Or sign up with credentials
              </Box>
            </Box>
                                
          <form onSubmit={handleSubmit(addUser)}>
            
                            <Grid container spacing={1}>
                                <Grid item xs={12} lg={12}>
                                    <FormGroup>
                                        <FormLabel>Username *</FormLabel>
                                        <FormControl
                                            variant="filled"
                                            component={Box}
                                            width="100%"
                                            marginBottom="1rem!important"          
                                        >
                                            <Box
                                                paddingLeft="0.75rem"
                                                paddingRight="0.75rem"
                                                component={FilledInput}
                                                autoComplete="off"
                                                name="username"
                                                type="text"
                                                {...register('username', {required: true})}
                                                fullWidth
                                                margin="dense"
                                            />
                                            {errors.username && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={12}>
                                    <FormGroup>
                                        <FormLabel>Password *</FormLabel>
                                        <FormControl
                                            variant="filled"
                                            component={Box}
                                            width="100%"
                                            marginBottom="1rem!important"
                                        >
                                            <Box
                                                paddingLeft="0.75rem"
                                                paddingRight="0.75rem"
                                                component={FilledInput}
                                                autoComplete="off"
                                                name="password"
                                                type="password"
                                                {...register('password', {required: true})}
                                                fullWidth
                                                margin="dense"
                                            />
                                            {errors.password && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                
                            </Grid>

                            <Box mt={3}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit">
                                    Register
                                </Button>
                            </Box>

                        </form>
         </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Register;
