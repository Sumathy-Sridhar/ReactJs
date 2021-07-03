import './Student.css';

import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import DisplayForm from './DisplayForm';

export default function Studentprofile() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object({
        firstname : Yup.string().required("*Firstname is mandatory"),
        lastname : Yup.string().required("*Lastname is mandatory"),
        email : Yup.string().email("INvalid Email").required("Pls Enter valid Email"),
        age:Yup.number().typeError("Enter a valid age").min(20," Minimum Age is 20").max(90,"Max age is 90"),
        phonenumber : Yup.string().matches(phoneRegExp,"*Phone number is invalid"),
        college:Yup.string().required("*College name is mandatory"),
        department:Yup.string().required("*Department name is required")
    }) 
    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
            firstname:'',
            lastname:'',
            age:0,
            email:'',
            phonenumber: ''
        },
        validationSchema,
        onSubmit(values) {
            console.log("=============Submitted");
            console.log(values);
        }
    }) 
    
    return (
           <div>
               <div className="container-sm">
               <div class="col-sm-8">
               <div class="card">
               <div className="card-header">STUDENT DETAILS</div>
               <div className="card-body">
               <form  onSubmit={handleSubmit} noValidate>
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>First Name</h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                               <input  placeholder="Enter your First Name" name="firstname" onChange={handleChange} values={values.firstname}/> 
                             <h3> {errors.firstname ? errors.firstname : null}</h3> 
                           </div>
                   </div>
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>Last Name</h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                           <input  placeholder="Enter your Last Name" name="lastname" onChange={handleChange} values={values.lastname}/> 
                           <h3>{errors.lastname ? errors.lastname : null}</h3>
                           </div>
                    </div>
                    <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>Age: </h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                               <input  placeholder="Enter your Age" name="age" onChange={handleChange} values={values.age}/>
                               <h3>{errors.age ? errors.age : null}</h3>
                           </div>
                   </div>
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>Email Id: </h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                               <input  placeholder="Enter your Email Id" name="email" onChange={handleChange} values={values.email}/>
                               <h3>{errors.email ? errors.email : null} </h3>
                           </div>
                   </div>
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>College Name: </h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                               <input  placeholder="Enter your college name" name="college" onChange={handleChange} values={values.college}/>
                               <h3>{errors.college ? errors.college : null} </h3>
                           </div>
                   </div>
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>Department</h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                           <input  placeholder="Enter your Department" name="department" onChange={handleChange} values={values.department}/>
                           <h3>{errors.department? errors.department : null}</h3>
                           </div>
                   </div>
                   
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>Contact Number: </h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                               <input  placeholder="Enter your Contact number"name="phonenumber" onChange={handleChange} values={values.phonenumber}/>
                               <h3> {errors.phonenumber ? errors.phonenumber : null} </h3>
                           </div>
                   </div>
                   <button class="btn btn-success" >Submit </button>
                    </form>
                </div>
            </div>                
        </div>
    </div>
    <DisplayForm data={values}/>
</div>
    )
}
