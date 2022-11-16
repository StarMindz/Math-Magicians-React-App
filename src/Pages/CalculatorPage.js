/* eslint-disable arrow-body-style */
import Calculator from '../components/Calculator';

const CalculatorPage = () => {
  return (
    <div className="calculatorBackground">
      <div className="calculatorComponent">
        <div className='calcultorItem'>
          <h2 className="calculatorTitle">Let us do some math!</h2>
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
