import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user);
    }

    return (
        <div className='flex h-screen justify-center items-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-3xl">Log In</h2>
                    
                    <div className="divider text-secondary">OR</div>

                    <button 
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline"
                    >Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;