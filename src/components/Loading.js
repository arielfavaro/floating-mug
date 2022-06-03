import { SpinnerCircular } from 'spinners-react';

function Loading() {
    return (
        <div className='loading'>
            <SpinnerCircular color='#cfcfcf' size={100} thickness={140} />
            <h3>Carregando...</h3>
        </div>
    );
};

export default Loading;