// --- DATOS DEL PLAN DE 90 DÍAS (VERSIÓN MEJORADA) ---
// Actualizado según análisis completo del e-book PDF
// Fecha: Noviembre 2025

// ===== NUEVAS ESTRUCTURAS DE DATOS =====

export const roiEsperado = {
  inversionTiempo: "35-44 horas en 12 semanas",
  ahorroSemanal: "25-30 horas/semana",
  roiPorcentaje: "1,200%+ en 6 meses",
  equivalente: "~1 mes de trabajo recuperado al año"
};

export const fasesAprendizaje = [
  { nombre: "USAR", semanas: "1-2", descripcion: "Primera victoria con prompts básicos", color: "#3b82f6" },
  { nombre: "ENTENDER", semanas: "3-4", descripcion: "Integración en flujo de trabajo", color: "#10b981" },
  { nombre: "DOMINAR", semanas: "5-8", descripcion: "Posicionamiento premium", color: "#8b5cf6" },
  { nombre: "CREAR", semanas: "9-12", descripcion: "Prompts personalizados únicos", color: "#f59e0b" }
];

export const categorias = [
  { id: "A", nombre: "Análisis Financiero Estratégico", prompts: "1-15", color: "#3b82f6" },
  { id: "B", nombre: "Comunicación Empresarial", prompts: "16-30", color: "#10b981" },
  { id: "C", nombre: "Propuestas y Cotizaciones", prompts: "31-45", color: "#f59e0b" },
  { id: "D", nombre: "Reportes y Dashboards", prompts: "46-60", color: "#8b5cf6" },
  { id: "E", nombre: "Cumplimiento Fiscal", prompts: "61-75", color: "#ef4444" },
  { id: "F", nombre: "Auditoría y Control Interno", prompts: "76-90", color: "#06b6d4" },
  { id: "G", nombre: "Clientes Internacionales", prompts: "91-105", color: "#ec4899" },
  { id: "H", nombre: "Optimización y Consultoría", prompts: "106-115", color: "#14b8a6" }
];

// ===== PLAN DE 90 DÍAS =====

