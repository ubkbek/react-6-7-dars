import { useEffect, useState } from "react";


function Posts() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState('all');
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + '/posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
            setAllPosts(data)
        })
        .catch(err => console.log(err))

        fetch(process.env.REACT_APP_URL + "/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);

    useEffect(() => {
        if(userId === 'all'){
            return setPosts(allPosts)
        }

        const filtredPosts = allPosts.filter(post => post.userId === userId)
        setAllPosts(filtredPosts)

    }, [userId, allPosts]);

    const handleChangeUser = (evt) => setUserId(evt.target.value);
    return (
        <div>
            <h1>Posts</h1>

            <select onChange={handleChangeUser}>
                <option value="all">All</option>
                {
                   users.map(user=>(
                       <option key={user.id} value={user.id}>{user.name}</option>
                   ))
                }
            </select>

            {
                posts.length > 0 && <ul>
                    {
                        posts.map(post => (
                            <li key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
     );
}

export default Posts;