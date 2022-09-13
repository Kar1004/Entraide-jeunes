import React, { useContext } from 'react';
import ProfilForm from '../components/log';
import { uidContext } from '../components/Routes/appContext';

function Profil(props) {
    const uid = useContext(uidContext)
    return (
        
        <div className='profilConnexion'>
             {uid ? (
                    <h1> Update</h1>)
                    :(
            <><div className='Profil'>
                        <ProfilForm connection={false} inscription={true} />
                    </div><div className='Profil-Picture'>

                        </div></>
            )}
          
        </div>
    );
}

export default Profil;