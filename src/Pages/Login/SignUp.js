import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../Firebase.init";
import useTocken from '../../Hooks/useTocken';
import Loading from "../Shared/Loading/Loading";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, uperror] = useUpdateProfile(auth);
    const [token] = useTocken(user || guser);
    const navigate = useNavigate();


    let signInErrorMessage;
    if( loading || gloading || updating){
        return <Loading></Loading>
    }
   
    if(error || gerror || uperror){
        signInErrorMessage = <p className="text-red-500">{error?.message || gerror?.message || uperror?.message}</p>
    }
    if(token){
      navigate('/appointment');
    }
    if (user || guser) {
      console.log(user);
    }
    const onSubmit =async (data) => {
      
      console.log(data);
      await createUserWithEmailAndPassword(data.email,data.password);
      await updateProfile({displayName:data.name}  );
    //   navigate('/appointment')
    };
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body ">
            <h2 className=" text-center text-2xl font-bold">Sign-up</h2>
  
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                 
                </label>
                <input
                  type="text"
                  placeholder="Type Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name",  {
                      required:{
                          value:true,
                          message:'Name is required'
                      }
                    })}
                />
                <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                  
            
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                 
                </label>
                <input
                  type="email"
                  placeholder="Type Your email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email",  {
                      required:{
                          value:true,
                          message:'email is required'
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
                        message: 'provide a valid email' // JS only: <p>error message</p> TS only support string
                      }
                    })}
                />
                <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                  
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} 
                </label>
              </div>
  
  
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                 
                </label>
                <input
                  type="password"
                  placeholder="Type Your password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password",  {
                      required:{
                          value:true,
                          message:'password is required'
                      },
                      minLength: {
                        value: 6,
                        message: 'Min Length must be 6' // JS only: <p>error message</p> TS only support string
                      }
                    })}
                />
                <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                  
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>} 
                </label>
              </div>
             
            
              {signInErrorMessage}
              <input className="btn w-full text-white" type="submit" value='Sign Up' />
            </form>
             <p>Already have an account?<Link className="text-secondary" to='/login'>Please Login</Link></p>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-accent"
            >
              Continue wuth google
            </button>
          </div>
        </div>
      </div>
    );
};

export default SignUp;