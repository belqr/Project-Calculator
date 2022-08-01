import { StyledButton } from './styles';

const Botao = ({ children, onClick, value }) => {
  return (
    <StyledButton onClick={onClick} value={value}> {children} </StyledButton>
  )
}

export default Botao;