
const UserCard = ({ user, deleteUser, setInfoUpdate, handleOpenForm }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }

    const handleEdit = () => {
        setInfoUpdate(user)
        handleOpenForm()
    }

  return (
    <article className="card__user__global">
        <h3 className="card__name">#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
       <ul>
        <li><span className="card__item">Email: </span><span className="card__register">{user.email}</span></li>
        <li><span className="card__item">Birthday: </span><span className="card__register">{user.birthday}</span></li>
       </ul>
       <div className="card__buttom">
         <button className="card__delete" onClick={handleDelete}>Delete</button>
         <button className="card__edit" onClick={handleEdit}>Edit</button>
       </div>
    </article>
  )
}

export default UserCard
