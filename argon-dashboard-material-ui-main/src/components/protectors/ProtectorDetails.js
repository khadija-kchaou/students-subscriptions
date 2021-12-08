import React, {useEffect, useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import {useTheme} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import LocationOn from "@material-ui/icons/LocationOn";

// core components
import Header from "components/Headers/Header.js";

import componentStyles from "assets/theme/views/admin/profile.js";
import boxShadows from "assets/theme/box-shadow.js";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {Link} from "@material-ui/core";
import {Email, Phone} from "@material-ui/icons";

const useStyles = makeStyles(componentStyles);

const ProtectorDetails = (props) => {
    const [protectorInfo, setProtectorInfo] = useState([]);

    useEffect(() => {
        getProtector(props.match.params.id);
    }, [props.match.params.id]);

    const getProtector = id => {
        axios.get(`http://127.0.0.1:8000/protectors/${id}/`)
            .then(response => {
                setProtectorInfo(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    let history = useHistory()

    const deleteProtector = (id) => {
        axios.delete(`http://127.0.0.1:8000/protectors/${id}/`)
            .then(response => {
                if (response.status === 204) {
                    history.push("/admin/protectors")
                }
            }).catch(e => {
            console.log(e);
        });
    }


    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
            <Header/>
            {/* Page content */}
            <Container
                maxWidth={false}
                component={Box}
                marginTop="-6rem"
                classes={{root: classes.containerRoot}}

            >
                <Grid container>

                    <Grid

                        item
                        xs={12}
                        xl={12}
                        component={Box}
                        marginBottom="3rem!important"
                        classes={{root: classes.order1 + " " + classes.marginBottomXl0}}

                    >
                        <Card classes={{root: classes.cardRoot}}>
                            <Box component={Grid} container justifyContent="center">
                                <Grid item xs={12} lg={3}>
                                    <Box position="relative">
                                        <Box
                                            component="img"
                                            maxWidth="200px"
                                            borderRadius="50%"
                                            position="absolute"
                                            left="50%"
                                            boxShadow={boxShadows.boxShadow + "!important"}
                                            className={classes.profileImage}
                                        />
                                    </Box>
                                </Grid>
                            </Box>
                            <Box
                                component={CardHeader}
                                border="0!important"
                                textAlign="center"
                                paddingBottom="0!important"
                                paddingTop="8rem!important"
                                classes={{root: classes.cardHeaderRootProfile}}
                                subheader={
                                    <Box display="flex" justifyContent="space-between">
                                        <Link to={'/admin/updateprotector/' + protectorInfo.id}>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                color="primary"
                                            >
                                                EDIT
                                            </Button>
                                        </Link>

                                        <Button
                                            variant="contained"
                                            size="small"
                                            color="success"
                                            onClick={() => deleteProtector(protectorInfo.id)}
                                        >
                                            DELETE
                                        </Button>
                                    </Box>
                                }
                            />
                            <Box
                                component={CardContent}
                                classes={{root: classes.ptMd4}}
                                paddingTop="0!important"
                            >
                                <Box textAlign="center"
                                     padding="1rem 0"
                                     justifyContent="center"
                                     className={classes.mtMd5}
                                     marginTop="1rem">

                                    <Typography variant="h1">
                                        {protectorInfo.first_name + ' ' + protectorInfo.last_name}
                                    </Typography>

                                    <Box
                                        component={Typography}
                                        variant="h4"
                                        fontWeight="300!important"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Box
                                            component={LocationOn}
                                            width="1.25rem!important"
                                            height="1.25rem!important"
                                            marginRight="0.5rem"

                                        ></Box>
                                        {protectorInfo.establishment}
                                    </Box>
                                    <Box
                                        component={Typography}
                                        variant="h4"
                                        fontWeight="300!important"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"

                                    >
                                        <Box
                                            component={Email}
                                            width="1.25rem!important"
                                            height="1.25rem!important"
                                            marginRight="0.5rem"

                                        ></Box>
                                        {protectorInfo.email}
                                    </Box>

                                    <Box
                                        component={Typography}
                                        variant="h4"
                                        fontWeight="300!important"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"

                                    >
                                        <Box
                                            component={Phone}
                                            width="1.25rem!important"
                                            height="1.25rem!important"
                                            marginRight="0.5rem"

                                        ></Box>

                                        {protectorInfo.phone_number}
                                    </Box>


                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default ProtectorDetails;
