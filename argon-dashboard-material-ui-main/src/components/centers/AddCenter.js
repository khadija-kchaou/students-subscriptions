import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import Header from "../Headers/Header";
import Container from "@material-ui/core/Container";
import CardHeader from "@material-ui/core/CardHeader";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import {useTheme} from "@material-ui/core/styles";
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
import swal from 'sweetalert2';
import { useCookies } from 'react-cookie';


const useStyles = makeStyles(componentStyles);
window.Swal = swal;

const AddCenter = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const classes = useStyles();
    const theme = useTheme();
    const [token] = useCookies(['mytoken'])



    // user state for form
    const [center, setCenter] = useState(null);

    const config = {
        headers: {
            'Authorization': `Token ${token['mytoken']}`
        }
    }

    // effect runs on component mount
    useEffect(() => {
        // simulate async api call with set timeout
        setTimeout(() => setCenter(
            {center_name: '', establishment: '', address: ''}), 1000);
    }, []);

    // effect runs when user state is updated
    useEffect(() => {
        // reset form with user data
        reset(center);
    }, [center]);

    let history = useHistory()

    const saveCenter = (data) => {
        axios.post('http://127.0.0.1:8000/certificationcenters/', data, config)
            .then(response => {
                setCenter({
                    data
                });

                history.push("/admin/centers")
                new swal(data.center_name,"is added successfully")

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
                        title="ADD CENTER"
                        titleTypographyProps={{
                            component: Box,
                            marginBottom: "0!important",
                            variant: "h3",
                        }}
                    />

                    <CardContent>
                        {center &&
                        <form onSubmit={handleSubmit(saveCenter)}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} lg={12}>
                                    <FormGroup>
                                        <FormLabel>Center Name *</FormLabel>
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
                                                name="center_name"
                                                type="text"
                                                {...register('center_name', {required: true})}
                                                fullWidth
                                                margin="dense"
                                            />
                                            {errors.center_name && <span>This field is required</span>}
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
                                                {...register('establishment', {required: true})}
                                                fullWidth
                                                margin="dense"
                                            />
                                            {errors.establishment && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={12}>
                                    <FormGroup>
                                        <FormLabel>Address *</FormLabel>
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
                                                name="address"
                                                type="text"
                                                {...register('address', {required: true})}
                                                fullWidth
                                                margin="dense"
                                            />
                                            {errors.address && <span>This field is required</span>}
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
export default AddCenter;
