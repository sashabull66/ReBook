import React from 'react';
import './ErrorComponent.css'

const ErrorComponent = ({message}) => {
    return (
        <div className={'error-wrapper'}>
            <p>Что-то пошло не так. К вам уже выехала группа техников для устранения неполадки</p>
            {message && <p>Подробности ошибки: {message}</p>}
        </div>
    );
};

export default ErrorComponent;