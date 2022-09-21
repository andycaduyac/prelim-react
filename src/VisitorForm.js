const VisitorForm = () => {
    return (
        <div className="container offset-md-6">
            <div className="card">
                <div className="card-header">
                    <h3>Visitor Entry</h3>
                </div>
                <div className="card-body">
                    <div className="form-group mb-3">   
                        <label for="lastname">Last Name</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Enter Last Name" />
                    </div>
                    <div className="form-group mb-3">   
                        <label for="firstname">First Name</label>
                        <input type="text" className="form-control" id="firstname" placeholder="Enter First Name" />
                    </div>
                    <div className="form-group mb-3">   
                        <label for="lastname">Purpose of Visit</label>
                        <input type="text" className="form-control" id="lastname" placeholder="What is your purpose" />
                    </div>
                    <div className="form-group mb-3">   
                        <label for="lastname">Date</label>
                        <input type="date" className="form-control" id="lastname" />
                    </div>
                    <button className="btn btn-primary px-5" type="submit">Submit</button>
                </div>
            </div>
        </div>
    );
}
 
export default VisitorForm;