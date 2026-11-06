import { useEffect } from "react";
import axios from "axios";

function Dummydata() {

    // Our own JavaScript object
    const employee = {
        id: 101,
        name: "John",
        salary: 5000
    };

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/1")
             .then(response => {
                 console.log(response.data);
             });
    }, []);

    return (
        <div>
            <h2>Employee Details</h2>
            <p>Id: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>Salary: {employee.salary}</p>
        </div>
    );
}

export default Dummydata;