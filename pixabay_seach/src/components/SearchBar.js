import React, { useState } from "react";

const SearchBar=({onSubmit})=>{
    const [term,setTerm]=useState('');
    const onFormSabmit=(event)=>{
        event.preventDefault();
        onSubmit(term);
    };
    return(
      <form onSubmit={onFormSabmit} className="ui form">
        <div className="field">
          <label>SearchPicture</label>
          <input type="text" name="Search" placeholder="" value={term} onChange={(event)=>{
              setTerm(event.target.value);//検索欄に入力された文字列
          }}
          />
        </div>
      </form>
    );
};

export default SearchBar;