import UserCard from "./UserCard"

const UsersList = ({users, deleteUser, handLeClickEdit}) => {
  return (
    <section className="grid gap-10 auto-rows-auto grid-cols-[repeat(auto-fill,_250px)] justify-center">
        {
            users.map((user) => (
                <UserCard key={user.id} user={user} deleteUser={deleteUser} handLeClickEdit={handLeClickEdit}/>
            ))
        }
    </section>
  )
}

export default UsersList