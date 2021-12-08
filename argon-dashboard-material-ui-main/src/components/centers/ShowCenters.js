import React, { useEffect, useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";



// @material-ui/lab components 
import Pagination from "@material-ui/lab/Pagination";

// core components
import Header from "components/Headers/Header.js";

import componentStyles from "assets/theme/views/admin/tables.js";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert2';
import { useCookies } from 'react-cookie';
import axios from "axios";

const useStyles = makeStyles(componentStyles);
window.Swal = swal;

const ShowCenters = () => {
    const classes = useStyles();
    //const theme = useTheme();
    const [centers, setCenters] = useState([])
    const [token] = useCookies(['mytoken'])
    const [relaod, setReload] = useState(false);

    let history = useHistory();

    const config = {
        headers: {
            'Authorization': `Token ${token['mytoken']}`
        }
    }

    useEffect(() => {

        axios.get('http://127.0.0.1:8000/certificationcenters/', config)
            .then(resp => {
                setCenters(resp.data)
            })
            .catch(error => console.log(error))

    }, [])


    useEffect(() => {
        if (!token['mytoken']) {
            history.push('/admin/centers')
            //window.location.href = '/'

        }
    }, [token])

    
    const DeleteCenter = (id) => {
        axios.delete(`http://127.0.0.1:8000/certificationcenters/${id}/`, config)
            .then(response => {
                if (response.status === 204) {
                    history.push("/admin/centers")
                    setReload(true)
            new swal('center deleted successfully')
                }
            }).catch(e => {
            console.log(e);
        });
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
                        title="Centers List"
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
                                <TableRow   key="ID"
>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}

                                    >
                                        ID
                                    </TableCell>
                                    
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        name
                                    </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        establishment
                                    </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        address
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
                            {centers && centers.map(center => {
                                return  (
                                    <TableRow key={center.id}>
                                        <TableCell
                                            classes={{root: classes.tableCellRoot}}
                                        >
                                            {center.id}
                                        </TableCell>
                                       
                                        <TableCell classes={{root: classes.tableCellRoot}}
                                        >
                                            {center.center_name}
                                        </TableCell>
                                        <TableCell classes={{root: classes.tableCellRoot}}

                                        >
                                            {center.establishment}
                                        </TableCell>
                                        <TableCell classes={{root: classes.tableCellRoot}}
                                       >
                                            {center.address}
                                        </TableCell>
                                        <TableCell classes={{root: classes.tableCellRoot}}>
                                           <Link to={'/admin/center/' + center.id} className="text-decoration-none">
                                                <Button color="primary" variant="contained" size="small">
                                                    <i className="fas fa-eye"></i>
                                                </Button>
                                            </Link>
                                            <Link to={'/admin/edit-center/' + center.id}>
                                                <Button color="primary" variant="contained" size="small">
                                                    <i className="fas fa-edit"></i>
                                                </Button>
                                            </Link>
                                            <Button color="primary" variant="contained" size="small"
                                                    onClick={() => DeleteCenter(center.id)}>
                                                <i className="fas fa-trash"></i>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                    
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

export default ShowCenters;
