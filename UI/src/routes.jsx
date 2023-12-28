import { Navigate, useRoutes } from "react-router-dom";
import Attendence from "./components/attendence/Attendence";
import Home from "./components/dashboard/Home";  
import Report from "./components/attendence/Report";

export default function Router() {
    return (
        useRoutes([
            {
                path: "/Dashboard",
                element: <Home />,  
                children: [
                    { element: <Navigate to="/Dashboard/attendence" />, index: true },
                    { path: "attendence", element: <Attendence />, index: true },
                    { path: "report", element: <Report />, index: true },

                ]
            },
        ])
    )
}
