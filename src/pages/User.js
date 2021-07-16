import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory} from 'react-router';

function User() {


    const [user, setUser] = useState([])


    useEffect(()=> {
        const FetchData = async () => {

            try {

                const results = await axios('https://gorest.co.in/public/v1/users')
                setUser(results.data.data)
                
            } catch (error) {

                console.log(error)
            }
        }

        FetchData()
    },[])
    
    
    const history = useHistory()
    const handleClick = () => {
        
        console.log('handle click launced')
        history.push('/users/user-id', { id: user.id })
    }
   

    const renderUsers = () => {
        return user.map( (user) => (

            <div className="content"> 
                <li key={user.id}>
                    <button onClick={handleClick()} type="link">{user.name}</button>
                    <br/>
                    {/* <a href={ "mailto:" + user.email } >{user.email}</a> */}
                </li>
            </div>

        ))
    }

    return (
        <div>
            <br/>
            {renderUsers()}
        </div>
    );
}

export default User;