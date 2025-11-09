import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, ChevronDown, ChevronRight, Clock, Target, AlertCircle } from 'lucide-react';
import { semanas, metricas } from './roadmapData'; // Importa los datos

// --- 1. IMPORTAR GUÍAS ---
// Importa el componente de guías que creamos [cite: 18]
import GuiasPracticas from './components/GuiasPracticas'; 

// Clave para el localStorage
const LOCAL_STORAGE_KEY = 'contador40_roadmap_progress';

// Función para cargar el estado desde localStorage
const loadProgress = () => {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    console.error("No se pudo cargar el progreso:", e);
    return {};
  }
};


// --- 2. RENOMBRAR TU COMPONENTE ---
// Renombramos tu 'App' original a 'RoadmapContent'
// Todo el contenido de tu roadmap está ahora aquí.
function RoadmapContent() {
  const [expandedWeek, setExpandedWeek] = useState(1);
  const [completedTasks, setCompletedTasks] = useState(loadProgress);

  // Efecto para guardar el progreso en localStorage cada vez que cambia
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(completedTasks));
    } catch (e) {
      console.error("No se pudo guardar el progreso:", e);
    }
  }, [completedTasks]);

  const toggleTask = (weekId, taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [`${weekId}-${taskId}`]: !prev[`${weekId}-${taskId}`]
    }));
  };

  // El 'return' principal ahora solo devuelve el contenido
  // El 'div.max-w-6xl' se movió al componente App principal
  return (
    <> {/* Usamos un fragmento <>...</> para agrupar */}
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Plan de Implementación de 90 Días
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          De contador tradicional a Contador 4.0: Tu hoja de ruta completa con tareas específicas, tiempos estimados y resultados esperados.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <Target className="text-blue-600 mb-2" size={24} />
            <div className="text-sm text-gray-600">Inversión Total</div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">35-44 horas</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
            <Clock className="text-green-600 mb-2" size={24} />
            <div className="text-sm text-gray-600">Ahorro Esperado</div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">25-30h/semana</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
            <AlertCircle className="text-purple-600 mb-2" size={24} />
            <div className="text-sm text-gray-600">ROI Estimado</div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">1,200%+</div>
          </div>
        </div>
      </div>

      {semanas.map((semana) => (
        <div key={semana.id} className="bg-white rounded-xl shadow-md mb-6 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-5 sm:p-6 cursor-pointer hover:from-blue-700 hover:to-blue-900 transition-all"
            onClick={() => setExpandedWeek(expandedWeek === semana.id ? null : semana.id)}
          >
            {/* ... (contenido del acordeón) ... */}
          </div>

          {expandedWeek === semana.id && (
            <div className="p-4 sm:p-6">
              {/* ... (contenido de las tareas) ... */}
            </div>
          )}
        </div>
      ))}

      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mt-8">
        {/* ... (contenido de la tabla de métricas) ... */}
      </div>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-lg p-6 mt-8">
        {/* ... (contenido de errores a evitar) ... */}
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mt-8 text-center">
        {/* ... (contenido del CTA final) ... */}
      </div>

      <footer className="mt-8 pt-8 border-t border-gray-300 text-center text-sm text-gray-500">
        {/* ... (contenido del footer) ... */}
      </footer>
    </>
  );
}


// --- 3. CREAR EL NUEVO COMPONENTE APP ---
// Este es el nuevo componente 'App' que controla las pestañas
// y el que exportarás por defecto.
export default function App() {
  // Estado para controlar la pestaña activa 
  const [activeTab, setActiveTab] = useState('roadmap'); 

  // Estilos simples para las pestañas
  const tabStyle = "py-2 px-5 font-semibold text-center";
  const activeTabStyle = "border-b-2 border-blue-600 text-blue-600"; [cite: 25]
  const inactiveTabStyle = "text-gray-500 hover:text-gray-700";

  return (
    // Este 'div' era el contenedor principal de tu archivo original
    <div className="max-w-6xl mx-auto p-4 sm:p-6"> 
      
      {/* Contenedor de los botones de pestañas [cite: 22] */}
      <div className="mb-6 flex space-x-4 border-b border-gray-200">
        <button
          [cite_start]onClick={() => setActiveTab('roadmap')} [cite: 24]
          className={`${tabStyle} ${activeTab === 'roadmap' ? activeTabStyle : inactiveTabStyle}`}
        >
          Roadmap [cite: 27]
        </button>
        <button
          [cite_start]onClick={() => setActiveTab('guias')} [cite: 32]
          className={`${tabStyle} ${activeTab === 'guias' ? activeTabStyle : inactiveTabStyle}`}
        >
          Guías Prácticas [cite: 34]
        </button>
      </div>

      {/* Renderizado condicional del contenido [cite: 37] */}
      <div>
        {activeTab === 'roadmap' && <RoadmapContent />} [cite: 39]
        {activeTab === 'guias' && <GuiasPracticas />} [cite: 41]
      </div>

    </div>
  );
}
