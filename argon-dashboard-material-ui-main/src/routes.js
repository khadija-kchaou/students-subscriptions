// core components
import ShowCenters from "components/centers/ShowCenters";


// @material-ui/icons components
import AddCenter from "./components/centers/AddCenter";
import UpdateCenter from "./components/centers/UpdateCenter";
import CenterDetails from "components/centers/CenterDetails";
import ShowProtectors from "./components/protectors/ShowProtectors";
import AddProtector from "./components/protectors/AddProtector";
import UpdateProtector from "./components/protectors/UpdateProtector";
import ProtectorDetails from "./components/protectors/ProtectorDetails";
import ShowSessions from "./components/sessions/ShowSessions";
import AddSession from "./components/sessions/AddSession";
import {Add, List, Tv} from "@material-ui/icons";
import axios from 'axios';
import Login from "auth/Login";
import Register from "auth/Register";

axios.defaults.baseURL = "http://127.0.0.1:8000";


var routes = [
    {
        name: "Home",
        icon: Tv,
        iconColor: "Primary",
        layout: "/admin",
    },

    { divider: true },


    {
        path: "/centers",
        name: "Centers List",
        icon: List,
        iconColor: "Primary",
        component: ShowCenters,
        layout: "/admin",
    },

    {
        path: "/add-center",
        name: "Add Center ",
        icon: Add,
        iconColor: "Primary",
        component: AddCenter,
        layout: "/admin",
      

    },
    { divider: true },

    {
        path: "/edit-center/:id",
        name: "Update Center",
        icon: "L text-primary",
        component: UpdateCenter,
        layout: "/admin",
        invisible: true,
    },

    {
        path: "/center/:id",
        name: "Center Details ",
        icon: "ni ni-tv-2 text-primary",
        component: CenterDetails,
        layout: "/admin",
        invisible: true,
    },
    {
        path: "/protectors",
        name: "Protectors List",
        icon: List,
        iconColor: "Primary",
        component: ShowProtectors,
        layout: "/admin",
    },
    {
        path: "/addprotector",
        name: "AddProtector",
        icon: Add,
        iconColor: "Primary",
        component: AddProtector,
        layout: "/admin",
    },
    { divider: true },

    {
        path: "/updateprotector/:id",
        name: "Update Protector",
        icon: "ni ni-tv-2 text-primary",
        component: UpdateProtector,
        layout: "/admin",
        invisible: true,

    },
    {
        path: "/protector/:id",
        name: "Protector Details ",
        icon: "ni ni-tv-2 text-primary",
        component: ProtectorDetails,
        layout: "/admin",
        invisible: true,

    },
      {
       path: "/sessions",
       name: "Sessions List",
       icon: List,
       iconColor: "Primary",
      component: ShowSessions,
       layout: "/admin",
     },
         {
       path: "/addsession",
       name: "AddSession",
       icon: Add,
       iconColor: "Primary",
      component: AddSession,
       layout: "/admin",
     },

     {
        path: "/login",
        name: "Login",
        icon: Add,
        iconColor: "Primary",
       component: Login,
        layout: "/auth",
        invisible: true,

      },

      {
        path: "/register",
        name: "Register",
        icon: Add,
        iconColor: "Primary",
       component: Register,
        layout: "/auth",
        invisible: true,

      },

   
    
];
export default routes;
