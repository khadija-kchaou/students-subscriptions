import React, { useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import Header from "../Headers/Header";
import Container from "@material-ui/core/Container";
import CardHeader from "@material-ui/core/CardHeader";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import componentStyles from "../../assets/theme/views/admin/tables";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {useHistory} from "react-router-dom";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FilledInput from "@material-ui/core/FilledInput";
const useStyles = makeStyles(componentStyles);

const AddProtector = () => {
      const { register, handleSubmit, reset, formState:{errors}} = useForm();
    const classes = useStyles();
    const theme = useTheme();


    // user state for form
    const [protector, setProtectors] = useState(null);

    // effect runs on component mount
    useEffect(() => {
        // simulate async api call with set timeout
        setTimeout(() => setProtectors(
            { first_name: '', last_name: '', email: '',
                phone_number: '', establishment: '',  start_date: '', end_date: '',
                login: '', password: '',}), 1000);
    }, []);

    // effect runs when user state is updated
    useEffect(() => {
        // reset form with user data
        reset(protector);
    }, [protector]);

    let history = useHistory()

    const saveProtector = (data) => {
    axios.post('http://127.0.0.1:8000/protectors/', data)
        .then(response => {
          setProtectors({
              data
          });
       history.push("/admin/protectors")
        })
        .catch(e => {
          console.log(e);
        });
  };


    return (
        <>
            <Header/>
            <Container
               maxWidth={false}
               component={Box}
               marginTop="-6rem"
               classes={{root: classes.containerRoot}}
            >
                <Card classes={{root: classes.cardRoot}}>
                    <CardHeader
                        className={classes.cardHeader}
                        title="ADD PROTECTOR"
                        titleTypographyProps={{
                            component: Box,
                            marginBottom: "0!important",
                            variant: "h3",
                        }}
                    />

                    <CardContent>
                        {protector &&
                        <form onSubmit={handleSubmit(saveProtector)}>
                            <Grid container spacing={1}>
                               
                                    <Grid item xs={12} lg={6}>
                                    <FormGroup>
                                        <FormLabel>First Name *</FormLabel>
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
                                                name="first_name"
                                                type="text"
                                                {...register('first_name', { required: true }) }
                                                fullWidth
                                                margin="dense"
                                            />
                                            {errors.first_name && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormGroup>
                                        <FormLabel>Last Name *</FormLabel>
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
                                                name="last_name"
                                                type="text"
                                                {...register('last_name', { required: true }) }
                                                fullWidth
                                                margin="dense"
                                            />
                                            {errors.last_name && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormGroup>
                                        <FormLabel>Email *</FormLabel>
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
                                                name="email"
                                                type="email"
                                                {...register('email', { required: true }) }
                                                fullWidth
                                                margin="dense"
                                            />
                                            {errors.email && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormGroup>
                                        <FormLabel>Phone Number *</FormLabel>
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
                                                name="phone_number"
                                                type="integer"
                                                {...register('phone_number', { required: true }) }
                                                fullWidth
                                                margin="dense"
                                            />
                                            {errors.phone_number && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={12}>
                                    <FormGroup>
                                        <FormLabel>Establishment *</FormLabel>
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
                                                name="establishment"
                                                type="text"
                                                {...register('establishment', { required: true }) }
                                                fullWidth
                                                margin="dense"
                                            />
                                            {errors.establishment && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormGroup>
                                        <FormLabel>Start Date *</FormLabel>
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
                                                name="start_date"
                                                type="date"
                                                {...register('start_date', { required: true }) }
                                                fullWidth
                                                margin="dense"
                                            />
                                            {errors.start_date && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormGroup>
                                        <FormLabel>End Date *</FormLabel>
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
                                                name="end_date"
                                                type="date"
                                                {...register('end_date', { required: true }) }
                                                fullWidth
                                                margin="dense"
                                            />
                                            {errors.end_date && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormGroup>
                                        <FormLabel>Login *</FormLabel>
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
                                                name="login"
                                                type="text"
                                                {...register('login', { required: true }) }
                                                fullWidth
                                                margin="dense"
                                            />
                                            {errors.login && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={6}>
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
                                                type="text"
                                                {...register('password', { required: true }) }
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
                                  ADD
                                </Button>
                              </Box>

                    </form>
                }

                    </CardContent>
                </Card>

               </Container>
           </>


    )
}
export default AddProtector;
