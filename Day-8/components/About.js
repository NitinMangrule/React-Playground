import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileName from "./Profile";
import React from "react";
// const About = () => {

//     return <div>
//         <h1>About Us Page</h1>
//         <p> {" "}
//             This is Namaste React..</p>
//         {/* <Outlet></Outlet> */}

//         <ProfileClass name='Nitin'/>
//         <ProfileName name='Mangrule'/>
//     </div>
// };


class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            state1: 123
        }
    }
    render(){
        return <div>
        <h1>About Us Page</h1>
        <p> {" "}
            This is Namaste React..</p>
        {/* <Outlet></Outlet> */}

        <ProfileClass name='Nitin'/>
        <ProfileName name='Mangrule'/>
    </div>
    }
}
export default About;