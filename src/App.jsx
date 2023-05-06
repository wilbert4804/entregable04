import axios from "axios"
import { useEffect, useState } from "react"
import Modal from "./components/Modal"
import Header from "./components/Header"
import { useForm } from "react-hook-form"
import UsersList from "./components/UsersList"


const BASE_URL = "https://users-crud.academlo.tech/"

const DEFAULT_VALUES = {
  first_name: "",

        last_name: "",
      
        email: "",
      
        password: "",
      
        birthday: "",
      
        image_url: "",
}

function App() {

  const [users, setUsers] = useState([])

  const [isUserIdToEdit, setIsUserIdToEdit] = useState()

  const [isShowForm, setIsShowForm] = useState(false)

  const {register, handleSubmit, reset, formState: {errors}} = useForm()

  const submit = (data) => {
    //console.log(data)
    if(!data.birthday)
    {
      data.birthday = null;
    }

    if(!data.image_url)
    {
      data.image_url = null
    }
    console.log(data)
    if(isUserIdToEdit){
      editUser(data)
    }else{
      createUser(data)
    }
  
  }

  const createUser = (data) => {
    const URL = BASE_URL + "/users/"

    axios.post(URL, data)
    .then(() => {
      getAllUsers();
      reset(DEFAULT_VALUES);
      setIsShowForm(!isShowForm)
    })
    .catch((error) => console.log(error))
  } 

  const deleteUser = (id) => {
    const URL = BASE_URL + `/users/${id}/`
    axios.delete(URL)
    .then(() => getAllUsers())
    .catch((error) => console.log(error))
  }

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${isUserIdToEdit}/`

    axios.patch(URL, data)
    .then(() => {
      getAllUsers()
      reset(DEFAULT_VALUES);
      setIsShowForm(!isShowForm)
      setIsUserIdToEdit()
    })
    .catch((error) => console.log(error))
  }

const getAllUsers = () => {
  const URL = BASE_URL + "/users/"

    axios.get(URL)
    //.then((res) => console.log(res.data))
    .then((res) => setUsers(res.data))
    .catch((error) => console.log(error))
}

const handLeClickEdit = (data) => {
  setIsShowForm((isShowForm) => !isShowForm)
  reset(data)
  setIsUserIdToEdit(data.id)
}

  useEffect(() => {
    getAllUsers()
  }, [])
  return (
    <main className="font-sans">
      <Header setIsShowForm={setIsShowForm}/>
    <Modal register={register} handleSubmit={handleSubmit} isShowForm={isShowForm} setIsShowForm={setIsShowForm} submit={submit} reset={reset} setIsUserIdToEdit={setIsUserIdToEdit} isUserIdToEdit={isUserIdToEdit} errors={errors}/>
    <UsersList users = {users} deleteUser = {deleteUser} handLeClickEdit={handLeClickEdit}/>

    </main>
  )
}

export default App
