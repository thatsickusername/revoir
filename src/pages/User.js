import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../css/User.css'

function User() {

    const history = useHistory()
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
    
    
    
   

    const renderUsers = () => {
        return user.map( (user) =>(

            <div className="UserCard" > 
                <div className="UserContainer" key={user.id}>
                    <h3 className="UserName" onClick={ () => {
                                        history.push('/users/user-id',

                                        { userId: user.id,
                                        userName: user.name,
                                        userEmail: user.email,
                                        userGender: user.gender,
                                        userStatus: user.status
                                        })
                                    }
                                }
                    >{user.name}</h3>

                    <br/>

                    <a className="UserMail" href={ "mailto:" + user.email }> <h3>{user.email} </h3></a>
                </div>
            </div>
            
        ))
    }

    return (
        <div className="User">
            <br/>
            {renderUsers()}
        </div>
    );
}

export default User;