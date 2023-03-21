import {useState} from 'react'

const Profile = (props) => {
    const [count, setCount] = useState(0);
    const [count2,setCount2] = useState(0);
return (
    <div>
        <h2>profile component {props.name} Count: {count}  {count2}</h2>
        <button onClick={()=> {setCount(2000)
            setCount2(5000)}}>Click me..</button>
    </div>
)
}
export default Profile;