import { useState, useEffect } from "react";
import VisitorForm from "./VisitorForm";
import VisitorList from "./VisitorList";

const Home = () => {
    const [visitors, setVisitors] = useState(null);
    const handleDelete = (id) => {
        const newVisitors = visitors.filter(visitor => visitor.id !== id);
        setVisitors(newVisitors);
    }
    
    useEffect(() => {
        fetch('http://localhost:8000/visitors')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setVisitors(data);
        })
    }, []);
    
    return ( 
        <div className="container m-5">
            <div className="row">
                <div className="col-md-4">
                    <VisitorForm />
                </div>
                
                <div className="col-md-8">
                    {visitors && <VisitorList visitors={visitors} title="List of Visitors" handleDelete={handleDelete} />}
                </div>
                
            </div>
            
        </div>
    );
}
 
export default Home;