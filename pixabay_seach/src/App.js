import React,{ useState } from "react";
import axios from 'axios';
import SearchBar from "./components/SearchBar";
import GetLs from "./components/GetLs";

const App = () => {
    const [images, setimages] =useState([]);
    const onSearchSubmit =async (term) =>{
        try {
            const params={
                key: '25051452-22dcb24d68c2ea224c7404fdf',
                q  : term,
            };
            const response= await axios.get('https://pixabay.com/api/',{ params });
            setimages(response.data.hits);
            if(response.data.total===0){
                alert('お探しの画像はありません');
            }
        } catch {
            alert('写真の取得に失敗');
        }
    };
    return (
        <div className="ui container" style={{marginTop: "20px"}}>
            <SearchBar onSubmit={onSearchSubmit} />
            <GetLs images={images} />
        </div>
    );
};

export default App;