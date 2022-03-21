import React from 'react';
import {useFormik} from 'formik'
function YoutubeForm(props) {
   
     const initialValues={
        name:'',
        email:'',
        channel:'',
    }

   const  onSubmit = values=>{
        console.log('FormData' ,values)
    } 

    const  validate=values=>{
        //will get values.name values.email and values.channel
       let errors={}
        if (!values.name){
            errors.name='Required'
        }
        if (!values.email){
         errors.email='Required'
     }
     else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
         errors.email='Invalid email format'
     }
     if (!values.channel){
         errors.channel='Required'
     }

       return errors
     }

   const formik =useFormik({
       initialValues,
       onSubmit,
        validate,
   })
   console.log('form errors', formik.values)
   
    return (
    <div> 
    <h1>This is youtube form</h1>
        <form onSubmit={formik.handleSubmit}>
       
    <div className='form-control'>
       <label htmlFor='name'>Name</label>
       <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>
       {/*By adding onChange  and values formik will automaticaly track form field values*/}
       {formik.errors.name ? <div className='error'> {formik.errors.name}</div> : null}
       </div>

       <div className='form-control'>
       <label htmlFor='email'>E-mail</label>
       <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
       {formik.errors.email ? <div div className='error'> {formik.errors.email}</div> : null}
       </div>
       

       <div className='form-control'>
       <label htmlFor='channel'>Channel</label>
       <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}/>
       {formik.errors.channel ? <div className='error'> {formik.errors.channel}</div> : null}
       </div>

     <button type='Submit'> Submit</button>
       </form>  
        </div>
    )
}

export default YoutubeForm