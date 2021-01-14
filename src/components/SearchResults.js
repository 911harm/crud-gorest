import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import User from './User'
import Global from '../Global'
import SeachForName from './SeachForName'


export default function SearchResults(props) {
    const [listItems, setListItems] = useState([])
    const [loading, setLoading] = useState(false)
    const reqList = () => {
        setLoading(true)
        Axios.get(Global.Url + "?name=" + name)
            .then(res => {
                if (res.data.data.length === 0) {
                    // code 200 ! void data
                    //redirect maybe
                    console.log(props)
                    setLoading(false)
                    setListItems(res.data.data)
                }
                else {
                    setLoading(false)
                    setListItems(res.data.data)
                }
            })
            .catch(() => setLoading(false))
    }
    let name = props.match.params.name

    useEffect(() => {
        reqList()
    }, [name])// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className="List">
            <h1>List Users</h1>
            <SeachForName></SeachForName>
            {listItems.length !== 0
                ?
                <ul>
                    {listItems.map(user => <li key={user.id}><User user={user} reqList={reqList}></User></li>)}
                </ul>
                : <div>
                    {loading ? <div className="spiner"></div>

                        : <div>No hay Resultados...</div>
                    }</div>
            }


        </div >
    )
}
