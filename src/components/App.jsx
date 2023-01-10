import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export default function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    if (inputRef.current.value === '') {
      toast.warn('Please enter a number!');
      return;
    } else if (inputRef.current.value === '0') {
      toast.warn('Please enter a positive number!');
      return;
    } else {
      setResult(result => result + Number(inputRef.current.value));
      return;
    }
  }
  function minus(e) {
    e.preventDefault();
    if (inputRef.current.value === '') {
      toast.warn('Please enter a number!');
    } else if (inputRef.current.value === '0') {
      toast.warn('Please enter a positive number!');
      return;
    } else {
      setResult(result => result - Number(inputRef.current.value));
      return;
    }
  }
  function times(e) {
    e.preventDefault();
    if (inputRef.current.value === '') {
      toast.warn('Please enter a number!');
    } else if (inputRef.current.value === '0') {
      toast.warn('Please enter a positive number!');
      return;
    } else {
      setResult(result => result * Number(inputRef.current.value));
      return;
    }
  }
  function divide(e) {
    e.preventDefault();
    if (inputRef.current.value === '') {
      toast.warn('Please enter a number!');
    } else if (inputRef.current.value === '0') {
      toast.warn('Please enter a positive number!');
      return;
    } else {
      setResult(result => result / Number(inputRef.current.value));
      return;
    }
  }
  function resetInput(e) {
    e.preventDefault();
    toast.success('Input field succesfully cleared!');
    inputRef.current.value = '';
  }
  function resetResult(e) {
    e.preventDefault();
    toast.success('Result succesfully cleared!');
    setResult(0);
  }

  return (
    <div className="app">
      <ToastContainer />
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <p ref={resultRef}>{result}</p>
      <form>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={times}>*</button>
        <button onClick={divide}>/</button>
        <button className="clear" onClick={resetInput}>
          Clear Input
        </button>
        <button className="clear" onClick={resetResult}>
          Clear Result
        </button>
      </form>
    </div>
  );
}