export const semanas = [
  {
    id: 1,
    titulo: "Semana 1-2: Fundamentos y Primera Victoria Rápida",
    objetivo: "Configurar herramientas básicas y obtener tu primer resultado impactante",
    fase: "USAR",
    tiempo: "6-8 horas totales",
    tareas: [
      {
        id: 1,
        nombre: "Configurar herramientas de IA",
        descripcion: "Probar el Asistente Contador 4.0 incluido, y crear cuentas en Claude.ai (recomendado para análisis profundo), ChatGPT (para visuales/tablas), y Gemini (opcional para hojas de cálculo)",
        tiempo: "45 min",
        recursos: ["Asistente Contador 4.0", "Claude.ai", "ChatGPT", "Gemini"]
      },
      {
        id: 2,
        nombre: "Seleccionar tu camino de implementación",
        descripcion: "Elige según tu mayor dolor: CAMINO A - Análisis Financiero (Prompts 1-15), CAMINO B - Propuestas Comerciales (Prompts 31-33), o CAMINO C - Reportes Ejecutivos (Prompts 16-18). Esta decisión define tus primeros prompts a probar",
        tiempo: "15 min",
        caminos: [
          { nombre: "Camino A: Análisis Financiero", prompts: "1-15", dolor: "Análisis que toma horas" },
          { nombre: "Camino B: Propuestas Comerciales", prompts: "31-33", dolor: "Propuestas que no cierran" },
          { nombre: "Camino C: Reportes Ejecutivos", prompts: "16-18", dolor: "Reportes que no entienden" }
        ]
      },
      {
        id: 3,
        nombre: "Probar 3 prompts de tu camino elegido",
        descripcion: "Ejecuta los prompts específicos de tu camino usando datos reales de un cliente (anonimizados). Itera hasta obtener resultados profesionales",
        tiempo: "2-3 horas"
      },
      {
        id: 4,
        nombre: "Crear tu primera plantilla personalizada",
        descripcion: "Adapta el prompt que mejor funcionó a tu estilo: agrega tu terminología, ajusta formato de salida, y documenta cuándo usarlo",
        tiempo: "1 hora"
      },
      {
        id: 5,
        nombre: "Presentar un resultado a un cliente",
        descripcion: "Usa el análisis generado para impresionar. Entrega el reporte o propuesta y observa la reacción",
        tiempo: "1-2 horas"
      },
      {
        id: 6,
        nombre: "Documentar tu primera victoria",
        descripcion: "Mide el ahorro de tiempo (antes vs después), registra feedback del cliente, captura evidencia visual del resultado. Este registro será tu caso de éxito para Semana 5-8",
        tiempo: "30 min",
        mediciones: ["Tiempo sin IA", "Tiempo con IA", "Feedback cliente", "Screenshot resultado"]
      }
    ],
    prompts_clave: [
      "Prompt 1: Análisis de Rentabilidad Multidimensional",
      "Prompt 16: Comunicación de Cambios a Clientes", 
      "Prompt 31: Propuesta Integral de Servicios Contables",
      "Prompt 46: Framework Integral de KPIs"
    ],
    resultado_esperado: "Un entregable profesional que te habría tomado 4+ horas, completado en 45 minutos, con nivel de detalle que impresiona al cliente"
  },
  {
    id: 2,
    titulo: "Semana 3-4: Expansión Estratégica",
    objetivo: "Integrar IA en tu flujo de trabajo principal y automatizar procesos repetitivos",
    fase: "ENTENDER",
    tiempo: "8-10 horas totales",
    tareas: [
      {
        id: 1,
        nombre: "Auditoría de tu semana con plantilla Excel",
        descripcion: "Descarga y completa la plantilla Excel incluida para mapear actividades, horas semanales, y prompts aplicables. Identifica tus 5 tareas más repetitivas priorizando por: tiempo × frecuencia",
        tiempo: "45 min",
        recursos: ["Plantilla Excel de Auditoría"]
      },
      {
        id: 2,
        nombre: "Mapear prompts a cada tarea repetitiva",
        descripcion: "Asigna al menos 2 prompts por tarea identificada. Busca en las 8 categorías del e-book (A-H) los prompts más aplicables a cada actividad",
        tiempo: "1 hora"
      },
      {
        id: 3,
        nombre: "Crear tu 'Biblioteca de Prompts Favoritos'",
        descripcion: "Usa la web app interactiva incluida o descarga la plantilla Excel. Documenta tus 10 prompts más usados con: cuándo usar, personalización aplicada, tiempo estimado, y ejemplos reales",
        tiempo: "2 horas",
        recursos: ["Web App de Biblioteca", "Plantilla Excel de Biblioteca"]
      },
      {
        id: 4,
        nombre: "Automatizar tus reportes más frecuentes",
        descripcion: "Crea plantillas reutilizables usando Prompts 46-60 (Reportes y Dashboards) para tus informes mensuales, trimestrales y análisis recurrentes. Enfócate en los 3 reportes que más tiempo te toman",
        tiempo: "3 horas",
        categoriaFoco: "D. Reportes y Dashboards (46-60)"
      },
      {
        id: 5,
        nombre: "Diseñar tu 'Semana Potenciada con IA'",
        descripcion: "Crea tu calendario semanal: LUNES - Revisar calendario fiscal (Prompt 61) + reportes ejecutivos (49-51). MIÉRCOLES - Análisis de desviaciones (55-57) + comunicaciones a clientes (16-18). VIERNES - Propuestas/cotizaciones (31-36) + documentación de aprendizajes",
        tiempo: "1 hora planning",
        estructura: {
          lunes: "Calendario fiscal + Reportes ejecutivos (1h total)",
          miercoles: "Análisis desviaciones + Comunicaciones",
          viernes: "Propuestas comerciales + Documentación"
        }
      }
    ],
    prompts_clave: [
      "Prompt 61: Calendario Fiscal Personalizado",
      "Prompts 49-51: Reportes Ejecutivos Multi-periodicidad", 
      "Prompts 55-57: Análisis de Desviaciones Presupuestarias",
      "Prompts 31-36: Propuestas y Cotizaciones"
    ],
    resultado_esperado: "Reducción del 40% en tiempo de tareas administrativas y reporteo. Capacidad de generar reportes ejecutivos en 15 minutos que antes tomaban 2 horas"
  },
  {
    id: 3,
    titulo: "Semana 5-8: Posicionamiento Premium",
    objetivo: "Diferenciarte de la competencia y justificar honorarios más altos",
    fase: "DOMINAR",
    tiempo: "12-15 horas totales",
    tareas: [
      {
        id: 1,
        nombre: "Crear tu 'Paquete de Servicios IA-Enhanced'",
        descripcion: "Rediseña tus servicios destacando análisis avanzado y reportes premium. Usa Prompts 37-39 para estructurar servicios de valor agregado que justifiquen precios superiores",
        tiempo: "3 horas"
      },
      {
        id: 2,
        nombre: "Desarrollar 3 casos de éxito documentados",
        descripcion: "Usa las victorias documentadas en Semana 1-2 y 3-4. Para cada caso incluye: antes/después con métricas (tiempo ahorrado, insights descubiertos, resultados del cliente), testimonial si es posible",
        tiempo: "4 horas"
      },
      {
        id: 3,
        nombre: "Crear propuesta premium con nueva cotización",
        descripcion: "Usar prompts 34-36 para estructurar paquetes diferenciados (Básico, Profesional, Premium). Incluye servicios IA-enhanced como diferenciador clave",
        tiempo: "2 horas"
      },
      {
        id: 4,
        nombre: "Presentar servicios mejorados a 3 clientes clave",
        descripcion: "Enfoque: mismo precio, más valor / o más valor, precio ajustado. Usa los casos de éxito como evidencia social del valor agregado",
        tiempo: "3-4 horas"
      },
      {
        id: 5,
        nombre: "Medir resultados y testimonios",
        descripcion: "Solicitar feedback específico sobre valor percibido. Preguntas clave: ¿Qué diferencia notaste? ¿El nivel de análisis superó expectativas? ¿Recomendarías estos servicios?",
        tiempo: "1 hora"
      }
    ],
    prompts_clave: [
      "Prompts 37-39: Servicios de Valor Agregado", 
      "Prompts 40-42: Justificación de Honorarios", 
      "Prompts 52-54: Dashboards Ejecutivos Premium"
    ],
    resultado_esperado: "Al menos 1 cliente acepta servicios premium con incremento de 30-50% en honorarios. Portfolio de 3 casos de éxito documentados para usar en ventas futuras"
  },
  {
    id: 4,
    titulo: "Semana 9-12: Dominio y Escalamiento",
    objetivo: "Crear tu sistema único y entrenar tu equipo (si aplica)",
    fase: "CREAR",
    tiempo: "10-12 horas totales",
    tareas: [
      {
        id: 1,
        nombre: "Crear tus 5 prompts personalizados únicos",
        descripcion: "Aplica la metodología de 'Anatomía de un Prompt Perfecto' (Sección 7 del e-book) para casos específicos de tu práctica. Incluye: objetivo claro, rol/contexto, información base, formato de salida, y restricciones. Itera usando la fórmula de Prompts Express incluida",
        tiempo: "4 horas",
        componentes: ["Objetivo claro", "Rol/contexto", "Información base", "Formato salida", "Restricciones"],
        referencias: ["Sección 7: Anatomía de un Prompt", "Fórmula Prompts Express"]
      },
      {
        id: 2,
        nombre: "Documentar tu metodología propia",
        descripcion: "Manual interno: 'Cómo usamos IA en [Tu Firma]'. Incluye: biblioteca de prompts personalizados, casos de éxito, mejores prácticas descubiertas, errores comunes a evitar",
        tiempo: "3 horas"
      },
      {
        id: 3,
        nombre: "Entrenar a colaboradores (si tienes equipo)",
        descripcion: "Sesión práctica: casos reales, mejores prácticas, errores comunes. Usa tu manual interno como guía. Permite que cada colaborador cree al menos 1 prompt personalizado",
        tiempo: "2-3 horas"
      },
      {
        id: 4,
        nombre: "Establecer KPIs de uso de IA",
        descripcion: "Métricas a trackear: horas ahorradas/semana, % de clientes con reportes IA-enhanced, satisfacción cliente (NPS), nuevos servicios vendidos gracias a IA",
        tiempo: "1 hora",
        kpis: [
          "Horas ahorradas por semana",
          "% clientes con reportes IA",
          "NPS de servicios premium",
          "Nuevos servicios vendidos"
        ]
      },
      {
        id: 5,
        nombre: "Planificar expansión: nuevos servicios o nichos",
        descripcion: "¿Auditoría IA? ¿Consultoría estratégica? ¿Clientes internacionales? Revisa Categorías F, G, H del e-book (Auditoría 76-90, Internacionales 91-105, Consultoría 106-115) para identificar oportunidades",
        tiempo: "2 horas",
        categoriasFoco: [
          "F. Auditoría y Control Interno (76-90)",
          "G. Clientes Internacionales (91-105)",
          "H. Optimización y Consultoría (106-115)"
        ]
      }
    ],
    prompts_clave: [
      "Sección 7: Anatomía de un Prompt Perfecto",
      "Fórmula Prompts Express",
      "Prompts 85-87: Mejora Continua de Procesos", 
      "Prompts 91-105: Expansión a Clientes Internacionales"
    ],
    resultado_esperado: "Sistema replicable que te permite manejar 30% más clientes sin aumentar horas de trabajo. Equipo capacitado en metodología IA. Roadmap de expansión definido"
  }
];

