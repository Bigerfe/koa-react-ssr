import { matchPath } from "react-router";


const Root = ({ route }) => (
    <div>
        <h1>Root</h1>
        {/* child routes won't render without this */}
        {renderRoutes(route.routes)}
    </div>
);

const Home = ({ route }) => (
    <div>
        <h2>Home</h2>
    </div>
);

const Child = ({ route }) => (
    <div>
        <h2>Child</h2>
        {/* child routes won't render without this */}
        {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
    </div>
);

const GrandChild = ({ someProp }) => (
    <div>
        <h3>Grand Child</h3>
        <div>{someProp}</div>
    </div>
);


const routes = [
   
       
            {
                path: "/",
                exact: true,
                component: Home
            },
            {
                path: "/child/:id",
                component: Child,
                exact: true,
            },
                    {
                        path: "/child/:id/grand-child",
                        component: GrandChild,
                        exact: true,
                    }
 
    
];
const branch = matchPath(routes, "/child/23");

for(var item of routes){
   let match =  matchPath('/child/23',item);
   console.log(match);
}


export default {};