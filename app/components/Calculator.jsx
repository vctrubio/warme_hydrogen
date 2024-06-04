import React from 'react';
import '../css/Calculator.css'


const CalculatorQuestion = ({ question, min, max, value, setValue }) => {
    const handleSliderChange = (event) => {
        setValue(event.target.value);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    return (
        <div className='calculator-question'>
            <span style={{ fontSize: '1.4em', width: '100%' }}>{question}</span>
            <div className='calculator-question'>
                <div className='calculator-question-units'>
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={value}
                        onChange={handleSliderChange}
                        className="slider"
                        id="myRange"
                        style={{
                            flex: '2',
                            marginRight: '1em',
                        }}
                    />
                    <input
                        type="number"
                        min={min}
                        max={max}
                        value={value}
                        readOnly
                        onChange={handleInputChange}
                        style={{
                            padding: '10px !important',
                            width: '40px',
                            height: '40px',
                            marginBottom: '4em',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export const Calculator = () => {
    const [questions, setQuestions] = React.useState([
        { text: 'Cuantas estufas tienes', min: 1, max: 10, value: 1 },
        { text: 'Cada cuanto cambias la bombona', min: 1, max: 30, value: 1 },
        { text: 'Cuanto pagas por la luz', min: 1, max: 500, value: 1 },
        { text: 'Cuanto pagarias por la luz', min: 1, max: 500, value: 1 },
    ]);

    const handleValueChange = (index, newValue) => {
        setQuestions(prevQuestions => {
            const newQuestions = [...prevQuestions];
            newQuestions[index].value = newValue;
            return newQuestions;
        });
    };

    return (
        <div className='calculator'>
            <h1 style={{ marginBottom: '2em' }}>Calcula tu ahorro cambiándote a Warme</h1>
            <flex>
                <div className='calculator-qs'>
                    {questions.map((question, index) => (
                        <CalculatorQuestion
                            key={index}
                            question={question.text}
                            min={question.min}
                            max={question.max}
                            value={question.value}
                            setValue={newValue => handleValueChange(index, newValue)}
                        />
                    ))}
                    <p style={{ textAlign: 'left' }}>*Los cálculos se basan en lámparas de calor de 1,5 kWh,<br />
                        quemadores de gas de 12 kWh y un precio de la energía de 3€ por kWh.</p>
                </div>
                <div className='d-flex flex-column'>
                    {/* Replace with your chart component */}
                </div>
            </flex>
            <div className='calculator-chart'>
            </div>
        </div>
    )
}