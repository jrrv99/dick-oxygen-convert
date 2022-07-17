import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";

import units from "@utils/units";

import "@styles/Convert.css";

const Convert = () => {
  const [favorite, setFavorite] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [selectValue, setSelectValue] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const multiplicacion = inputValue * units[selectValue].udc; //Multiplicamos el Valor del input por la Unidad de Conversion
    let redondeo = parseFloat(multiplicacion.toFixed(2)); //Lo redondeamos a 2 decimales y lo pasamos a Float
    redondeo = !redondeo ? 0 : redondeo; //Si es NaN lo seteamos en 0
    setResult(redondeo); //Actualizamos el estado
  }, [inputValue, selectValue]); //Cada que cambie alguno de los dos se ejecuta el efecto

  return (
    <div className="convert">
      <h2 className="convert__title">convert</h2>
      <div className="convert__body">
        <div className="input__group">
          <select
            value={selectValue /* Cambiamos el valor del input con el estado */}
            name=""
            id=""
            onChange={(event) => {
              setSelectValue(
                parseInt(
                  event.target.value
                ) /* Parseamos el string del valor a entero */
              ); /* Actualizamos el estado cada que cambie el input */
            }}
          >
            {units.map(({ input, result }, index) => (
              <option key={index} value={index}>
                {`${input} → ${result}`}
              </option>
            ))}
          </select>

          <button
            onClick={() => {
              setInputValue(result);
              setSelectValue(units[selectValue].indexChange);
            }}
          >
            <BsArrowLeftRight />
          </button>
        </div>

        <div className="input__group">
          <input
            type="number"
            name="input"
            id="input"
            className="input"
            value={inputValue}
            onChange={
              (event) =>
                setInputValue(
                  parseFloat(
                    event.target.value
                  ) /* Parseamos el string del valor a entero */
                ) /* Actualizamos el estado cada que cambie el input */
            }
          />
          <label htmlFor="input">{units[selectValue].input}</label>
        </div>
      </div>

      <div className="convert__footer">
        <button
          className="button__favorite"
          onClick={() => {
            console.log(
              `${inputValue} ${units[selectValue].input} → ${result} ${units[selectValue].result}`
            );
            setFavorite((prev) => !prev);
          }}
        >
          <AiFillHeart className={`icon ${favorite ? "" : "favicon"}`} />
        </button>

        <span className="result">{`${result} ${units[selectValue].result}`}</span>
      </div>
    </div>
  );
};

export default Convert;
