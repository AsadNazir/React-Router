import React from 'react'
import react from '../assets/react.svg'
import '../CSS/custom.css'
import { useSelector } from 'react-redux';

export default function Cards() {

    const data = useSelector(state => state.formData);
    console.log(data);


    return (
        <div className="album py-5 bg-light">
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card shadow-sm">
                            <div className='thumbnail card-body'>
                                <img src={react} alt="image" />
                            </div>
                            <div className="card-body">
                                <h3 className='card-title'>{data.email}</h3>
                                <p className="card-text">{data.password + " | " + data.address}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
