import React from 'react';
function Contact() {
  const getDetails = () => ({
    title: 'Contacto',
    msg: 'Aquí es cómo puedes ponerte en contacto.'
  });

  const { title, msg: message } = getDetails();

  // TODO: Implement the code for the contact details display
  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
}

export default Contact;