export const metricas = [
  { nombre: "Horas Ahorradas/Semana", semana4: "10-15h", semana8: "20-25h", semana12: "25-30h" },
  { nombre: "Incremento Honorarios", semana4: "0-10%", semana8: "15-30%", semana12: "30-50%" },
  { nombre: "Clientes Nuevos Posibles", semana4: "+1-2", semana8: "+3-5", semana12: "+5-8" },
  { nombre: "Nivel de Diferenciación", semana4: "Básico", semana8: "Intermedio", semana12: "Experto" }
];

// ===== RECURSOS INCLUIDOS =====

export const recursosIncluidos = [
  {
    nombre: "Asistente Contador 4.0",
    descripcion: "Asistente virtual incluido en tu compra para consultas rápidas",
    tipo: "webapp",
    semana: "1-2"
  },
  {
    nombre: "Web App de Biblioteca de Prompts",
    descripcion: "Sistema interactivo con filtros, búsqueda y copiar prompts con un clic",
    tipo: "webapp",
    semana: "3-4"
  },
  {
    nombre: "Plantilla Excel de Auditoría de Semana",
    descripcion: "Tabla para mapear actividades, tiempo y prompts aplicables",
    tipo: "excel",
    semana: "3-4"
  },
  {
    nombre: "Plantilla Excel de Biblioteca Personal",
    descripcion: "Sistema de documentación para organizar tus prompts favoritos",
    tipo: "excel",
    semana: "3-4"
  },
  {
    nombre: "Guía: Anatomía de un Prompt Perfecto",
    descripcion: "Sección 7 del e-book con metodología completa de creación",
    tipo: "contenido",
    semana: "9-12"
  },
  {
    nombre: "Fórmula Prompts Express",
    descripcion: "Sistema para reducir prompts largos al 50% manteniendo efectividad",
    tipo: "contenido",
    semana: "9-12"
  }
];

// ===== NOTAS DE VERSIÓN =====

export const versionInfo = {
  version: "2.0",
  fecha: "Noviembre 2025",
  cambiosPrincipales: [
    "Eliminada referencia a 'integración con software contable'",
    "Agregadas menciones al Asistente Contador 4.0",
    "Incluidos los 3 Caminos de implementación (A, B, C)",
    "Agregada tarea de Documentación de Victoria en Semana 1-2",
    "Actualizada referencia a plantilla Excel y web app en Semana 3-4",
    "Mejorada descripción de Rutina Semanal (Lunes/Miércoles/Viernes)",
    "Corregidos prompts_clave según e-book PDF",
    "Agregadas estructuras de datos: ROI, Fases, Categorías, Recursos"
  ],
  coherenciaConEbook: "100%"
};
