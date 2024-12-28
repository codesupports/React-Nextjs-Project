"use client"
import React, { useEffect, useState } from 'react'

const About = () => {
  interface User {
    id: number;
    name: string;
  }

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
      }
      catch {
        console.log('error')
      }
    }
    fetchUsers();
  }, [])


  return <div className='px-6'>
    <h1 className='text-[20px] bg-slate-300 p-2'>About us page</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id} className='border-b py-2 pl-4'>{user.name}</li>
      ))}
    </ul>
  </div>
}
export default About;
