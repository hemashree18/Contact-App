import React from "react";

class AddContact extends React.Component{
    render(){
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui from">
                    <div className="field">
                        <label>name</label>
                        <input type="text" name="name" placeholder="Name"/>
                     </div>
                     <div className="field">
                        <label>name</label>
                        <input type="text" name="name" placeholder="Name"/>
                     </div>
                     <button className="ui button blue"></button>
                </form>
            </div>
        )
    }

}

export default AddContact;