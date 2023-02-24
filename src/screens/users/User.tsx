import {Link, Outlet, useParams} from "react-router-dom";
import {users} from "../../db";
import {IFollowers} from "../../utils/OutletContexts";
import {useEffect, useState} from "react";

function User() {
    const {userId} = useParams();
    const [follower, setFollower] = useState<IFollowers>();
    useEffect(()=>{
        setFollower({
            userName:users[Number(userId)-1].name,
            userId:Number(userId)
        })
    },[])
    return (
        <>
            <h1>{`User ID : ${userId}, Name is ${users[Number(userId)-1].name}`}</h1>
            <Link to={"followers"}>See Followers</Link>
            <Outlet context={{follower}}/>
        </>
    );
}

export default User;