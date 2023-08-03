import React from 'react'
import { useDispatch } from 'react-redux';
import { updateFormData } from '../store/actions';

export default function Add() {

    //Using Dispatcher
    const dispatch = useDispatch();
    const handleForm = (e) => {
        e.preventDefault();
        console.log(e);
        const data = {
            email: e.target[0].value,
            password: e.target[1].value,
            address: e.target[2].value,
            address2: e.target[3].value,
        }
        dispatch(updateFormData(data));
    }
    return (
        <div className='container'>
            <form className="row g-3" onSubmit={handleForm}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="text" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>


                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}
