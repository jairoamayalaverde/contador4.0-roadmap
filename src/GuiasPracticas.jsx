// GuiasPracticas.jsx
// Componente de pestaña "Guías Prácticas" para Roadmap Contador 4.0
// Versión: 1.0 - Noviembre 2025 (Modificada para versión gratuita)

import React from 'react';
import { Download, CheckCircle, Clock, Calendar, Star } from 'lucide-react';

// ==========================================
// DATOS DE LAS GUÍAS
// ==========================================

const guiasData = {
  gratis: [
    {
      id: 1,
      numero: "01",
      titulo: "Primera Victoria Rápida",
      subtitulo: "Tu primer resultado en menos de una semana",
      semanas: "Semanas 1-2",
      tiempo: "4-5 horas",
      descripcion: "Obtén tu primer resultado impactante con IA eligiendo el camino correcto y ejecutando tus primeros 3 prompts con datos reales.",
      beneficios: [
        "Configura tus herramientas en 45 minutos",
        "Elige entre 3 caminos de implementación",
        "Documenta tu primera victoria con métricas reales",
        "Ahorra 3-5 horas en tu primera semana"
      ],
      prompts_clave: "1-5, 16-20, o 31-35 (según camino)",
      archivo: "/guias/GUIA-01-PRIMERA-VICTORIA-RAPIDA.pdf",
      destacado: true,
      color: "blue"
    },
    {
      id: 2,
      numero: "02",
      titulo: "Automatización de Reportes",
      subtitulo: "De 4-6 horas a 30-45 minutos por reporte",
      semanas: "Semanas 3-4",
      tiempo: "3 horas",
      descripcion: "Crea plantillas reutilizables de prompts para los reportes que generas más frecuentemente.",
      beneficios: [
        "Identifica tus 3-5 reportes más frecuentes",
        "Crea biblioteca de plantillas personalizadas",
        "Reduce tiempo de reportes en 60-70%",
        "Ahorra 12+ horas mensuales"
      ],
      prompts_clave: "46-60 (Reportes y Dashboards)",
      archivo: "/guias/GUIA-02-AUTOMATIZACION-REPORTES.pdf",
      destacado: true,
      color: "green"
    }
  ],
  // Sección premium eliminada
};

// ==========================================
// COMPONENTE: BADGE DE ESTADO
// ==========================================

const BadgeEstado = ({ tipo }) => {
  const estilos = {
    gratis: "bg-green-100 text-green-700 border-green-200",
    // premium: "bg-purple-100 text-purple-700 border-purple-200", // Eliminado
    nuevo: "bg-blue-100 text-blue-700 border-blue-200"
  };

  const textos = {
    gratis: "✓ INCLUIDO GRATIS",
    // premium: "🔒 PREMIUM", // Eliminado
    nuevo: "⭐ NUEVO"
  };

  return (
    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${estilos[tipo]}`}>
      {textos[tipo]}
    </span>
  );
};

// ==========================================
// COMPONENTE: TARJETA DE GUÍA
// ==========================================

const GuiaCard = ({ guia, onDescargar }) => { // Eliminados props esPremium y onVerMas
  const colorClasses = {
    blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50",
    orange: "border-orange-500 bg-orange-50",
    pink: "border-pink-500 bg-pink-50",
    teal: "border-teal-500 bg-teal-50"
  };

  const colorBg = colorClasses[guia.color] || "border-gray-500 bg-gray-50";

  return (
    <div 
      // Lógica 'esPremium' eliminada
      className={`relative rounded-xl border-2 ${colorBg} p-6 transition-all hover:shadow-lg hover:-translate-y-1`}
    >
      {/* Badge superior */}
      <div className="flex items-center justify-between mb-4">
        <BadgeEstado tipo="gratis" />
        {guia.destacado && (
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
        )}
      </div>

      {/* Número de guía grande */}
      <div className="text-5xl font-bold text-gray-200 absolute top-4 right-4">
        {guia.numero}
      </div>

      {/* Título */}
      <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10">
        {guia.titulo}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {guia.subtitulo}
      </p>

      {/* Meta info */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{guia.semanas}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{guia.tiempo}</span>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-gray-700 mb-4">
        {guia.descripcion}
      </p>

      {/* Beneficios */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-2">Lo que aprenderás:</p>
        <ul className="space-y-1">
          {guia.beneficios.map((beneficio, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{beneficio}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prompts clave */}
      <div className="mb-4 p-3 bg-white rounded-lg border border-gray-200">
        <p className="text-xs text-gray-500 mb-1">Prompts clave del e-book:</p>
        <p className="text-sm font-semibold text-gray-700">{guia.prompts_clave}</p>
      </div>

      {/* Botones de acción */}
      <div className="mt-6">
        { /* Lógica 'esPremium' eliminada, solo queda el botón de descarga */ }
        <button
          onClick={() => onDescargar && onDescargar(guia)}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all"
        >
          <Download className="w-5 h-5" />
          Descargar Guía Gratis
        </button>
      </div>
    </div>
  );
};

// ==========================================
// COMPONENTE: CTA PACK PREMIUM
// ==========================================

// Componente CtaPremium eliminado

// ==========================================
// COMPONENTE PRINCIPAL: GUÍAS PRÁCTICAS
// ==========================================

const GuiasPracticas = () => {
  // Estado 'guiaSeleccionada' eliminado
  // Funciones 'handleComprarPremium' y 'handleVerMas' eliminadas

  const handleDescargar = (guia) => {
    // Implementar lógica de descarga
    console.log('Descargando guía:', guia.titulo);
    // En producción: window.location.href = guia.archivo;
    alert(`Descargando: ${guia.titulo}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          📚 Guías Prácticas del Roadmap
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Paso a paso detallado para implementar cada fase del roadmap de 90 días. 
          Incluye ejercicios, plantillas, checklists y casos reales.
        </p>
      </div>

      {/* Sección: Guías Gratis */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            🎁 Guías Gratuitas Incluidas
          </h2>
          <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
            Ya son tuyas
          </span>
        </div>
        
        <p className="text-gray-600 mb-8">
          Estas guías ya están incluidas con tu compra del e-book Contador 4.0. 
          Descárgalas y comienza tu transformación hoy mismo.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {guiasData.gratis.map((guia) => (
            <GuiaCard
              key={guia.id}
              guia={guia}
              // prop 'esPremium' eliminada
              onDescargar={handleDescargar}
            />
          ))}
        </div>
      </div>

      {/* CTA Premium Eliminado */}

      {/* Sección: Guías Premium Eliminada */}

      {/* FAQs rápidos (versión gratuita) */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Preguntas Frecuentes
        </h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div>
            <p className="font-semibold text-gray-900 mb-2">
              ¿Qué incluyen las guías?
            </p>
            <p className="text-gray-600 text-sm">
              Cada guía incluye: paso a paso detallado, ejercicios prácticos, plantillas descargables, 
              casos reales, checklists y métricas de éxito.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-2">
              ¿Cuánto tiempo toma completar cada guía?
            </p>
            <p className="text-gray-600 text-sm">
              Entre 3-8 horas por guía, distribuidas en 1-2 semanas. 
              Diseñadas para profesionales ocupados.
            </p>
          </div>
          { /* Preguntas sobre premium y garantía eliminadas */ }
        </div>
      </div>

      {/* CTA final Eliminado */}
    </div>
  );
};

export default GuiasPracticas;
