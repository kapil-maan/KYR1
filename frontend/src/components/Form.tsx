import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Answers {
  [key: string]: string;
}

interface Option {
  value: string;
  index: number;
}

const Form: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [options, setOptions] = useState<Option[]>([]);
  
  useEffect(() => {
    if (step === 2) {
      fetchOptions(answers.question1);
    }
  }, [step, answers]);

  const fetchOptions = async (category: string) => {
    try {
      const response = await axios.get(`http://localhost:7000/api/options/${category}`);
      setOptions(response.data);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const handleAnswer = (question: string, answer: string) => {
    setAnswers({
      ...answers,
      [question]: answer,
    });
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const renderQuestion = () => {
    switch (step) {
      case 1:
        return (
          <>
            <label className="block text-lg font-medium text-gray-700">
              The Six Fundamental Rights of the Indian Constitution:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer('question1', 'equality')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Right to Equality (Articles 14–18)
              </button>
              <button
                onClick={() => handleAnswer('question1', 'freedom')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Right to Freedom (Articles 19–22)
              </button>
              <button
                onClick={() => handleAnswer('question1', 'exploitation')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Right against Exploitation (Articles 23–24)
              </button>
              <button
                onClick={() => handleAnswer('question1', 'religion')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Right to Freedom of Religion (Articles 25–28)
              </button>
              <button
                onClick={() => handleAnswer('question1', 'culture')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Cultural and Educational Rights (Articles 29–30)
              </button>
              <button
                onClick={() => handleAnswer('question1', 'remedies')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Right to Constitutional Remedies (Article 32)
              </button>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <label className="block text-lg font-medium text-gray-700">
              What do you want to know about {answers.question1 === 'equality' ? 'Right to Equality' : 
              answers.question1 === 'freedom' ? 'Right to Freedom' : 
              answers.question1 === 'exploitation' ? 'Right against Exploitation' : 
              answers.question1 === 'religion' ? 'Right to Freedom of Religion' : 
              answers.question1 === 'culture' ? 'Cultural and Educational Rights' : 
              'Right to Constitutional Remedies'}?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {options.map((option) => (
                <button
                  key={option.index}
                  onClick={() => handleAnswer('question2', option.value)}
                  className="px-4 py-2 border border-black text-[#d42755] font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
                >
                  {option.value}
                </button>
              ))}
            </div>
          </>
        );
      case 3:
        return (
          <>
            <label htmlFor="question8" className="block text-lg font-medium text-gray-700">
              Thank you for completing the questions! Please provide any additional comments.
            </label>
            <textarea
              id="question8"
              name="question8"
              value={answers.question8 || ''}
              onChange={(e) => setAnswers({ ...answers, question8: e.target.value })}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What do you want to know about?</h2>
        {renderQuestion()}
        <div className="mt-4 flex justify-between">
          {step > 1 && (
            <button
              onClick={handlePrevStep}
              className="px-4 py-2 bg-gray-300 text-gray-900 rounded-md hover:bg-gray-400"
            >
              Previous
            </button>
          )}
          {step < 3 && answers[`question${step}`] && (
            <button
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
