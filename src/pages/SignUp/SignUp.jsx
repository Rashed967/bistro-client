import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import{AuthContext} from '../../providers/AuthProvider'

const SignUp = () => {
  const {createUser} = useContext(AuthContext)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();  
  console.log(watch("example"));
  
  
  
  const onSubmit = data => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
    .then(result => {
      const user = result.user
      if(user){
        const userInfo = {name : user.name, email : user.email}
        fetch(`http://localhost:5000/users`, {
          method : "POST",
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            console.log(data)
            alert('user added')

          }
        })
        // console.log(user)
      }
    })
    .then(error => console.error(error))
    
  };
  

  return (

    <>
    <Helmet>
      <title>bistro || signup</title>
    </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name")} name='name' placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email")} name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register("password")} name='password' placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;