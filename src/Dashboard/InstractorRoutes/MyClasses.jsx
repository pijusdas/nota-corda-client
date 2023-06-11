import { useContext, useEffect, useState } from "react";
import useClass from "../../Hooks/useClass";
import { AuthContext } from "../../Provider/AuthProvider";

const MyClasses = () => {
    const [myclass,setMyclass] =useState([])
    const [classes] = useClass()
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        const loggedIntractorClass = classes.filter(clas => clas?.instractorEmail === user?.email  );
        setMyclass(loggedIntractorClass)
    },[classes,user.email])

    return (
        <div>
            {myclass?.length}
        </div>
    );
};

export default MyClasses;