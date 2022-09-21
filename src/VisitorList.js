import {Table} from 'react-bootstrap';

const VisitorList = ({visitors, title, handleDelete}) => {


    return ( 
        <div className="container col-md-8 offset-4">
            <h1>{title}</h1>
                <Table size="md">
                    <thead>
                        <th>Name</th>
                        <th>Purpose</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {visitors.map((visitor) => (
                            <tr key={visitor.id}>
                                <td>{visitor.lastname}, {visitor.firstname}</td>
                                <td>{visitor.purpose}</td>
                                <td>{visitor.date}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => handleDelete(visitor.id) }>Delete</button> 
                                    
                                </td>                 
                            </tr>
                        ))}       
                    </tbody>
                                
                </Table>

        </div>
    );
}
 
export default VisitorList;