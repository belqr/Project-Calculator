import { useState } from 'react';
import { Container } from './styles';
import Botao from './button/Botao';

function Calculadora() {
  const [num, setNum] = useState(0);
  const [number, setNumber] = useState(0);
  const [operator, setOperator] = useState();

  function digit(event) {
    let display = event.target.value;
    if (num === 0) {
      setNum(display);
    } else {
      setNum(num + display);
    }
  }

  function clear() {
    setNum(0);
  }

  function backspace() {
    if(num.length === 1) {
      setNum(0);
    }else {
      setNum(num.slice(0, num.length - 1));
    }
  }

  function porcentagem() {
    setNum(num / 100);
  }

  function handleOperator(event) {
    let input = event.target.value;
    setOperator(input);
    setNumber(num);
    setNum(0);
  }

  function result() {
    if(operator === '÷') {
      setNum(parseFloat(number) / parseFloat(num));
    }else if(operator === 'x') {
      setNum(parseFloat(number) * parseFloat(num));
    }else if(operator === '-') {
      setNum(parseFloat(number) - parseFloat(num));
    }else if(operator === '+') {
      setNum(parseFloat(number) + parseFloat(num));
    }
  }

  return (
    <Container>
      <header> 
        <span> {num} </span>
      </header>
      <main>
        <div>
          <Botao onClick={clear}> AC </Botao>
          <Botao onClick={backspace} > C </Botao>
          <Botao onClick={porcentagem}> % </Botao>
          <Botao onClick={handleOperator} value={'÷'} > ÷ </Botao>
        </div>
        <div>
          <Botao onClick={digit} value={7} > 7 </Botao>
          <Botao onClick={digit} value={8} > 8 </Botao>
          <Botao onClick={digit} value={9} > 9 </Botao>
          <Botao onClick={handleOperator} value={'x'} > x </Botao>
        </div>
        <div>
          <Botao onClick={digit} value={4} > 4 </Botao>
          <Botao onClick={digit} value={5} > 5 </Botao>
          <Botao onClick={digit} value={6} > 6 </Botao>
          <Botao onClick={handleOperator} value={'-'} > - </Botao>
        </div>
        <div>
          <Botao onClick={digit} value={1} > 1 </Botao>
          <Botao onClick={digit} value={2} > 2 </Botao>
          <Botao onClick={digit} value={3} > 3 </Botao>
          <Botao onClick={handleOperator} value={'+'} > + </Botao>
        </div>
        <div>
          <Botao onClick={digit} value={0} > 0 </Botao>
          <Botao onClick={digit} value={'.'} > . </Botao>
          <Botao onClick={result}> = </Botao>
        </div>
      </main>
    </Container>
  )
}

export default Calculadora;