import React from "react";

const Contact = () => (

<div className="col-sm-12 col-lg-9 col-xl-6">
        <div className="card bg-dark shadow">
            <div className="card-body">
                <h1 className="card-title" title="Contact">Contact Me</h1>
                <hr></hr>   
                <form action="https://formsubmit.co/jshallcross1@icloud.com" method="POST">
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" name="name" required></input>
                        <input type="hidden" name="_next" value="https://jshallcross.github.io/react-portfolio/"
                    </div>

                    <div className="form-group">
                        <label >Email</label>
                        <input type="email" className="form-control" name="email" required ></input>
                    </div>
                    
                    <div className="form-group">
                        <label >Message</label>
                        <textarea className="form-control" name="content" required rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn submit btn-lg m-2" title="Submit">Submit</button>
                </form>
            </div>
        </div>  
    </div>

    
);

export default Contact;