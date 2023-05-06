import React from "react";

const Modal = ({isShowForm, setIsShowForm, register, handleSubmit, submit, reset, setIsUserIdToEdit, isUserIdToEdit, errors}) => {

  const handleClickCloseModal = () => {
    setIsShowForm((isShowForm) => !isShowForm)
    reset({
      first_name: "",

        last_name: "",
      
        email: "",
      
        password: "",
      
        birthday: "",
      
        image_url: "",
    })
    setIsUserIdToEdit()
  }

  return (
    <section className={`fixed top-0 left-0 bottom-0 right-0 bg-black/40 flex justify-center items-center transition-opacity ${isShowForm ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      <form onSubmit={handleSubmit(submit)} className="bg-white p-4 grid gap-4 w-[300px] relative">
        <h3 className="text-2xl font-bold text-center">{isUserIdToEdit ? "Editar Usurio" : "Nuevo Usuario"}</h3>
        <div className="grid 1">
          <label className="text-xs font-semibold" htmlFor="first_name">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input className="border-[1px] rounded-sm bg-gray-150 p-1" required placeholder="first name" id="first_name" type="text"
          {...register("first_name")} />
        </div>
        <div className="grid 1">
          <label className="text-xs font-semibold" htmlFor="last_name">
            Apellido <span className="text-red-500">*</span>
          </label>
          <input className="border-[1px] rounded-sm bg-gray-150 p-1" required placeholder="Last name" id="last_name" type="text"
          {...register("last_name")} />
        </div>
        <div className="grid 1">
          <label className="text-xs font-semibold" htmlFor="email">
            Correo <span className="text-red-500">*</span>
          </label>
          <input className="border-[1px] rounded-sm bg-gray-150 p-1" required placeholder="Email" id="email" type="email"
          {...register("email")} />
        </div>
        <div className="grid 1">
          <label className="text-xs font-semibold" htmlFor="password">
            Contraseña <span className="text-red-500">*</span>
          </label>
          <input className="border-[1px] rounded-sm bg-gray-150 p-1" required placeholder="Password" id="password" type="password"
          {...register("password")} />
        </div>
        <div className="grid 1">
          <label className="text-xs font-semibold" htmlFor="birthday">
            Cumpleaños
          </label>
          <input className="border-[1px] rounded-sm bg-gray-150 p-1" id="birthday" type="date"
          {...register("birthday")} />
        </div>
        <div className="grid 1">
          <label className="text-xs font-semibold" htmlFor="image_url">
            URL imagen
          </label>
          <input className="border-[1px] rounded-sm bg-gray-150 p-1" placeholder="Image" id="image_url" type="text"
          {...register("image_url", {
            pattern: {
              value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/,
              message: "URL no valida"
            }
          })} />
          <span>{errors.image_url && errors.image_url.message}</span>
        </div>
        <i onClick={handleClickCloseModal} className='bx bx-x absolute top-2 right-2 hover:text-red-500 cursor-pointer'></i>
        <button className="bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm ">{isUserIdToEdit ? "Guardar cambio" : "Agregar nuevo usuario"}</button>
      </form>
    </section>
  );
};

export default Modal;
