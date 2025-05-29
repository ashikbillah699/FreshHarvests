import React, { useEffect, useState } from 'react';

const useAllUsers = () => {
   const [users, setUsers] = useState(null)
       const allUserData = async () => {
           try {
               const res = await fetch("https://code-commando.com/api/v1/users")
               const data = await res.json();
               setUsers(data.data)
           }
           catch (err) {
               console.log(err.message);
           }
       }
   
       useEffect(() => {
           allUserData()
       }, [])
   
       return [users];
};

export default useAllUsers;