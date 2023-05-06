const UserCard = ({user, deleteUser, handLeClickEdit}) => {
  return (
    <article className="border-2 rounded-md top-0 left-0 bottom-0 right-0">
        <div>
            <img className="w-[100px] aspect-[3/5] object-cover mx-auto rounded-md" src={user.image_url ? user.image_url : "/images/noProfile.jpg"} alt="user imagen" />
        </div>
        <h3 className="text-blue-950 font-bold text-center">{user.first_name} {user.last_name}</h3>
        <div className="flex justify-center">
        <div className="border w-11/12 items-center"></div>
        </div>
        <ul className="font-sans grid gap-2">
            <li>
                <h4 className="opacity-60 p-1">Correo</h4>
                <span className="p-1">{user.email}</span>
            </li>
            <li>
                <h4 className="opacity-60 p-1">Cumpleaños</h4>
                <span>
                    <i className="bx bx-gift p-2"></i>
                    {user.birthday}
                </span>
            </li>
        </ul>
        <div className="flex justify-center">
        <div className="border w-11/12 items-center"></div>
        </div>
        <div>
        <div className="text-right p-3">
            <button onClick={() => deleteUser(user.id)}>
                <i className='bx bxs-trash bg-gradient-to-t from-red-500 to-red-400 text-white border-2 rounded-md w-[30px] h-[30px]'></i>
                </button>
            <button onClick={() => handLeClickEdit(user)}>
                <i className='bx bx-pencil border-2 rounded-md w-[30px] h-[30px]' ></i>
                </button>
        </div>
        </div>
    </article>
  )
}

export default UserCard