import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { list } from '../services/apiService';

const Students = () => {

    const [students, setCourses] = useState([]);

    useEffect(() => {
        list('students', data => {
            setCourses(data);
        })
    }, []);

    
    return (
    <div className='container'>
        <h2>Students</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Year Of Birth</th>
                    <th>Address</th>
                    <td><Link to='/students/0'>Add new</Link></td>
                </tr>
            </thead>
            <tbody>
                {students.map(c => (
                <tr key={c._id}>
                    <td>{c.firstName}</td>
                    <td>{c.lastName}</td>
                    <td>{c.yearOfBirth}</td>
                    <td>{c.address}</td>
                    <td>
                        <Link to={`/students/${c._id}`}>Edit</Link>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default Students;