import React, { useState } from 'react'

function MyForm() {

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [users, setUsers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (fname === "" || lname === "") {
      alert("please follow the guideline")
      return
    }

    const newUser = {
      firstName: fname,
      lastName: lname
    }

    setUsers([...users, newUser])

    // clear input
    setFname("")
    setLname("")
  }

  return (
    <>
      <div>
        <h1 className='bg-success'>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='me-3'>First name</label>
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <br />

          <div>
            <label className='me-3'>Last name</label>
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <br />

          <button className='btn btn-success'>Submit</button>
        </form>

        <hr />

        {/* Table */}
        {users.length > 0 && (
          <table border="1" className='mt-3'>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}

export default MyForm
