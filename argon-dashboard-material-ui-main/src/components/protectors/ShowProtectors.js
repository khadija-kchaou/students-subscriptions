import React, { useEffect, useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import {Table} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "@fortawesome/fontawesome-free/css/all.min.css";


// @material-ui/lab components
import Pagination from "@material-ui/lab/Pagination";

// core components
import Header from "components/Headers/Header.js";

import componentStyles from "assets/theme/views/admin/tables.js";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(componentStyles);


const ShowProtectors = () => {
    const classes = useStyles();
    //const theme = useTheme();
    const [protectors, setProtectors] = useState([])
    const [relaod, setReload] = useState(false);

    useEffect(() => {
        getProtectors();
    }, [relaod])


    const getProtectors = () => {
        axios.get('http://127.0.0.1:8000/protectors/')
            .then(result =>
                setProtectors(result.data)
            )
            .catch(e => {
                console.log(e);
            });
    }

    // const { id } = useParams();
    // let history = useHistory();


    const DeleteProtectors = (id) => {
        axios.delete(`http://127.0.0.1:8000/protectors/${id}/`)
            .then(response => {
                if (response.status === 204) {
                    setReload(true)

                }
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <>
            <Header />
            {/* Page content */}
            <Container
                maxWidth={false}
                component={Box}
                marginTop="-6rem"
                classes={{ root: classes.containerRoot }}
            >
                <Card classes={{ root: classes.cardRoot }}>
                    <CardHeader
                        className={classes.cardHeader}
                        title="Protectors List"
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
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                        key="ID"

                                    >
                                        ID
                                    </TableCell>
                                   
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                        key="firstName"
                                    >
                                        First Name
                                    </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                        key="lastName"
                                    >
                                        Last Name
                                    </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                        key="establishment"
                                    >
                                        Establishment
                                    </TableCell>

                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {protectors.map((protector) => (
                                    <TableRow>
                                        <TableCell
                                            classes={{ root: classes.tableCellRoot }}
                                            key="{protector.id}"
                                        >
                                            {protector.id}
                                        </TableCell>
                                    
                                        <TableCell classes={{ root: classes.tableCellRoot }}
                                            key="{protector.first_name}"
                                        >
                                            {protector.first_name}
                                        </TableCell>
                                        <TableCell classes={{ root: classes.tableCellRoot }}
                                            key="{protector.last_name}"
                                        >
                                            {protector.last_name}
                                        </TableCell>
                                        <TableCell classes={{ root: classes.tableCellRoot }}
                                            key="{protector.establishment}"
                                        >
                                            {protector.establishment}
                                        </TableCell>
                                        <TableCell classes={{ root: classes.tableCellRoot }}>
                                            <Link to={'/admin/protector/' + protector.id}
                                                className="text-decoration-none">
                                                <Button color="primary" variant="contained" size="small">
                                                    <i className="fas fa-eye"></i>
                                                </Button>
                                            </Link>
                                            <Link to={'/admin/updateprotector/' + protector.id}>
                                                <Button color="primary" variant="contained" size="small">
                                                    <i className="fas fa-edit"></i>
                                                </Button>
                                            </Link>
                                            <Button color="primary" variant="contained" size="small"
                                                onClick={() => DeleteProtectors(protector.id)}>
                                                <i className="fas fa-trash"></i>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Box>
                    </TableContainer>
                    <Box
                        classes={{ root: classes.cardActionsRoot }}
                        component={CardActions}
                        justifyContent="flex-end"
                    >
                        <Pagination count={3} color="primary" variant="outlined" />
                    </Box>
                </Card>
            </Container>
        </>
    );

}

export default ShowProtectors;
