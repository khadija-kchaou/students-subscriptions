import Header from "../Headers/Header";
import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";
import {Button, Card, CardActionArea, CardActions, CardMedia, Typography,Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import componentStyles from "../../assets/theme/views/admin/tables";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import CardContent from "@material-ui/core/CardContent";
import axios from "axios";

const useStyles = makeStyles(componentStyles);

const ShowSessions = () => {
    const classes = useStyles();
    const [sessions, setSessions] = useState([])
    const [relaod, setReload] = useState(false);

    useEffect(() => {
        getSessions();
    }, [relaod])


    const getSessions = () => {
        axios.get('http://127.0.0.1:8000/sessions/')
            .then(result =>
                setSessions(result.data)
            )
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
                        title="Sessions List"
                        titleTypographyProps={{
                            component: Box,
                            marginBottom: "0!important",
                            variant: "h3",
                        }}
                    />
                    <TableContainer>
                        <Box
                            component={Table}
                            alignItems="center"
                            marginBottom="0!important"
                        >
                            {sessions.map((session) => (
                            
                            <Grid container spacing={2}>
                                 <Grid item xs={6} lg={8} >

                                <Card >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            src= {session.avatar}
                                            alt="img"    />
                                        <CardContent>
                                            <Typography gutterBottom variant="h2" component="div">
                                                {session.session_name}
                                            </Typography>
                                             <Typography variant="body2" color="text.secondary">
                                                 <i className="fas fa-calendar" ></i>  {session.session_date}
                                                <br/>
                                                <i className="fas fa-hourglass"></i>  {session.start_time}
                                                <br/>
                                             <b>Type : </b>    {session.type}

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="success" variant="contained">
                                            Register
                                        </Button>
                                         <Button size="small" color="primary" variant="contained">
                                            More infos..
                                        </Button>
                                    </CardActions>
                                </Card>
                                </Grid>
                                </Grid>
                            ))}

                        </Box>
                    </TableContainer>

                </Card>
            </Container>


        </>
    )
}


export default ShowSessions;
