// GuiasPracticas.jsx
// Componente de pestaña "Guías Prácticas" para Roadmap Contador 4.0
// Versión: 1.0 - Noviembre 2025

import React, { useState } from 'react';
import { Download, Lock, CheckCircle, Clock, Calendar, ArrowRight, Star, Zap } from 'lucide-react';

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
  premium: [
    {
      id: 3,
      numero: "03",
      titulo: "Posicionamiento Premium",
      subtitulo: "Diferénciate como 'Contador 4.0'",
      semanas: "Semanas 5-8",
      tiempo: "5-6 horas",
      descripcion: "Construye tu marca personal con IA y posiciónate como experto moderno que justifica tarifas 30-50% superiores.",
      beneficios: [
        "Crea marca personal con IA",
        "Scripts de pitch para redes sociales",
        "Casos de estudio automatizados",
        "Página de servicios modernizada"
      ],
      prompts_clave: "16-30 (Comunicación Empresarial)",
      color: "purple"
    },
    {
      id: 4,
      numero: "04",
      titulo: "Propuestas Ganadoras",
      subtitulo: "Sistema de propuestas con 60%+ conversión",
      semanas: "Transversal",
      tiempo: "4 horas",
      descripcion: "Framework completo para crear propuestas personalizadas a escala que convierten en 60% vs 40% promedio.",
      beneficios: [
        "Framework de propuestas con IA",
        "Personalización a escala",
        "Biblioteca de casos de éxito",
        "Templates por industria"
      ],
      prompts_clave: "31-45 (Propuestas y Cotizaciones)",
      color: "orange"
    },
    {
      id: 5,
      numero: "05",
      titulo: "Creación de Prompts Propios",
      subtitulo: "Domina el arte de crear prompts personalizados",
      semanas: "Semanas 9-12",
      tiempo: "6 horas",
      descripcion: "Aprende a crear tus propios prompts optimizados para tu nicho específico y casos únicos de tus clientes.",
      beneficios: [
        "Anatomía de un prompt efectivo",
        "Framework de creación paso a paso",
        "Testing y refinamiento",
        "Biblioteca personal de 10-15 prompts"
      ],
      prompts_clave: "Todos (como ejemplos de estructura)",
      color: "pink"
    },
    {
      id: 6,
      numero: "06",
      titulo: "Sistematización Completa",
      subtitulo: "Opera tu firma sin estar presente 80% del tiempo",
      semanas: "Avanzado",
      tiempo: "8 horas",
      descripcion: "Sistema completo de automatización para que tu operación funcione sin ti la mayor parte del tiempo.",
      beneficios: [
        "SOPs con IA integrada",
        "Workflows automatizados",
        "Onboarding de clientes con IA",
        "Dashboard de operaciones"
      ],
      prompts_clave: "46-60, 76-90 (Reportes, Auditoría)",
      color: "teal"
    }
  ]
};

// ==========================================
// COMPONENTE: BADGE DE ESTADO
// ==========================================

