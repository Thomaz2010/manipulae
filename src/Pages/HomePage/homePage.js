import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/header';
import List from '../../Components/List/list';
import deezerApi from "../../Services/api"
import "../../styles/general.css"
function HomePage() {
    const [albuns, setAlbuns] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        let { data } = await deezerApi.get();
        
        setAlbuns(data.tracks.data)
        console.log(data)
    }
    return (
        <>

            <Header />
            <div className="div-search-button">
                <form>
                    <input type="text" name="serach" placeholder="Search..." />
                </form>
            </div>
            <List items={albuns} />
        </>
    );
}

export default HomePage;