import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


function Care() {
    const [state, setstate] = useState([])


    let url = `https://rickandmortyapi.com/api/character`

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.log(response.data.results);
                setstate(response.data.results);
            })

    }, [])
    return (
        <div>

            {state.map((items, id) => {
                return (
                    <div key={id}>
                        <p>{items.name}</p>
                        <Link to={`/Test/${items.id}`}>
                            <img src={items.image} width="20%"></img>

                        </Link>
                        {/* <button  >Click me</button> */}
                    </div>
                )

            })}
        </div>
    )
}

export default Care