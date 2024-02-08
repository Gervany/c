import { useEffect, useState } from 'react';
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser';
import UserCard from './components/UserCard';
import Navbar from './components/Navbar';

function App () {

  const [infoUpdate, setInfoUpdate] = useState()
  const [closeForm, setCloseForm] = useState(true)

  const baseUrl = 'https://localhost:8080'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl, setCloseForm)

  useEffect(() => {
    getUsers('/users')
  }, [])

  console.log(users)

  const handleOpenForm = () => {
    setCloseForm(false)
  }
  return (
    <div>  
      <Navbar handleOpenForm={handleOpenForm} />
      <FormUser
       createUser={createUser}
       infoUpdate={infoUpdate} 
       updateUser={updateUser}
       setInfoUpdate={setInfoUpdate}
       closeForm={closeForm}
       setCloseForm={setCloseForm}
      />
      <div className='cards__global'>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}
  
export default App
