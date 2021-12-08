import React, {useEffect, useState} from 'react';
import Header from "../Headers/Header";
import Container from "@material-ui/core/Container";
import {Box, Card, TextField} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import componentStyles from "../../assets/theme/views/admin/tables";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(componentStyles);


const UpdateProtector = (props) => {
    const initialProtectorState = {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        establishment: '',
        start_date: '',
        end_date: '',
        login: '',
        password: ''
    };

    const [currentProtector, setCurrentProtector] = useState(initialProtectorState);

    const getProtector = id => {
        axios.get(`http://127.0.0.1:8000/protectors/${id}/`)
            .then(response => {
                setCurrentProtector(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getProtector(props.match.params.id);
    }, [props.match.params.id]);


    const history = useHistory();


    const UpdateProtector = (e) => {
        const id = props.match.params.id
        axios.put(`http://127.0.0.1:8000/protectors/${id}/`, currentProtector)
            .then(response => {
                history.push("/admin/protectors")

            })
            .catch(e => {
                console.log(e);
            });
    }

    const {register, handleSubmit, formState: {errors}} = useForm();
    const classes = useStyles();


    const handleInputChange = event => {
        const {name, value} = event.target;
        setCurrentProtector({...currentProtector, [name]: value});
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
                        title={currentProtector.first_name + ' ' + currentProtector.last_name}
                        titleTypographyProps={{
                            component: Box,
                            marginBottom: "0!important",
                            variant: "h3",
                        }}
                    />
                    <CardContent>
                        <form onSubmit={handleSubmit(UpdateProtector)}>
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
                                            <TextField
                                                variant="filled"
                                                name="first_name"
                                                type="text"
                                                {...register('first_name')}
                                                fullWidth
                                                value={currentProtector.first_name}
                                                onChange={handleInputChange}
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
                                            <TextField
                                                variant="filled"
                                                autoComplete="off"
                                                name="last_name"
                                                type="text"
                                                {...register('last_name')}
                                                fullWidth
                                                value={currentProtector.last_name}
                                                onChange={handleInputChange}
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
                                            <TextField
                                                variant="filled"
                                                autoComplete="off"
                                                name="email"
                                                type="email"
                                                {...register('email')}
                                                fullWidth
                                                value={currentProtector.email}
                                                onChange={handleInputChange}
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
                                            <TextField
                                                variant="filled"
                                                autoComplete="off"
                                                name="phone_number"
                                                type="integer"
                                                {...register('phone_number')}
                                                fullWidth
                                                value={currentProtector.phone_number}
                                                onChange={handleInputChange}
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
                                            <TextField
                                                variant="filled"
                                                autoComplete="off"
                                                name="establishment"
                                                type="text"
                                                {...register('establishment')}
                                                fullWidth
                                                value={currentProtector.establishment}
                                                onChange={handleInputChange}
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

                                            <TextField
                                                variant="filled"
                                                autoComplete="off"
                                                name="start_date"
                                                type="date"
                                                {...register('start_date')}
                                                fullWidth
                                                value={currentProtector.start_date}
                                                onChange={handleInputChange}
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
                                            <TextField
                                                variant="filled"
                                                autoComplete="off"
                                                name="end_date"
                                                type="date"
                                                {...register('end_date')}
                                                fullWidth
                                                value={currentProtector.end_date}
                                                onChange={handleInputChange}
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
                                            <TextField
                                                variant="filled"
                                                autoComplete="off"
                                                name="login"
                                                type="text"
                                                {...register('login')}
                                                fullWidth
                                                value={currentProtector.login}
                                                onChange={handleInputChange}
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
                                            <TextField
                                                variant="filled"
                                                autoComplete="off"
                                                name="password"
                                                type="text"
                                                {...register('password')}
                                                fullWidth
                                                value={currentProtector.password}
                                                onChange={handleInputChange}
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
                                    UPDATE
                                </Button>
                            </Box>

                        </form>


                    </CardContent>
                </Card>
            </Container>
        </>
    )


}

export default UpdateProtector;
