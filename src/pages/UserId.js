import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import '../css/UserId.css'

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
    },[location.state.userId])

    const renderPosts = () => {

        if (Post.length===0) {
            return <div className="UserCard"><h3>This User Hasn't Posted Anything</h3></div>
            
        } else {
            return Post.map( (Post) =>(

                <div className="UserCard" key={Post.id}>
                        <h3>{Post.title}</h3>
                        <h3>{Post.body}</h3>
                </div>                
            ))
        }
        
    }

    return (
        <div className="User">
            
            <br/>

            <div className="UserCard">
                <h3>{location.state.userId}</h3>
                <h3>{location.state.userName}</h3>
                <h3>{location.state.userEmail}</h3>
                <h3>{location.state.userGender}</h3>
                <h3>{location.state.userStatus}</h3>
            </div>
                

            <br/>
            <br/>
            <div>
                <br/>
                <br/>

                <h2 className="Heading" >User Posts</h2>
                {renderPosts()}
            </div>
        </div>
    );
}

export default UserId