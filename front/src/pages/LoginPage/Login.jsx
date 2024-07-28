import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [name,setName] = useState(null)
  const [gender,setGender] = useState(null)
  const [error,setError] = useState({})
  const navigate = useNavigate()

  const handleValidation = (value)=>{
    let errorMsg = {}
    if(!value.name || value.name.trim() == ''){
      errorMsg.name='نام نمی تواند خالی باشد'
    }
    if(!value.gender || value.gender == -1){
      errorMsg.gender='جنسیت خود را انتخاب کنید'
    }
    setError(errorMsg)
    if(Object.keys(errorMsg).length !== 0){
      return 'error'
    }

    return null
  }
  const submit = (e) => {
    e.preventDefault()
    const validation = handleValidation({name,gender})
    if(validation != 'error'){
      localStorage.setItem('info',JSON.stringify({name,gender}))
      navigate('/chatroom')
    }
  }

  return (
    <div className='login d-flex flex-column gap-4 justify-content-start align-items-center vh-100 pt-5'>
      <h3 className='my-3'>چـــــت روم ســوکـت آی او</h3>
      <form className="form-box p-3 rounded-1 d-flex flex-column gap-3 py-5 col-3 align-items-center" onSubmit={submit}>
        <div className="form-group col-10 d-flex flex-wrap">
          <label className='p-1'>نام</label>
          <input type="text" className='form-control form-control-sm' name='name' onChange={e=>setName(e.target.value)} />
          {
            error.name &&
            <small className='form-error text-danger'>{error.name}</small>
          }
        </div>
        <div className="form-group col-10 d-flex flex-wrap">
          <label className='p-1'>جنسیت</label>
          <select className="form-select" onChange={e=>setGender(e.target.value)} defaultValue={-1}>
            <option value={-1} disabled>جنسیت خود را انتخاب کنید</option>
            <option value={1}>آقا</option>
            <option value={0}>خانم</option>
          </select>
          {
            error.gender &&
            <small className='form-error text-danger'>{error.gender}</small>
          }
        </div>
        <div className="form-group col-10 d-flex justify-content-center mt-3">
          <button type='submit' className='btn btn-sm btn-outline-dark py-2'>ورود به چت روم</button>
        </div>
      </form>
    </div>
  )
}

export default Login
