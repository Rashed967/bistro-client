
import { useContext } from 'react';
import { FaFacebook, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

  const socalLogin = () => {
    googleSignIn()
    .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
        if(loggedUser){
            const userInfo = {name : loggedUser.displayName, email : loggedUser.email}
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
  }
  
    return (
        <div>
            <div className="divider"></div>
            <div className='flex justify-center items-center'>
            <button onClick={socalLogin} className="btn btn-circle">
                <FaGoogle></FaGoogle>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;