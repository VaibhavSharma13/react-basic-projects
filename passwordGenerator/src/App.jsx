import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  // useCallback hook is used to optimize performance, this is optional to use but its a good code practice
  const passwordGenerator = useCallback(() =>{
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let pass = '';

    if(numberAllowed) str += '0123456789';
    if(charAllowed) str += '!@#$%&';

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random()*str.length);
      // pass += str[idx];
      pass += str.charAt(idx);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {

    // to highlight the selected password
    passwordRef.current?.select();

    window.navigator.clipboard.writeText(password);

    const btnElement = document.querySelector('button');
    btnElement.innerText = 'Copied';
  }, [password]);

  // this hook is used to re-render the function if any of the dependencies have changed
  useEffect(()=>{
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 py-2 my-8 text-orange-400 bg-gray-600'>
      <h1 className='text-white text-center my-2'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            placeholder='password'
            className='outline-none w-full py-1 px-3'
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyToClipboard}
          className='outline-none bg-blue-700 text-white px-3 rounded-r-lg shrink-0 hover:bg-blue-600'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <input 
            type="range"
            min={6}
            max={16}
            value={length}
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>

          <div className='flex gap-x-1 text-sm ml-1'>
          <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>

          <div className='flex gap-x-1 text-sm ml-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
