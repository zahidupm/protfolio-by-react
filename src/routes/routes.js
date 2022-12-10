import Contact from "../Pages/Home/Contact/Contact";
import Projects from "../Pages/Home/Projects/Projects";
import Resume from "../Pages/Home/Resume/Resume";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            }, 
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/resume',
                element: <Resume></Resume>
            }
        ]
    }
])

export default routes;