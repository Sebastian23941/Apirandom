'use client';

import { Person } from "../types/person";
interface HistoryProps {
  history: Person[];
  setCurrentPerson: (person: Person) => void;
  removeFromHistory: (index: number) => void;
  
}

const History: React.FC<HistoryProps> = ({ history, setCurrentPerson, removeFromHistory }) => {
  return (
    <div className="w-64 bg-blue-300 p-4 shadow-lg h-full overflow-y-auto absolute left-0">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-black">Historial</h3>
      </div>
      {history.length === 0 ? (
        <p className="text-black">No hay historial</p>
      ) : (
        history.map((person, index) => (
          <div key={index} className="flex justify-between items-center p-2 bg-white rounded-lg mb-2 cursor-pointer" onClick={() => setCurrentPerson(person)}>
            <p className="text-black">{person.name}</p>
            <button
              className="text-red-500 text-lg"
              onClick={(e) => {
                e.stopPropagation();
                removeFromHistory(index);
              }}
            >
              X
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default History;