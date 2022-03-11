// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes  from 'prop-types';
    const PrimeraApp = ({saludo,subtitulo }) =>{

    return (
        <>
            <h1>{saludo}</h1>
            {
                /* <pre>{ JSON.stringify(saludo,null,3) }</pre> */
            }
            <h2>{subtitulo}</h2>
        </>
    
    );
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired

}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}
export default PrimeraApp; 