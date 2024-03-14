import React, { useState } from 'react';

interface IPais {
  nombre: string;
  seleccionado: boolean;
}

const ListaPaises: React.FC = () => {
  const [paises, setPaises] = useState<IPais[]>([
    { nombre: 'India', seleccionado: false },
    { nombre: 'USA', seleccionado: false },
    { nombre: 'France', seleccionado: false },
  ]);

  const toggleSeleccion = (index: number) => {
    const nuevosPaises = paises.map((pais, i) => {
      if (i === index) {
        return { ...pais, seleccionado: !pais.seleccionado };
      }
      return pais;
    });
    setPaises(nuevosPaises);
  };

  const seleccionarTodos = (seleccionar: boolean) => {
    const nuevosPaises = paises.map(pais => ({
      ...pais,
      seleccionado: seleccionar,
    }));
    setPaises(nuevosPaises);
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={paises.every(pais => pais.seleccionado)}
          onChange={(e) => seleccionarTodos(e.target.checked)}
        />Select All
     
      </div>
      {paises.map((pais, index) => (
        <div key={pais.nombre}>
          <input
            type="checkbox"
            checked={pais.seleccionado}
            onChange={() => toggleSeleccion(index)}
          />
          {pais.nombre}
        </div>
      ))}
    </div>
  );
};

export default ListaPaises;
