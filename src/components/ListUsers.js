import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import User from './User'
import Global from '../Global'


export default function ListUsers() {
    const [listItems, setListItems] = useState([])
    const reqList = () => {
        Axios.get(Global.Url)
            .then(res => {
                setListItems(res.data.data)
            })
    }
    useEffect(() => {
        reqList()
    }, [])

    return (
        <div className="List">
            <h1>List Users</h1>
            {listItems.length !== 0
                ?
                <ul>

                    {listItems.map(user => <li key={user.id}><User user={user} reqList={reqList}></User></li>)}
                </ul>

                :
                <div className="spiner">Loading...</div>
            }


        </div >
    )
}
