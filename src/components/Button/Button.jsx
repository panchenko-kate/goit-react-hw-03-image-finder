import { Btn } from './Button.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD

export default class Button extends Component {
    state = {
    perPage:12
    }

    onClick = () => {
        this.props.onClick(this.state)
    }
    
    render() {
        return (
            <Btn type='button' onClick={this.onClick}>Load more</Btn>
        )
    }
=======
export const Button = () => {
    return(
        <Btn>Load more</Btn>
    )
>>>>>>> parent of c4521de (add load mode button)
}

Button.propTypes = {
    onClick : PropTypes.func.isRequired
}
