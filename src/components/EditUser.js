import Axios from 'axios';
import React, { useState } from 'react'
import Global from '../Global'
import swal from 'sweetalert';

export default function EditUser(props) {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("Male")
    const [Userstate, setUserState] = useState("Active")
    const [email, setEmail] = useState("")
    const handlerSub = (e) => {
        e.preventDefault();
        console.log(name,email,gender,Userstate)
        Axios.post(Global.Url, {
            name,
            email,
            gender,
            status: Userstate
        })
            .then(res => {
                console.log(res)
                if (res.data.code === 201) {
                    props.history.push("/")
                    swal("Good job!", `New User Created! with Id ${res.data.data.id}`, "success");

                }
            })
    }
    const handlerChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlerChangeName = (e) => {
        setName(e.target.value)
    }
    const handlerGender = (e) => {
        setGender(e.target.value)
    }
    const handlerUserState = (e) => {
        setUserState(e.target.value)
    }
    return (
        <div className="Add-user">
            <h2>Edit User</h2>
            <form onSubmit={handlerSub} className="addForm">
                <input className="addForm-input" onChange={handlerChangeName} value={name} name="name" type="text" placeholder="name" required />
                <input className="addForm-input" onChange={handlerChangeEmail} value={email} name="email" type="email" placeholder="email" required />
                <div className="selectors">
                    <div className="gender">
                        <p>Please select the gender:</p>
                        <div>
                            <input onChange={handlerGender} type="radio" name="gender" value="Male" />
                            <label htmlFor="Male">Male</label>
                        </div>
                        <div>
                            <input onChange={handlerGender} type="radio" name="gender" value="Female" />
                            <label htmlFor="Female">Female</label>
                        </div>
                        {/* <div>
                            <input onChange={handlerGender} type="radio" name="gender" value="Other" />
                            <label htmlFor="Other">Other</label>
                        </div> */}
                    </div>
                    <div className="status">
                        <label htmlFor="status">Select Status</label>
                        <select name="status" onChange={handlerUserState}>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                </div>
                <button type="submit"> ADD contact</button>
            </form>
        </div>
    )
}