const BadgeEstado = ({ tipo }) => {
  const estilos = {
    gratis: "bg-green-100 text-green-700 border-green-200",
    premium: "bg-purple-100 text-purple-700 border-purple-200",
    nuevo: "bg-blue-100 text-blue-700 border-blue-200"
  };

  const textos = {
    gratis: "✓ INCLUIDO GRATIS",
    premium: "🔒 PREMIUM",
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

const GuiaCard = ({ guia, esPremium = false, onDescargar, onVerMas }) => {
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
      className={`relative rounded-xl border-2 ${esPremium ? 'border-gray-300 bg-gray-50 opacity-75' : colorBg} p-6 transition-all hover:shadow-lg ${!esPremium && 'hover:-translate-y-1'}`}
    >
      {/* Badge superior */}
      <div className="flex items-center justify-between mb-4">
        <BadgeEstado tipo={esPremium ? "premium" : "gratis"} />
        {guia.destacado && !esPremium && (
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
        {esPremium ? (
          <button
            onClick={() => onVerMas && onVerMas(guia)}
            className="w-full bg-gray-300 text-gray-600 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 cursor-not-allowed"
            disabled
          >
            <Lock className="w-5 h-5" />
            Desbloquear con Pack Premium
          </button>
        ) : (
          <button
            onClick={() => onDescargar && onDescargar(guia)}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all"
          >
            <Download className="w-5 h-5" />
            Descargar Guía Gratis
          </button>
        )}
      </div>
    </div>
  );
};

// ==========================================
// COMPONENTE: CTA PACK PREMIUM
// ==========================================

const CtaPremium = ({ onComprar }) => {
  return (
    <div className="my-12 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-2xl p-8 text-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-4">
          <span className="bg-yellow-400 text-purple-900 text-xs font-bold px-4 py-2 rounded-full">
            🔥 OFERTA ESPECIAL
          </span>
        </div>

        {/* Título */}
        <h2 className="text-4xl font-bold mb-4">
          Pack Premium: 4 Guías Avanzadas
        </h2>
        <p className="text-xl text-purple-100 mb-6">
          Acelera tu transformación con las guías de las Semanas 5-12
        </p>

        {/* Beneficios principales */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Zap className="w-8 h-8 mb-2 mx-auto" />
            <p className="font-semibold mb-1">18 horas de contenido</p>
            <p className="text-sm text-purple-200">Estrategias avanzadas paso a paso</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Star className="w-8 h-8 mb-2 mx-auto" />
            <p className="font-semibold mb-1">100+ Plantillas</p>
            <p className="text-sm text-purple-200">Scripts, frameworks y ejemplos</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <CheckCircle className="w-8 h-8 mb-2 mx-auto" />
            <p className="font-semibold mb-1">ROI 15,000%+</p>
            <p className="text-sm text-purple-200">Recupera tu inversión en 2 semanas</p>
          </div>
        </div>

        {/* Precio */}
        <div className="mb-6">
          <div className="text-purple-200 line-through mb-1">Valor normal: $188</div>
          <div className="text-5xl font-bold mb-2">$47</div>
          <div className="text-purple-200">
            🎁 Descuento de lanzamiento: <span className="font-bold text-yellow-300">$37</span> (primeras 24h)
          </div>
        </div>

        {/* Botón de compra */}
        <button
          onClick={onComprar}
          className="bg-yellow-400 text-purple-900 text-lg font-bold px-10 py-4 rounded-full hover:bg-yellow-300 transition-all inline-flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          Obtener Pack Premium Ahora
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Garantía */}
        <p className="mt-6 text-sm text-purple-200">
          ✓ Acceso inmediato a las 4 guías • ✓ Actualizaciones gratis de por vida • ✓ Garantía 30 días
        </p>
      </div>
    </div>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL: GUÍAS PRÁCTICAS
// ==========================================

const GuiasPracticas = () => {
  const [guiaSeleccionada, setGuiaSeleccionada] = useState(null);

  const handleDescargar = (guia) => {
    // Implementar lógica de descarga
    console.log('Descargando guía:', guia.titulo);
    // En producción: window.location.href = guia.archivo;
    alert(`Descargando: ${guia.titulo}`);
  };

  const handleComprarPremium = () => {
    // Implementar lógica de compra (redirigir a checkout)
    console.log('Comprando Pack Premium');
    // En producción: window.location.href = '/checkout/pack-premium';
    alert('Redirigiendo a página de pago...');
  };

  const handleVerMas = (guia) => {
    setGuiaSeleccionada(guia);
    // Podría abrir un modal con más información
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
              esPremium={false}
              onDescargar={handleDescargar}
            />
          ))}
        </div>
      </div>

      {/* CTA Premium */}
      <CtaPremium onComprar={handleComprarPremium} />

      {/* Sección: Guías Premium */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            🔒 Guías Premium del Pack
          </h2>
          <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full">
            Semanas 5-12
          </span>
        </div>
        
        <p className="text-gray-600 mb-8">
          Lleva tu implementación al siguiente nivel con estrategias avanzadas, 
          posicionamiento premium y automatización completa.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {guiasData.premium.map((guia) => (
            <GuiaCard
              key={guia.id}
              guia={guia}
              esPremium={true}
              onVerMas={handleVerMas}
            />
          ))}
        </div>
      </div>

      {/* FAQs rápidos */}
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
              ¿Necesito comprar el pack premium?
            </p>
            <p className="text-gray-600 text-sm">
              No es obligatorio. Las 2 guías gratis son suficientes para empezar. 
              El pack premium acelera tu progreso en las semanas 5-12.
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
          <div>
            <p className="font-semibold text-gray-900 mb-2">
              ¿Hay garantía de devolución?
            </p>
            <p className="text-gray-600 text-sm">
              Sí, garantía de 30 días sin preguntas. Si no ves resultados, 
              devolvemos tu dinero.
            </p>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          ¿Listo para acelerar tu transformación?
        </p>
        <button
          onClick={handleComprarPremium}
          className="bg-purple-600 text-white text-lg font-bold px-8 py-3 rounded-lg hover:bg-purple-700 transition-all inline-flex items-center gap-2"
        >
          Ver Pack Premium
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default GuiasPracticas;
