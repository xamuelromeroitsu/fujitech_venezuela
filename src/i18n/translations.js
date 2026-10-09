// Diccionario central de textos visibles. Las claves deben conservar la misma
// estructura en cada idioma para que t('seccion.clave') encuentre su traduccion.
export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      quote: 'Cotizar',
      ipr: 'Semáforo IPR',
      jobs: 'Trabaja con nosotros',
      location: 'Ubicación',
    },
    footer: {
      contact: 'Contacto',
    },
    language: {
      change: 'Cambiar idioma',
      next: 'Siguiente idioma',
      dragHint: 'Pulsa o arrastra el botón y suéltalo para cambiar el idioma.',
      names: {
        es: 'Español',
        en: 'Inglés',
        pt: 'Portugués',
      },
    },
    landing: {
      hero: {
        badge: 'En Venezuela desde 1968',
        title: {
          before: 'Transporte vertical que',
          accent: 'mueve',
          after: 'a Venezuela',
        },
        subtitle:
          'Mantenimiento, modernización e instalación de ascensores y escaleras mecánicas de cualquier marca. Tecnología abierta, repuestos homologados y respuesta rápida para tu comunidad o proyecto.',
        requestQuote: 'Solicitar cotización',
        checkIpr: 'Consultar semáforo IPR',
        trustLabel: 'Garantías de servicio',
        trust: {
          originalParts: 'Repuestos originales',
          since1968: 'Presencia desde 1968',
          response247: 'Respuesta 24/7',
        },
      },
      value: {
        eyebrow: 'Nuestra propuesta',
        title: 'Confianza que se mueve contigo',
        description:
          'Acompañamos juntas de condominio, constructoras y administradores en todo el ciclo de vida del equipo de transporte vertical.',
        pillars: {
          maintenance: {
            title: 'Mantenimiento con margen',
            text: 'Contratos de mantenimiento claros, sin cláusulas abusivas y con repuestos homologados.',
          },
          openTechnology: {
            title: 'Tecnología abierta',
            text: 'Atendemos cualquier marca: sin bloqueos de software ni rehenes de un fabricante.',
          },
          transparentBudgets: {
            title: 'Presupuestos transparentes',
            text: 'Cotizaciones detalladas que eliminan la opacidad de precios del sector.',
          },
          certifiedTalent: {
            title: 'Talento certificado',
            text: 'Técnicos electromecánicos capacitados y respaldados por una multinacional.',
          },
        },
      },
      solutions: {
        eyebrow: 'Portafolio',
        title: 'Soluciones para cada etapa',
        description:
          'Desde la obra nueva hasta el servicio de mantenimiento de larga vida útil, con un solo proveedor de confianza.',
        items: {
          maintenance: {
            title: 'Mantenimiento',
            text: 'Planes Básica, Con Repuestos y Servicio 24/7 con cobertura nacional.',
          },
          modernization: {
            title: 'Modernización',
            text: 'Actualiza equipos antiguos con tecnología nueva sin cambiar todo el hueco.',
          },
          newConstruction: {
            title: 'Obra nueva',
            text: 'Ascensores de pasajeros y carga, escaleras mecánicas y soluciones de accesibilidad.',
          },
        },
      },
      factoryService: {
        eyebrow: 'Marca propia',
        title: 'Servicio de fábrica para equipos Fujitec',
        description:
          'Somos fabricantes: atendemos únicamente nuestros propios equipos con repuestos originales y garantía de fábrica.',
        items: {
          originalParts: {
            title: 'Repuestos originales',
            text: 'Solo componentes homologados de fábrica Fujitec. Sin réplicas ni sustitutos.',
          },
          factoryWarranty: {
            title: 'Garantía real de fábrica',
            text: 'Cada intervención respaldada por la garantía del fabricante a nivel mundial.',
          },
          traceability: {
            title: 'Trazabilidad total',
            text: 'Historial documentado de cada equipo desde su instalación y cada servicio realizado.',
          },
          certifiedTechnicians: {
            title: 'Técnicos certificados',
            text: 'Personal capacitado por la marca, con acceso a especificaciones y manuales originales.',
          },
        },
        noticeTitle: '¿Tu ascensor es de otra marca?',
        noticeText:
          'Podemos evaluar su sustitución por un equipo Fujitec, con asesoría técnica y plan de pagos.',
      },
      testimonials: {
        eyebrow: 'Prueba social',
        title: 'Comunidades que confían en nosotros',
        description:
          'Administradores, juntas y constructoras han encontrado en Fujitec un aliado confiable.',
        items: {
          condominiumBoard: {
            quote:
              'Pasamos de estar rehenes de un fabricante a un contrato claro con repuestos disponibles y respuesta rápida.',
            author: 'Presidente de Junta de Condominio',
            role: 'Caracas',
          },
          propertyManager: {
            quote:
              'Su equipo técnico modernizó dos equipos de la torre sin interrumpir la operación. Proceso impecable.',
            author: 'Administrador de finca',
            role: 'Valencia',
          },
          constructionManager: {
            quote:
              'Presupuesto transparente y en tiempo récord. Volveríamos a trabajar con ellos sin dudarlo.',
            author: 'Gerente de obra',
            role: 'Maracaibo',
          },
        },
      },
      contactCta: {
        title: '¿Listo para mover tu comunidad o proyecto?',
        description:
          'Solicita una cotización en menos de 5 minutos. Un asesor Fujitec te contactará con una propuesta formal.',
        quote: 'Cotizar ahora',
        joinTeam: '¿Eres técnico? Únete',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      quote: 'Get a quote',
      ipr: 'IPR status',
      jobs: 'Work with us',
      location: 'Location',
    },
    footer: {
      contact: 'Contact',
    },
    language: {
      change: 'Change language',
      next: 'Next language',
      dragHint: 'Press or drag the button and release it to change the language.',
      names: {
        es: 'Spanish',
        en: 'English',
        pt: 'Portuguese',
      },
    },
    landing: {
      hero: {
        badge: 'In Venezuela since 1968',
        title: {
          before: 'Vertical transportation that',
          accent: 'moves',
          after: 'Venezuela',
        },
        subtitle:
          'Maintenance, modernization, and installation of elevators and escalators of any brand. Open technology, approved spare parts, and a fast response for your community or project.',
        requestQuote: 'Request a quote',
        checkIpr: 'Check IPR status',
        trustLabel: 'Service commitments',
        trust: {
          originalParts: 'Original spare parts',
          since1968: 'Serving Venezuela since 1968',
          response247: '24/7 response',
        },
      },
      value: {
        eyebrow: 'Our approach',
        title: 'Confidence that moves with you',
        description:
          'We support condominium boards, construction companies, and property managers throughout the life cycle of vertical transportation equipment.',
        pillars: {
          maintenance: {
            title: 'Maintenance with clear terms',
            text: 'Clear maintenance contracts, without abusive clauses and with approved spare parts.',
          },
          openTechnology: {
            title: 'Open technology',
            text: 'We service any brand, without software lock-in or dependence on a single manufacturer.',
          },
          transparentBudgets: {
            title: 'Transparent estimates',
            text: 'Detailed quotes that remove the price opacity common in the industry.',
          },
          certifiedTalent: {
            title: 'Certified expertise',
            text: 'Electromechanical technicians trained and supported by a multinational company.',
          },
        },
      },
      solutions: {
        eyebrow: 'Our portfolio',
        title: 'Solutions for every stage',
        description:
          'From new construction to long-term maintenance, with one trusted service provider.',
        items: {
          maintenance: {
            title: 'Maintenance',
            text: 'Basic, Parts-Included, and 24/7 service plans with nationwide coverage.',
          },
          modernization: {
            title: 'Modernization',
            text: 'Upgrade older equipment with new technology without replacing the entire shaft.',
          },
          newConstruction: {
            title: 'New construction',
            text: 'Passenger and freight elevators, escalators, and accessibility solutions.',
          },
        },
      },
      factoryService: {
        eyebrow: 'Our own brand',
        title: 'Factory service for Fujitec equipment',
        description:
          'As the manufacturer, we service only our own equipment, using original parts backed by the factory warranty.',
        items: {
          originalParts: {
            title: 'Original spare parts',
            text: 'Only Fujitec factory-approved components. No replicas or substitutes.',
          },
          factoryWarranty: {
            title: 'Genuine factory warranty',
            text: 'Every service intervention is backed by the manufacturer’s worldwide warranty.',
          },
          traceability: {
            title: 'Complete traceability',
            text: 'Documented history of each unit, from installation through every service visit.',
          },
          certifiedTechnicians: {
            title: 'Certified technicians',
            text: 'Brand-trained staff with access to original specifications and manuals.',
          },
        },
        noticeTitle: 'Is your elevator another brand?',
        noticeText:
          'We can assess replacing it with Fujitec equipment and provide technical guidance and a payment plan.',
      },
      testimonials: {
        eyebrow: 'Customer stories',
        title: 'Communities that trust us',
        description:
          'Property managers, condominium boards, and construction companies have found a reliable partner in Fujitec.',
        items: {
          condominiumBoard: {
            quote:
              'We moved from being locked in by a manufacturer to a clear contract with available parts and a fast response.',
            author: 'Condominium board president',
            role: 'Caracas',
          },
          propertyManager: {
            quote:
              'Their technical team modernized two units in the tower without interrupting operations. A flawless process.',
            author: 'Property manager',
            role: 'Valencia',
          },
          constructionManager: {
            quote:
              'A transparent quote delivered in record time. We would gladly work with them again.',
            author: 'Construction manager',
            role: 'Maracaibo',
          },
        },
      },
      contactCta: {
        title: 'Ready to move your community or project forward?',
        description:
          'Request a quote in under five minutes. A Fujitec advisor will contact you with a formal proposal.',
        quote: 'Get a quote now',
        joinTeam: 'Are you a technician? Join us',
      },
    },
  },
  pt: {
    nav: {
      home: 'Início',
      quote: 'Solicitar orçamento',
      ipr: 'Status IPR',
      jobs: 'Trabalhe conosco',
      location: 'Localização',
    },
    footer: {
      contact: 'Contato',
    },
    language: {
      change: 'Mudar idioma',
      next: 'Próximo idioma',
      dragHint: 'Pressione ou arraste o botão e solte-o para mudar o idioma.',
      names: {
        es: 'Espanhol',
        en: 'Inglês',
        pt: 'Português',
      },
    },
    landing: {
      hero: {
        badge: 'Na Venezuela desde 1968',
        title: {
          before: 'Transporte vertical que',
          accent: 'move',
          after: 'a Venezuela',
        },
        subtitle:
          'Manutenção, modernização e instalação de elevadores e escadas rolantes de qualquer marca. Tecnologia aberta, peças homologadas e resposta rápida para sua comunidade ou projeto.',
        requestQuote: 'Solicitar orçamento',
        checkIpr: 'Consultar status IPR',
        trustLabel: 'Compromissos de serviço',
        trust: {
          originalParts: 'Peças originais',
          since1968: 'Na Venezuela desde 1968',
          response247: 'Atendimento 24/7',
        },
      },
      value: {
        eyebrow: 'Nossa proposta',
        title: 'Confiança que acompanha você',
        description:
          'Apoiamos condomínios, construtoras e administradores durante todo o ciclo de vida dos equipamentos de transporte vertical.',
        pillars: {
          maintenance: {
            title: 'Manutenção com transparência',
            text: 'Contratos de manutenção claros, sem cláusulas abusivas e com peças homologadas.',
          },
          openTechnology: {
            title: 'Tecnologia aberta',
            text: 'Atendemos qualquer marca, sem bloqueios de software nem dependência de um único fabricante.',
          },
          transparentBudgets: {
            title: 'Orçamentos transparentes',
            text: 'Orçamentos detalhados que eliminam a falta de transparência nos preços do setor.',
          },
          certifiedTalent: {
            title: 'Equipe certificada',
            text: 'Técnicos eletromecânicos capacitados e apoiados por uma multinacional.',
          },
        },
      },
      solutions: {
        eyebrow: 'Portfólio',
        title: 'Soluções para cada etapa',
        description:
          'Da construção nova à manutenção de longo prazo, com um único fornecedor de confiança.',
        items: {
          maintenance: {
            title: 'Manutenção',
            text: 'Planos Básico, Com Peças e Serviço 24/7 com cobertura nacional.',
          },
          modernization: {
            title: 'Modernização',
            text: 'Atualize equipamentos antigos com novas tecnologias sem substituir todo o poço.',
          },
          newConstruction: {
            title: 'Construção nova',
            text: 'Elevadores de passageiros e carga, escadas rolantes e soluções de acessibilidade.',
          },
        },
      },
      factoryService: {
        eyebrow: 'Marca própria',
        title: 'Serviço de fábrica para equipamentos Fujitec',
        description:
          'Somos fabricantes: atendemos somente nossos próprios equipamentos com peças originais e garantia de fábrica.',
        items: {
          originalParts: {
            title: 'Peças originais',
            text: 'Somente componentes homologados pela fábrica Fujitec. Sem réplicas ou substitutos.',
          },
          factoryWarranty: {
            title: 'Garantia real de fábrica',
            text: 'Cada intervenção conta com a garantia mundial do fabricante.',
          },
          traceability: {
            title: 'Rastreabilidade completa',
            text: 'Histórico documentado de cada equipamento, desde a instalação até cada serviço realizado.',
          },
          certifiedTechnicians: {
            title: 'Técnicos certificados',
            text: 'Equipe capacitada pela marca, com acesso a especificações e manuais originais.',
          },
        },
        noticeTitle: 'Seu elevador é de outra marca?',
        noticeText:
          'Podemos avaliar a substituição por um equipamento Fujitec, com assessoria técnica e plano de pagamento.',
      },
      testimonials: {
        eyebrow: 'Depoimentos',
        title: 'Comunidades que confiam em nós',
        description:
          'Administradores, condomínios e construtoras encontraram na Fujitec um parceiro confiável.',
        items: {
          condominiumBoard: {
            quote:
              'Deixamos de ficar reféns de um fabricante e passamos a ter um contrato claro, peças disponíveis e resposta rápida.',
            author: 'Presidente do condomínio',
            role: 'Caracas',
          },
          propertyManager: {
            quote:
              'A equipe técnica modernizou dois equipamentos da torre sem interromper a operação. Processo impecável.',
            author: 'Administrador imobiliário',
            role: 'Valencia',
          },
          constructionManager: {
            quote:
              'Orçamento transparente e entregue em tempo recorde. Trabalharíamos com eles novamente sem hesitar.',
            author: 'Gerente de obras',
            role: 'Maracaibo',
          },
        },
      },
      contactCta: {
        title: 'Pronto para movimentar sua comunidade ou projeto?',
        description:
          'Solicite um orçamento em menos de cinco minutos. Um consultor Fujitec entrará em contato com uma proposta formal.',
        quote: 'Solicitar orçamento',
        joinTeam: 'É técnico? Venha fazer parte',
      },
    },
  },
}

// Para ampliar: agrega nuevas claves dentro de su seccion en TODOS los idiomas
// activos. Este diccionario habilita el ciclo del Navbar; traducir el resto de
// la interfaz y comprobar que no falten claves sigue siendo trabajo por hacer.
