import PropTypes from 'prop-types';

export function Context(props){
    return <header>
        <h2>{props.mensaje}</h2>
    </header>
}

Context.propTypes = {
    mensaje: PropTypes.string.isRequired
};