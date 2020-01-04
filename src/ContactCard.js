import React from 'react';

function ContactCard(props) {
	return(
		 <div className="contact-card">
          <img src={props.contact.image} alt=""/>
          <h3>{props.contact.name}</h3>
          <p>Phone: {props.contact.phone}</p>
          <p>Email: mr.wh{props.contact.email}</p>
      </div>
	)
}

export default ContactCard;