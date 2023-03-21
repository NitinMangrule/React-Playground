import React from "react";

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state =  {
            count: 20,
            count2:10
        }
    }
    render(){
            return <div>
                <h1>Profile Class Component {this.props.name} {this.state.count} {this.state.count2}</h1>
            <button onClick={()=>{this.setState({ count: 400, count2:60008})}}>Click me...</button>
            </div>;
    }
}
export default Profile;
