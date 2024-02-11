import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar
        img="https://www.southparkshop.com/cdn/shop/products/SP-Cartman-Stand-40_800x.jpg?v=1618604102"
      />
        {
            contacts.map(contact =>
                <Card
                    name = {contact.name}
                    img = {contact.imgURL}
                    tel = {contact.phone}
                    email = {contact.email}
                />    
            )
        }
       
    </div>
  );
}

export default App;
