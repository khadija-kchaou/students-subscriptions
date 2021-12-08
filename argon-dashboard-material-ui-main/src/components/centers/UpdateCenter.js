import React, {useEffect, useState} from 'react';
import Header from "../Headers/Header";
import Container from "@material-ui/core/Container";
import {Box, Card, FormGroup, TextField} from "@material-ui/core";
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
import FormControl from "@material-ui/core/FormControl";
import swal from 'sweetalert2';
import { useCookies } from 'react-cookie';

window.Swal = swal;

const useStyles = makeStyles(componentStyles);
 

const UpdateCenter = (props) => {

   const {register,handleSubmit, formState: {errors}} = useForm();
    const classes = useStyles();
    const [centerInput, setCenter] = useState([]);
    const [errorInput, setError] = useState([]);
    const [token] = useCookies(['mytoken'])

    let history = useHistory()

    const config = {
        headers: {
            'Authorization': `Token ${token['mytoken']}`
        }
    }

    const initialCenterState = {
        center_name: '',
        establishment: '',
        address: '',
    };

    const [currentCenter, setCurrentCenter] = useState(initialCenterState);

    const getCenter = id => {
        axios.get(`/certificationcenters/${id}/`, config)
            .then(response => {
                setCurrentCenter(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getCenter(props.match.params.id);
    }, [props.match.params.id]);

    const handleInput = event => {
        const {name, value} = event.target;
        setCurrentCenter({...currentCenter, [name]: value});
    };

    
    const UpdateCenter = (e) => {
        const id = props.match.params.id
        axios.put(`/certificationcenters/${id}/`, currentCenter, config)
            .then(response => {
                history.push("/admin/centers")
                new swal('center edited successfully')

            })
            .catch(e => {
                console.log(e);
            });
    }
   
   

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
                        title={currentCenter.center_name}
                        titleTypographyProps={{
                            component: Box,
                            marginBottom: "0!important",
                            variant: "h3",
                        }}
                    />
                    <CardContent>

                        <form onSubmit={handleSubmit(UpdateCenter)}>
                            <Grid container spacing={1}>
                                <Grid item xs={6} sm={12}>
                                    <FormGroup>
                                        <FormLabel> Center Name * </FormLabel>
                                        <FormControl
                                            variant="filled"
                                            component={Box}
                                            width="100%"
                                            marginBottom="rem!important"
                                        >
                                            <TextField
                                                name="center_name"
                                                type="text"
                                                {...register('center_name')}
                                                fullWidth
                                                variant="filled" 
                                                value={currentCenter.center_name}
                                                onChange={handleInput}
                                            />
                                            {errors.center_name && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={6} sm={12}>
                                    <FormGroup>
                                        <FormLabel> Establishment * </FormLabel>
                                        <FormControl
                                            variant="filled"
                                            component={Box}
                                            width="100%"
                                            marginBottom="1rem!important"
                                        >
                                            <TextField
                                                name="establishment"
                                                type="text"
                                                {...register('establishment')}
                                                fullWidth
                                                variant="filled"
                                                value={currentCenter.establishment}
                                                onChange={handleInput}
                                            />
                                            {errors.establishment && <span>This field is required</span>}

                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={6} sm={12}>
                                    <FormGroup>
                                        <FormLabel> Address * </FormLabel>
                                        <FormControl
                                            variant="filled"
                                            component={Box}
                                            width="100%"
                                            marginBottom="1rem!important"
                                        >
                                            <TextField
                                                name="address"
                                                type="text"
                                                {...register('address')}
                                                fullWidth
                                                variant="filled"
                                                value={currentCenter.address}
                                                onChange={handleInput}
                                            />
                                            {errors.address && <span className="text-danger">This field is required</span>}

                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                            </Grid>

                            <Box mt={3}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
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

export default UpdateCenter;
