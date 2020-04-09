import React from 'react';

//Valores Default para LocatecData
export const LocatecData = {
    objects: [
    ],
    currentObjects: [
    ],
    places: [
    ],
    status: [
    ],
};
  
export const LocatecContext = React.createContext({
    //Datos y funciones del contexto
    LocatecData: LocatecData,
    getObjects: () => {}
});