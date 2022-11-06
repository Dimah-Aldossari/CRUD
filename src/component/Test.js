import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom'

function Test() {
    const [state, setstate] = useState([])
    let { id } = useParams();

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)

            .then((response) => {
                console.log(response.data.id);
                // console.log(id);

                setstate([response.data]);
            }).catch(err => {
                console.log(err);
            })

    }, [])
    return (
        <div>

            {state.map((items, id) => {
                return (
                    <div key={id}>
                        <p>{items.name}</p>
                        <img src={items.image} width="20%"></img>
                        <p>{items.gender}</p>
                        <p>{items.created}</p>
                    </div>
                )

            })}
        </div>
    )
}

export default Test