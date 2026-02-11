import { createBrowserRouter } from "react-router";
import App from "./App";
import Body from "../src/components/Body";
import About from "../src/components/About";
import Productinfo from "./components/Productinfo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            }
            , {
                path: "/prodinfo/:resId",
                element: <Productinfo></Productinfo>
            }
        ]
    }
]);