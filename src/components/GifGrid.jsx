import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGif } from '../hooks/useFetchGifs'; 

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGif(category);

    return(
        <div className="card-grid">
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animate animate__flash">Leyendo...</p>}

            <div className="card-grid">
                { 
                    images.map( img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                         />
                    ))
                }
            </div>
        </div>
    );
};