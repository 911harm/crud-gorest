import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SeachForName(props) {
    const [search, setSearch] = useState("")
    const Search = (e) => {
        e.preventDefault()
        console.log(props)
    }
    return (
        <div className="search">
            <form className="search-form" onSubmit={Search}>
                <input onChange={(e) => setSearch(e.target.value)} className="addForm-input" type="text" placeholder="Search for Name" />
                <button className="btn" type="submit">
                    <Link to={`/search-for-name/${search}`}>Search</Link>
                    </button>
            </form>
        </div>
    )
}
