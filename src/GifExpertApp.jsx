import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([]);

    return (
        <>
        <div>
            <h1>GifExpertApp</h1>
            <AddCategory
                setCategorias={setCategorias}
            />
            <hr/>
        </div>

        <ol>
        { 
          categorias.map( category => {
              return <GifGrid 
                        key={category}
                        category={category}
                    />
          })
        }

      </ol>
        </>
    )
}
