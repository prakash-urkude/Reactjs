import React, { useState } from "react";
import "./style.css"
  
function  Project2 () {
   //pehle empty string set kiye....now kisi ne nam daala to vo nam empty string se change ho jayega
      const [firstName,setFirstName]=useState("")
      const [lastName,setLastName]=useState("")
      const [email,setEmail]=useState("")
      const [checkbox,setCheckbox]=useState(false)
      const [gender,setGender]=useState("Male")
      const [country,setCountry]=useState()
      const [image,setImage]=useState("")

      return <div className="formData">
          <form onSubmit={(event) => {event.preventDefault()}} 
          onReset={(event) => event.preventDefault()}
          >
              <label>First Name:</label>
              <input type="text" placeholder="Enter first Name" value={firstName} onChange={
                  (event) => setFirstName(event.target.value)
              } /> <br />
              <label>Last Name:</label>
              <input type="text" placeholder="Enter last Name" value={lastName} onChange={
                  (event) => setLastName(event.target.value)
              } />
              <div>
                  <label>Email:</label>
                  <input type="email" placeholder="Enter email" value={email} onChange={
                      (event) => setEmail(event.target.value)
                  } />
              </div>
              <div>
                  <label>Do you want to Recieve Marketing Mails? </label> <br />
                  <input type="checkbox" name="check" value={checkbox} onChange={(event) => setCheckbox(event.target.value)} />Yes
              </div>
              <div>
                  <label>Gender:</label>
                  <input type="radio" name="Gender" value={gender}
                      onChange={(event) => setGender(event.target.value)} />Male
                  <input type="radio" name="Gender" value={gender}
                      onChange={(event) => setGender(event.target.value)} />Female
                  <input type="radio" name="Gender" value={gender}
                      onChange={(event) => setGender(event.target.value)} />Other
              </div>
              <div>
                  <label>Country:</label>
                  <select value={country} onChange={
                      (event) => setCountry(event.target.value)
                  }>
                      <option value="India">India</option>
                      <option value="africa">africa</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Afganistan">Afganistan</option>
                      <option value="Australia">Australia</option>
                      <option value="china">china</option>
                  </select>
              </div>
              <div>
                  <label>Profile Picture: </label>
                  <input type="file" value={image} onChange={(event) => setImage(event.target.value)} />
              </div>
              <div>
                  <button type="submit">Submit</button>
                  <button type="reset">Reset</button>
              </div>
          </form>
          {firstName && lastName && email  ? (
          <div style={{ marginTop: '10px' }}>
            Things you have filled up: <br />
            First Name: {firstName} <br />
            Last Name: {lastName} <br />
            Email: {email}
          </div>
        ) : null}
      </div>
  }

export default Project2