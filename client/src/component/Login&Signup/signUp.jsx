import React,{useState} from 'react'
import { Link,useNavigate} from 'react-router-dom';
import Validations from '../Validations/SignupValidations'
import axios from 'axios'

function Signup() {
    const[values,setValues]=useState({
      name:'',
      email:'',
      password:''
    })
    const[errors,setErrors]=useState({})
    function handleInput(event){
      const {name,value}=event.target;
        setValues(prev=>({
          ...prev,
          [name] : value,
        }));
    }
    const navigate=useNavigate();
    function handleSubmit(event){
      event.preventDefault();//to avoid refreshing every time the submit button got clicked
      setErrors(Validations(values));
      if(errors.name===""&&errors.email===""&&errors.password===""){
        axios.post('http://localhost:8081/signup',values)
        .then(res=>{
            navigate('/');
        })
        .catch(err=>console.log(err));
      }

    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h1>Sign-up</h1>
        <form action="" onSubmit={handleSubmit}>
         <div className='mb-3'>
            <label htmlFor="name"><strong>Name</strong></label>
            <input type="text" placeholder="Enter Name" name='name' value={values.name}
            onChange={handleInput} className='form-control rounded-0'/>
             {errors.name &&<span className='text-danger'>{errors.name}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email" name='email'value={values.email}
            onChange={handleInput} className='form-control rounded-0'/>
            {errors.email&&<span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" name='password'value={values.password}
            onChange={handleInput} className='form-control rounded-0'/>
             {errors.password &&<span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>
          <p>You are agree to our terms and policies</p>
          <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup;