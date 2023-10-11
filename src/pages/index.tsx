import Button from '@/components/Button/Button';
import {useState} from 'react';

export default function Home() {
  const [contador, setContador] = useState(50);

  const modificarEn10 = (aumentar = true) => {
    if (aumentar) {
      setContador(contador + 10);
    } else {
      setContador(contador - 10);
    }
  };

  return (
    <div>
      <h1>Contador</h1>

      <p>VALOR: {contador}</p>

      <button
        onClick={() => modificarEn10()}
      >
        Aumentar en 10
      </button>
      <button
        onClick={() => modificarEn10(false)}
      >
        Disminuir en 10
      </button>



      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Button
        text='Aumentar en 10'
        onClick={() => modificarEn10()}
      />

      <Button
        text={'Disminuir en 10'}
        onClick={() => modificarEn10(false)}
      />
    </div>
  )
}
