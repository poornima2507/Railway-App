import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Add = () => {
    const [data,setData] = useState(
        {
            "name":"",
            "age":"",
            "source":"",
            "destination":"",
            "phoneno":""
        }
    )
    const inputHandler = (event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    axios.post("http://localhost:8085/add",data).then(
        (response)=>{
            console.log(data)
            if (response.data.status=="success"){
                alert("Successfully Added")
            }
            else{
                alert("Error")
            }
        }
    ).catch().finally()
}
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" name='age' value={data.age} onChange={inputHandler} />
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Source</label>
                                <input type="text" className="form-control" name='source' value={data.source} onChange={inputHandler}/>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Destination</label>
                                <input type="text" className="form-control" name='destination' value={data.destination} onChange={inputHandler} />
                            </div>
                        </div>
                       
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Phone no</label>
                                <input type="text" className="form-control" name='phoneno' value={data.phoneno} onChange={inputHandler}/>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Book Ticket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add