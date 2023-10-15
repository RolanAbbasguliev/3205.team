import { useState } from 'react';
import { Input } from '../Input/Input';

import './App.css';
import axios from 'axios';

function App() {
  const [emailError, setEmailError] = useState('');
  const [error, setError] = useState('');

  const [data, setData] = useState<[{ email: string; number: string }]>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setData(undefined);

    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const number = (e.currentTarget[1] as HTMLInputElement).value;

    if (email === '') {
      setEmailError('email is required field');
      return;
    } else {
      setEmailError('');
    }

    try {
      const res = await axios.post('http://localhost:5500', {
        email: email,
        number: number,
      });

      setData(res.data);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e.response?.data);
      }
    }
  };
  return (
    <div className="app">
      <div className="container">
        {emailError ? <p className="email-error">{emailError}</p> : ''}
        {error ? <p className="email-error">{error}</p> : ''}
        <form action="" className="form" onSubmit={onSubmit}>
          <Input type="email" name="email" placeholder="email" required />
          <Input name="number" maxLength={8} placeholder="number" mask />
          <button type="submit" className="submit">
            Send
          </button>
        </form>
        {data?.length ? (
          <div className="data">
            <div className="data__title">Response from server</div>
            {data?.map((elem) => {
              return (
                <div className="data__item" key={elem.number}>
                  <div className="data__item-email">{elem.email}</div>
                  <div className="data__item-number">{elem.number}</div>
                </div>
              );
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default App;
