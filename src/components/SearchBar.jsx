import './styles/SearchBar.css';
import { FaSearch } from 'react-icons/fa';
import React, { useState } from 'react';

export const SearchBar = (props) => {

    const [opened, setOpened] = useState(false);

    const handleClick = (evt) => {
        if(opened){
            const val = evt.currentTarget.previousElementSibling.value;
            console.log(val);//send request
            setOpened(false);
        }
        else{
            setOpened(true);
            evt.currentTarget.previousElementSibling.focus();
        }
    }

    const handleLostFocus = (evt) => {
        setTimeout(()=>{
            if(opened){
                setOpened(false);
            }
        },500);
    }

    return (
        <div id="searchBar" className={"d-flex " + (opened ? "opened" : "")}  >
            <input type="text" className="form-control input-sm searchInput" onBlur={handleLostFocus}  />
            <span className="searchIcon" onClick={handleClick}><FaSearch/></span>
        </div>
    );
}