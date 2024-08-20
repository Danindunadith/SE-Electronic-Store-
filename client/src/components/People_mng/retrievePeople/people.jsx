import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./people.css";

const People = () => {
    const [people, setPeople] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/peoples/getallpeople");
                setPeople(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const deletePeople = async (peopleId) => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/peoples/deletepeo/${peopleId}`);
            setPeople((prevPeople) => prevPeople.filter((people) => people._id !== peopleId));
            toast.success(response.data.msg, { position: 'top-right' });
        } catch (error) {
            console.log(error);
        }
    };

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text("Users List", 20, 10);
        doc.autoTable({
            head: [['Name', 'Email', 'Contact Number', 'Address']],
            body: people.map(person => [person.name, person.email, person.number, person.address])
        });
        doc.save("users_list.pdf");
    };

    const filteredPeople = people.filter((person) => {
        return (
            person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.address.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div className='PeopleTable'>
            <Link to={"/addpeople"} className='addButton'>Add New User</Link>
            <h3>Users List</h3>
            <input
                type="text"
                placeholder="Search by name, email, or contact number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    marginBottom: '20px', // Adds space below the input
                    padding: '10px',       // Adds padding inside the input
                    borderRadius: '5px',   // Rounds the corners
                    border: '1px solid #ccc', // Light gray border
                    width: '50%',          // Sets the input width to half of the container
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // Adds subtle shadow
                }}
            />

            <div className="tableclass">
                <table border={1} cellPadding={10} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>User's name</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Address</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPeople.map((person) => (
                            <tr key={person._id}>
                                <td>{person.name}</td>
                                <td>{person.email}</td>
                                <td>{person.number}</td>
                                <td>{person.address}</td>
                                <td className='actionButtons'>
                                    <Link to={`/editpeople/` + person._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                </td>
                                <td className='actionButtons'>
                                    <button onClick={() => deletePeople(person._id)}><i className="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default People;
