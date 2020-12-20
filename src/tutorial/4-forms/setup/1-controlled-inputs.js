import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [people, setPeople] = useState([]);
  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      console.log('Edit');
    } else {
      if (firstName !== '' && email !== '') {
        const person = {
          id: new Date().getTime().toString(),
          firstName,
          email,
        };
        setPeople((people) => {
          return [...people, person];
        });
      } else {
        alert('Empty Value');
      }
    }
    setEdit(false);
    setFirstName('');
    setEmail('');
  };

  const EditPerson = (id) => {
    setEdit(true);
    setFirstName(people.find((x) => x.id === id).firstName);
    setEmail(people.find((x) => x.id === id).email);
  };

  const removePerson = (id) => {
    setPeople((oldPerson) => {
      return oldPerson.filter((x) => x.id !== id);
    });
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            {edit ? 'Edit ' : 'Add '}Person
          </button>
        </form>
      </article>

      <section>
        <h1>People</h1>
        <ul>
          {people.map((person) => {
            const { id, firstName, email } = person;
            return (
              <div key={id} className="item">
                <h4>{firstName}</h4>
                <p>{email}</p>
                <a href="#!" onClick={() => removePerson(id)}>
                  Remove
                </a>
                |
                <a
                  href="#!"
                  onClick={() => {
                    EditPerson(id);
                  }}
                >
                  Edit
                </a>
              </div>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default ControlledInputs;
