import { Btn } from './Button.styled';
<<<<<<< Updated upstream

export const Button = ({ loadMoreImages }) => {
    return(
        <Btn onClick={loadMoreImages}>Load more</Btn>
    )
}

=======
import { Component } from 'react';
z

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
>>>>>>> Stashed changes
