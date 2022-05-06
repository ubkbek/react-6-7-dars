import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import './../components/header/header.css'

function UserSingle() {

    const {id} = useParams();
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + '/users/' + id)
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err=>console.log(err))

        fetch(process.env.REACT_APP_URL + '/posts?userId=' + id)
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err=>console.log(err))
    }, [id]);

    return (
        <div className="container">
            <div>
                <img src="https://picsum.photos/150" alt="rasm" />
                <h3>{user.name}</h3>
                <small>{user.username}</small>
                <p>{user.email}</p>
            </div>


            <h2>Posts</h2>
            {posts.length > 0 && <ul>{
                posts.map(post=>(
                    <li>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </li>
                ))
                }</ul>}

        </div>
     );
}

export default UserSingle;