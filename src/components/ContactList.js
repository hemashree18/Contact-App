import React from "react";

const ContactList=(props) =>{
    console.log(props);

    const renderContactList=props.contacts.map((contact)=>{
        return(
            <div className="item">
                <div className="content">
                    <div className="header"> contact.name</div>
                    <div>contact.email</div>
                </div>
                <i className="trast alternate outlone icon"></i>
            </div>
        );

    })
    return(
        <div className="ui called list">
            renderContactList
        Contact list
        </div>
    )
}
export default ContactList()