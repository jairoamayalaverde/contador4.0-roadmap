import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, ChevronDown, ChevronRight, Clock, Target, AlertCircle } from 'lucide-react';
import { semanas, metricas } from './roadmapData'; // Importa los datos

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

export default function App() {
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

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
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
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {expandedWeek === semana.id ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                  <h2 className="text-xl sm:text-2xl font-bold">{semana.titulo}</h2>
                </div>
                <p className="text-blue-100 ml-9 mb-3 text-sm sm:text-base">{semana.objetivo}</p>
                <div className="flex flex-wrap gap-2 sm:gap-4 ml-9 text-sm">
                  <span className="bg-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm">
                    ⏱️ {semana.tiempo}
                  </span>
                  <span className="bg-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm">
                    📋 {semana.tareas.length} tareas
                  </span>
                </div>
              </div>
            </div>
          </div>

          {expandedWeek === semana.id && (
            <div className="p-4 sm:p-6">
              <div className="space-y-4 mb-6">
                {semana.tareas.map((tarea) => {
                  const isCompleted = completedTasks[`${semana.id}-${tarea.id}`];
                  return (
                    <div
                      key={tarea.id}
                      className={`border rounded-lg p-4 transition-all cursor-pointer hover:shadow-md ${
                        isCompleted ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-200'
                      }`}
                      onClick={() => toggleTask(semana.id, tarea.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          {isCompleted ? (
                            <CheckSquare className="text-green-600" size={24} />
                          ) : (
                            <Square className="text-gray-400" size={24} />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold mb-1 ${isCompleted ? 'text-green-900 line-through' : 'text-gray-900'}`}>
                            {tarea.nombre}
                          </h4>
                          <p className="text-gray-600 text-sm mb-2">{tarea.descripcion}</p>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            ⏱️ {tarea.tiempo}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-amber-900 mb-2">🎯 Prompts Clave para Esta Fase:</h4>
                <ul className="list-disc list-inside text-amber-800 text-sm space-y-1">
                  {semana.prompts_clave.map((prompt, idx) => (
                    <li key={idx}>{prompt}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">✅ Resultado Esperado:</h4>
                <p className="text-green-800">{semana.resultado_esperado}</p>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mt-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Progreso Esperado: Evolución de Métricas
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 sm:p-4 font-semibold text-gray-700 text-sm">Métrica</th>
                <th className="text-center p-3 sm:p-4 font-semibold text-blue-700 text-sm">Semana 4</th>
                <th className="text-center p-3 sm:p-4 font-semibold text-blue-700 text-sm">Semana 8</th>
                <th className="text-center p-3 sm:p-4 font-semibold text-green-700 text-sm">Semana 12</th>
              </tr>
            </thead>
            <tbody>
              {metricas.map((metrica, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50 text-sm">
                  <td className="p-3 sm:p-4 font-medium text-gray-900">{metrica.nombre}</td>
                  <td className="text-center p-3 sm:p-4 text-blue-800">{metrica.semana4}</td>
                  <td className="text-center p-3 sm:p-4 text-blue-800">{metrica.semana8}</td>
                  <td className="text-center p-3 sm:p-4 text-green-800 font-semibold">{metrica.semana12}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-lg p-6 mt-8">
        <h3 className="text-lg sm:text-xl font-bold text-red-900 mb-3">⚠️ Errores Comunes a Evitar</h3>
        <ul className="space-y-2 text-red-800 text-sm sm:text-base">
          <li className="flex items-start gap-2">
            <span className="font-bold mt-1">❌</span>
            <span><strong>Querer usar todos los prompts a la vez:</strong> Enfócate en tu mayor problema primero</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold mt-1">❌</span>
            <span><strong>No personalizar los prompts:</strong> Adapta a tu terminología y estilo</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold mt-1">❌</span>
            <span><strong>Abandonar tras un resultado mediocre:</strong> Itera, ajusta, mejora</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold mt-1">❌</span>
            <span><strong>No medir el impacto:</strong> Documenta tiempo ahorrado y mejoras</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold mt-1">❌</span>
            <span><strong>Mantener la IA en secreto:</strong> Úsala como ventaja competitiva visible</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mt-8 text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-4">🚀 ¿Listo para empezar?</h3>
        <p className="text-blue-100 mb-6 text-base sm:text-lg">
          La diferencia entre un contador promedio y un Contador 4.0 no es el conocimiento técnico, sino la capacidad de ejecutar más rápido y con mayor valor agregado.
        </p>
        <p className="text-lg sm:text-xl font-semibold">
          Empieza HOY con la Semana 1. En 30 días notarás la diferencia. En 90 días, serás irreemplazable.
        </p>
      </div>

      {/* --- INICIO: FOOTER AÑADIDO --- */}
      <footer className="mt-8 pt-8 border-t border-gray-300 text-center text-sm text-gray-500">
        <p>
          Plan de 90 días - Roadmap es una herramienta de seguimiento desarrollada por Jairo Amaya - Full Stack Marketer como complemento del E-book Contador 4.0 sistema de Transformación con IA para Contadores
        </p>
        <p className="mt-2">
          © 2025 Todos los derechos reservados
        </p>
      </footer>
      {/* --- FIN: FOOTER AÑADIDO --- */}

    </div>
  );
}
