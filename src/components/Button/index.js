import { Container } from './styles';

const Button = ({ children, onClick, small }) => {
  return (
    <Container small={small} onClick={onClick}>{children}</Container>
  )
}

export default Button;