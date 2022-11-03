import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


import axios from "axios";
function Read() {
    const [APIData, setAPIData] = useState([]);

    let url = "https://62d3e34acd960e45d44f7ccf.mockapi.io/ToDo"


    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setAPIData(response.data);
            })

    }, [])


    //DELETE


    const onDelete = (id) => {
        console.log(id);
        axios.delete(`https://62d3e34acd960e45d44f7ccf.mockapi.io/ToDo/${id}`).then(res => {
            console.log(res);
            setAPIData(APIData.filter(del => {
                return del.id != id
            }))
        })

    };

    return (
        <div>
            {APIData.map((data, index) => {
                return (
                    <div key={index}>
                        <p>FName: {data.fName}</p>
                        <p>LName: {data.lName}</p>
                        <button onClick={() => { onDelete(data.id) }}>Delet</button>
                        <Link to="/Ubdate">
                            <button>Update</button></Link>


                    </div>
                )
            })}

        </div>
    )
}

export default Read