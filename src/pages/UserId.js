import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

function UserId() {

    const location = useLocation();
    const [Post, setPost] = useState([])
    
    useEffect(()=> {
        const FetchData = async () => {

            try {

                const results = await axios(`https://gorest.co.in/public/v1/users/${location.state.userId}/posts`)
                setPost(results.data.data)
                
            } catch (error) {

                console.log(error)
            }
        }

        FetchData()
    },[])

    const renderPosts = () => {
        return Post.map( (Post) =>(

            <div > 
                <li key={Post.id}>
                    <h3>{Post.title}</h3>
                    <h3>{Post.body}</h3>
                </li>
            </div>
            
        ))
    }

    return (
        <div>
            <br/>
            <h3>{location.state.userId}</h3>
            <h3>{location.state.userName}</h3>
            <h3>{location.state.userEmail}</h3>
            <h3>{location.state.userGender}</h3>
            <h3>{location.state.userStatus}</h3>


            <br/>
            <br/>
            <div>
                {renderPosts()}
            </div>
        </div>
    );
}

export default UserId