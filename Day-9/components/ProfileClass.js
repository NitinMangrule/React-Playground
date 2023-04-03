import React from "react";

class Profile extends React.Component {

    constructor(props){
        
        super(props);
        this.state =  {
                name: 'Dummy Name',
                location: 'Dummy Location',
                avatar_url: ''
        };
        console.log('Child - constructor ', this.props.name);
    }
    render(){
        console.log('Child - render ', this.props.name);
            return <div>
                {/* <h1>Profile Class Component</h1> */}
                <h1>Name: {this.state.name}</h1>
                <h2>Location: {this.state.location}</h2>
                <img src={this.state.avatar_url} alt='Profile Image'/>
            </div>;
    }

    async componentDidMount(){
        console.log('Child - component did mount ', this.props.name);
        const data = await fetch('https://api.github.com/users/nitinmangrule');
        const json = await data.json();
        console.log(json);
        this.setState(json);
    } 

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
}
export default Profile;
