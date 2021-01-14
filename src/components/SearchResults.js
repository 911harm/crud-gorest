import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import User from './User'
import Global from '../Global'
import SeachForName from './SeachForName'


export default function SearchResults(props) {
    const [listItems, setListItems] = useState([])
    let name= props.match.params.name
    const reqList = () => {
        Axios.get(Global.Url+"?name="+name)
            .then(res => {
                setListItems(res.data.data)
            })
    }
    useEffect(() => {
        reqList()
    }, [name])

    return (
        <div className="List">
            <h1>List Users</h1>
            <SeachForName></SeachForName>
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
