import React from 'react';
import ProfilForm from '../components/log';

function Profil(props) {
    return (
        <div className='profilConnexion'>
            <div className='Profil'>
             <ProfilForm connection={ false} inscription={true} />
            </div>
            <div className='Profil-Picture'>

            </div>
          
        </div>
    );
}

export default Profil;