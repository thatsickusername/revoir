import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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

            <div > 
                <div key={user.id}>
                <li onClick={ () => {
                                    history.push('/users/user-id',

                                    { userId: user.id,
                                      userName: user.name,
                                      userEmail: user.email,
                                      userGender: user.gender,
                                      userStatus: user.status
                                     })
                                }
                            }
                >{user.name}</li>
                

                <br/>
                <a href={ "mailto:" + user.email } >{user.email}</a>
                </div>
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