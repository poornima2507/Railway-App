import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Search = () => {
    const [data, setData] = useState(
        {
            "name": ""
        }
    )
    const [result, changedResult] = useState([])

    const deleteTicket = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8085/delete", input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success"){
                    alert("Successfully deleted")
                }
                else{
                    alert("Error in deletion")
                }
            }
        ).catch().finally()

    }
    const inputHandler = (event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        axios.post("http://localhost:8085/search",data).then(
            (response)=>{
                changedResult(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        ).finally()
    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Enter Bus Name</label>
                                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-primary" onClick={readValue}>Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Source</th>
                                            <th scope="col">Destination</th>
                                           
                                            <th scope="col">Phone No</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {result.map(
                                            (value,index)=>{
                                                return <tr>
                                            
                                                <td>{value.name}</td>
                                                <td>{value.age}</td>
                                                <td>{value.source}</td>
                                                <td>{value.destination}</td>
                                                
                                                <td>{value.phoneno}</td>
                                                <td><button className="btn btn-danger" onClick={()=>{deleteTicket(value._id)}}>Delete</button></td>
                                            </tr>
                                            }
                                        )}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search