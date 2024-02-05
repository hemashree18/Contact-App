import React from "react";
import "./App.css";
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import ContactCard from "./ContactCard"

function App() {

  const contacts=[
    {
      id:"1",
      name:"hema",
      email:"hema@gmail.com",
    },
    {
      id:"2",
      name:"gsfhema",
      email:"hesfsdfma@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contact}/>
      {/*<ContactCard/>*/}
    </div>
  );
};//comment/

export default App;
