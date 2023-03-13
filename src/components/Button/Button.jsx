import { Btn } from './Button.styled';

export const Button = ({ loadMoreImages }) => {
    return(
        <Btn onClick={loadMoreImages}>Load more</Btn>
    )
}

