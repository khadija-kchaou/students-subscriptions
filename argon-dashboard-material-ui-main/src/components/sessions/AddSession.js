import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import Header from "../Headers/Header";
import Container from "@material-ui/core/Container";
import CardHeader from "@material-ui/core/CardHeader";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import {useTheme} from "@material-ui/core/styles";
import {Box,MenuItem,Select } from "@material-ui/core";
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

const AddSession = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const classes = useStyles();
    const theme = useTheme();


    // user state for form
    const [session, setSessions] = useState(null);

    // effect runs on component mount
    useEffect(() => {
        // simulate async api call with set timeout
        setTimeout(() => setSessions(
            {
                avatar: null, session_name: '', session_date: '', duration: '',
                start_time: '', expire_date: '', number_machines: '', type: '',
                class_number: '', meet_link: '',
            }), 1000);
    }, []);

    // effect runs when user state is updated
    useEffect(() => {
        // reset form with user data
        reset(session);
    }, [session]);

    let history = useHistory()

    const saveSession = (data) => {
        axios.post('http://127.0.0.1:8000/sessions/', data)
            .then(response => {
                setSessions({
                    data
                });
                history.push("admin/sessions")
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
                        title="ADD SESSION"
                        titleTypographyProps={{
                            component: Box,
                            marginBottom: "0!important",
                            variant: "h3",
                        }}
                    />

                    <CardContent>
                        {session &&
                        <form onSubmit={handleSubmit(saveSession)}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} lg={6}>
                                <FormGroup>
                                        <FormLabel>Session Cover</FormLabel>
                                        <FormControl
                                            variant="filled"
                                            component={Box}
                                            width="100%"
                                            marginBottom="1rem!important" >
                                            <Box
                                                paddingleft="0.75rem"
                                                paddingright="0.75rem"
                                                component={FilledInput}
                                                autoComplete="off"
                                                name="avatar"
                                                type="file"
                                                {...register('avatar', {required: true})}
                                                margin="dense"
                                            />
                                        </FormControl>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Session Name *</FormLabel>
                                        <FormControl
                                            variant="filled"
                                            component={Box}
                                            width="100%"
                                            marginBottom="1rem!important" >
                                            <Box
                                                paddingleft="0.75rem"
                                                paddingright="0.75rem"
                                                component={FilledInput}
                                                autoComplete="off"
                                                name="session_name"
                                                type="text"
                                                {...register('session_name', {required: true})}
                                                
                                                margin="dense"
                                            />
                                            {errors.session_name && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormGroup>
                                        <FormLabel>Session Date *</FormLabel>
                                        <FormControl
                                            variant="filled"
                                            component={Box}
                                            width="100%"
                                            marginBottom="1rem!important"
                                        >
                                            <Box
                                                paddingleft="0.75rem"
                                                paddingright="0.75rem"
                                                component={FilledInput}
                                                autoComplete="off"
                                                name="session_date"
                                                type="date"
                                                {...register('session_date', {required: true})}
                                                
                                                margin="dense"
                                            />
                                            {errors.session_date && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormGroup>
                                        <FormLabel>Duration (min) *</FormLabel>
                                        <FormControl
                                            variant="filled"
                                            component={Box}
                                            width="100%"
                                            marginBottom="1rem!important"
                                        >
                                            <Box
                                                paddingleft="0.75rem"
                                                paddingright="0.75rem"
                                                component={FilledInput}
                                                autoComplete="off"
                                                name="duration"
                                                type="integer"
                                                {...register('duration', {required: true})}
                                                
                                                margin="dense"
                                            />
                                            {errors.duration && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormGroup>
                                        <FormLabel>Start Time *</FormLabel>
                                        <FormControl
                                            variant="filled"
                                            component={Box}
                                            width="100%"
                                            marginBottom="1rem!important"
                                        >
                                            <Box
                                                paddingleft="0.75rem"
                                                paddingright="0.75rem"
                                                component={FilledInput}
                                                autoComplete="off"
                                                name="start_time"
                                                type="time"
                                                {...register('start_time', {required: true})}
                                                
                                                margin="dense"
                                            />
                                            {errors.start_time && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={12}>
                                    <FormGroup>
                                        <FormLabel>Expire Date *</FormLabel>
                                        <FormControl
                                            variant="filled"
                                            component={Box}
                                            width="100%"
                                            marginBottom="1rem!important"
                                        >
                                            <Box
                                                paddingleft="0.75rem"
                                                paddingright="0.75rem"
                                                component={FilledInput}
                                                autoComplete="off"
                                                name="expire_date"
                                                type="date"
                                                {...register('expire_date', {required: true})}
                                                
                                                margin="dense"
                                            />
                                            {errors.expire_date && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormGroup>
                                        <FormLabel>Number of machines *</FormLabel>
                                        <FormControl
                                            variant="filled"
                                            component={Box}
                                            width="100%"
                                            marginBottom="1rem!important"
                                        >

                                            <Box
                                                paddingleft="0.75rem"
                                                paddingright="0.75rem"
                                                component={FilledInput}
                                                autoComplete="off"
                                                name="number_machines"
                                                type="integer"
                                                {...register('number_machines', {required: true})}
                                                
                                                margin="dense"
                                            />
                                            {errors.number_machines && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormGroup>
                                        <FormLabel>Type *</FormLabel>
                                        <FormControl
                                            variant="filled"
                                            component={Box}
                                            width="100%"
                                            marginBottom="1rem!important"
                                        >
                                            <Select 
                                                paddingleft="0.75rem"
                                                paddingright="0.75rem"
                                                component={FilledInput}
                                                autoComplete="off"
                                                name="type"
                                                {...register('type', {required: true})}
                                                margin="dense"
                                                className={classes.inputSmall}
                                            >
                                                <MenuItem value="VIRTUAL">VIRTUAL</MenuItem>
                                                <MenuItem  value="FACETOFACE">FACETOFACE</MenuItem>
                                            </Select>

                                            {errors.type && <span>This field is required</span>}
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormGroup>
                                        <FormLabel>Class Number </FormLabel>
                                        <i>(if in presence)</i>
                                        <FormControl
                                            variant="filled"
                                            component={Box}
                                            width="100%"
                                            marginBottom="1rem!important"
                                        >
                                            <Box
                                                paddingleft="0.75rem"
                                                paddingright="0.75rem"
                                                component={FilledInput}
                                                autoComplete="off"
                                                name="class_number"
                                                type="integer"
                                                {...register('class_number', {required: false})}
                                                
                                                margin="dense"
                                            />
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormGroup>
                                        <FormLabel>Meet Link </FormLabel>
                                        <i>(if virtual)</i>
                                        <FormControl
                                            variant="filled"
                                            component={Box}
                                            width="100%"
                                            marginBottom="1rem!important"
                                        >
                                            <Box
                                                paddingleft="0.75rem"
                                                paddingright="0.75rem"
                                                component={FilledInput}
                                                autoComplete="off"
                                                name="meet_link"
                                                type="text"
                                                {...register('meet_link', {required: false})}
                                                
                                                margin="dense"
                                            />
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
export default AddSession;
