import React, { useEffect, useState } from 'react';
import Player from '../AudioPlay/audioPlay';

function List({ items }) {
    const [playing, setPlaying] = useState(false);
    return (


        <>
            {/* <br />
                    <div>
                        <img src={album.album.cover_medium} />
                    </div>
                    <div>
                        <h3>{album.title}</h3>
                        <h5>{album.artist.name}</h5>
                    </div>

                    <div>
                        <a href={`${album.link}`} target="_blank">ACESSAR MÚSICA</a>

                    </div>
                    <div>
                        <Player url={`${album.preview}`}/>
                        {/* <button onClick={() => { start(album.preview) }}>PLAY</button> */}
            {/* </div> */}

            <table>
                <tr>
                    <th>Capa do Albúm</th>
                    <th>Título</th>
                    <th>Nome do Artista</th>
                    <th>Acessar Música</th>
                    <th>Ouvir Preview</th>
                </tr>
                {
                    items.map(album => {
                        return (
                            <>
                                <tr>
                                <td><img src={album.album.cover} /></td>
                                <td>{album.title}</td>
                                <td>{album.artist.name}</td>
                                <td><a href={album.link} target="_blank">ACESSAR MÚSICA</a></td>
                                <td><Player url={album.preview}/></td>
                                </tr>

                            </>
                        )
                    })
                }
            </table>
        </>

    );
}

export default List;