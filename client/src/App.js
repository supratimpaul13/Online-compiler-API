import './App.css';
import axios from 'axios'
import React, { useState } from 'react';

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState("cpp");

  const handleSubmit = async () => {
    const payload = {
      language,
      code
    };

    try {
      const { data } = await axios.post("http://localhost:5000/run", payload);
      setOutput(data.output);

    } catch ({ response }) {
      if (response) {
        const errMsg = response.data.stderr;
        setOutput(errMsg);
        // setOutput("Invalid Syntax");
        console.log(response);
      }

      else {
        setOutput("Error connecting to server !");
      }
    }
  }

  return (

    <div className="App">

      <h1>Online Code Compiler</h1>

      <div>
        <label>Selcet Language: </label>
        <select
          value={language}
          onChange={
            (e) => {
              setLanguage(e.target.value);
              console.log(e.target.value);
            }
          }
        >
          <option value="cpp"> C++ </option>
          <option value="py"> Python </option>


        </select>
      </div>

      <br />
      <textarea
        rows="20"
        cols="75"
        value={code}
        onChange={(e) => { setCode(e.target.value) }}
      ></textarea>

      <br />

      <button className='button' onClick={handleSubmit}>SUBMIT</button>
      <p>Output:</p>
        <div className='output'>
          {output}
        </div>
    </div>
  );
}

export default App;
