import React,{useState} from "react";

import 'react-credit-cards/es/styles-compiled.css';

import Cards from 'react-credit-cards';

export default function CcGeneration() {

  const [number, setNumber] = useState('');

  const [name, setName] = useState('');

  const [expiry, setExpiry] = useState('');

  const [cvc, setCvc] = useState('');

  const [focus, setFocus] = useState('');

  return (

    <div>

       <Cards class="hai"

          cvc={cvc}

          expiry={expiry}

          focused={focus}

          name={name}

          number={number}

        />

      <form>

      <br>
        </br>
          <center>

        <input

          type="tel"

          name="number"

          val={number}

          placeholder={"Enter Number"}

          onChange={e => setNumber(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />

        <br>
        </br>

        <br>
        </br>

        <input

          type="tel"

          name="name"

          val={name}

          placeholder={"Enter Name"}

          onChange={e => setName(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />

        <br>
        </br>

        <br>
        </br>


        <input

          type="tel"

          name="expiry"

          val={expiry}

          placeholder={"Enter Expiry date"}

          onChange={e => setExpiry(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />

        <br>
        </br>

        <br>
        </br>

        <input

          type="tel"

          name="cvc"

          val={cvc}

          placeholder={"Enter Cvc"}

          onChange={e => setCvc(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />

        </center>

      </form>

    </div>

  );

}
