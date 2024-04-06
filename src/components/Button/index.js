import { Container } from './styles';

const Button = ({ children, onClick }) => {
  return (
    <Container onClick={onClick}>{children}</Container>
  )
}

export default Button;