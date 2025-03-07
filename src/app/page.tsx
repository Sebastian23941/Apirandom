'use client';

import { useState } from "react";
import { usePeopleApi } from "./hooks/usePeopleApi";
import History from "./components/historial";

export default function Home() {
  const { currentPerson, personHistory, error, loading, fetchData, setCurrentPerson, removeFromHistory } = usePeopleApi();
  const [activeField, setActiveField] = useState<"name" | "email" | "birthday" | "phone" | "password">("name");

  if (error) return <div>Error loading data</div>;

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center flex-1 p-10">
        <button onClick={fetchData} className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded">
          Fetch Data
        </button>
        {loading && <div className="text-center text-black">Loading...</div>}
        {currentPerson && (
          <div className="bg-white shadow-lg p-6 rounded-lg text-center w-96">
            <img className="w-24 h-24 rounded-full border-4 border-gray-300 mx-auto" src={currentPerson.picture} alt={currentPerson.name} />
            <p className="text-gray-500 mt-4">{activeField}</p>
            <h2 className="text-2xl font-semibold text-black">{currentPerson[activeField]}</h2>
            <div className="flex justify-center mt-4 space-x-6 text-gray-400">
              <span className="text-xl hover:text-green-500 cursor-pointer" onClick={() => setActiveField("name")}>👤</span>
              <span className="text-xl hover:text-green-500 cursor-pointer" onClick={() => setActiveField("email")}>📧</span>
              <span className="text-xl hover:text-green-500 cursor-pointer" onClick={() => setActiveField("birthday")}>📅</span>
              <span className="text-xl hover:text-green-500 cursor-pointer" onClick={() => setActiveField("phone")}>📞</span>
              <span className="text-xl hover:text-green-500 cursor-pointer" onClick={() => setActiveField("password")}>🔒</span>
            </div>
          </div>
        )}
      </div>
      <History history={personHistory} setCurrentPerson={setCurrentPerson} removeFromHistory={removeFromHistory} />
    </div>
  );
}

/*'use client';

import { usePeopleApi } from "./hooks/usePeopleApi";

export default function Home() {

  const { currentPerson, personHistory, error, loading, fetchData } = usePeopleApi()

  if (error) return <div>Error loading data</div>; 

  return (
    <div>
      <button onClick={fetchData} style={{ position: 'absolute', top: 10, right: 10, backgroundColor: 'blue', color: 'white'  }}>
        Fetch Data
      </button>
      {loading && <div style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Loading...</div>}
      <h1>Current Person</h1>
      <pre>{JSON.stringify(currentPerson, null, 2)}</pre>
      <h1>Person history</h1>
      <pre>{JSON.stringify(personHistory, null, 2)}</pre>
    </div>
  );
}
*/