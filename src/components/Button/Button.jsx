import { Btn } from './Button.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';


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

}

}

Button.propTypes = {
    onClick : PropTypes.func.isRequired
}
