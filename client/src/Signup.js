import React from 'react';
import { useState } from 'react';

const Signup=()=>{
    return(
        <div>
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Register</h2>
                    <form>
                        <div className='mb-3'>
                            <label htmlFor='name'>
                                <strong>Name</strong>
                            </label>
                            <input
                                type='text'
                                placeholder='Enter Name'
                                autoComplete='off'
                                name='name'
                                className='form-control rounded-0'
                            ></input>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='email'>
                                <strong>Email:</strong>
                            </label>
                            <input
                                type='email'
                                placeholder='Enter Email'
                                autoComplete='off'
                                name='email'
                                className='form-control rounded-0'
                            ></input>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='password'>
                                <strong>Password</strong>
                            </label>
                            <input
                                type='password'
                                placeholder='Enter Password'
                                autoComplete='off'
                                name='password'
                                className='form-control rounded-0'
                            ></input>
                        </div>
                        <button type='submit' className='btn btn-success w-100 rounded-0'>
                            Register
                        </button>
                    </form>
                    <p>Already have an account</p>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup;
