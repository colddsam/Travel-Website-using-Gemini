import React, { useState } from 'react'
import './SearchBar.css'
import { Input } from 'reactstrap'
import { microphone, scanner, search } from '../../assets/Images';
import data from '../../data/TravelDataset.json'
const SearchBar = () => {
    const [query, setQuery] = useState('');

    const checkData = data.filter((item) => {
        let resultVar;
        if (query === '') {
            resultVar=null
        }
        else if (item.name.toLowerCase().includes(query.toLowerCase())) {
            resultVar = item;
        }
        else if (item.city.toLowerCase().includes(query.toLowerCase())) {
            resultVar = item;
        }
        else if (item.state.toLowerCase().includes(query.toLowerCase())) {
            resultVar = item;
        }
        
        else {
            resultVar=null
        }
        return resultVar;
    })
    return (
        <div className='search__container'>
            <div className='search__box'
                style={checkData.length === 0 ?
                    {
                        borderBottomLeftRadius: '25px',
                        borderBottomRightRadius: '25px'
                    } :
                    {
                        borderBottomLeftRadius: '0px',
                        borderBottomRightRadius: '0px'
                    }
                }
            >
                <button><img src={search} alt="search" /></button>
                <Input
                    className='input'
                    placeholder='enter destination'
                    type='text'
                    onChange={(e) => {
                        setQuery(e.target.value);
                        
                    }}
                    value={query}
                />
                <button><img src={microphone} alt="microphone" /></button>
                <button><img src={scanner} alt="scanner" /></button>
                <ul className="results">
                    {
                        data.length && checkData.slice(0, 5).map((item, index) => {
                            return (
                                <li key={index} className="result">
                                    <span>{item.name}</span>
                                    <span style={{ color: '#B4B4B8', fontSize: '14px' }}>,{item.city}</span>
                                    <span style={{ color: '#B4B4B8', fontSize: '14px' }}>,{item.state}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        
    )
}

export default SearchBar