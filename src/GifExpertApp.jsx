import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([]);

    /*const handleAdd = () => {
        setCategorias(['Risas', ...categorias]);
        setCategorias( cats => [...cats, 'Nueva Categoria']);
    }*/

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
          categorias.map( indice => {
              return <GifGrid key={indice}>
                          <p>{indice}</p>
                    </GifGrid>
          })
        }

      </ol>
        </>
    )
}
