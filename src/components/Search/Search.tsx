import { useState } from 'react';
import React from 'react';
import './Search.css';

interface ContainerProps { }

const Search: React.FC<ContainerProps> = () => {
    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();

  return (
        <div className='search-container'>
            <form action='' className="ion-padding-top ion-justify-content-end">
                <input type="text" placeholder="Search" onChange={(e) => setText(e.target.value)} />
            </form>
        </div>
     
    
  );
};

export default Search;