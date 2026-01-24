export interface CaseItem {
  id: string;
  category: 'selected' | 'portfolio';
  logo: string;
  name: string;           // String simples - sem tradução
  value?: string;         // String simples - sem tradução
  serviceType: string;    // String simples - sem tradução
  description?: {         // Mantemos tradução apenas para descrição (se necessário)
    pt: string;
    en: string;
  };
  year?: string;
}

export const casesData: CaseItem[] = [
  // Operações Selecionadas
    {
    id: 'fazendacajueira',
    category: 'selected',
    logo: '/images/cases/fazendacajueira.webp',
    name: 'Fazenda Cajueira Agropecuária Ltda', // String direta
    value: 'R$ 237.000.000', // String direta
    serviceType: 'Liability Management & M&A', // String direta
    description: {
      pt: 'Assessoria na Reestruturação de Passivos do Grupo e Alienação da totalidade do seu Capital Social',
      en: 'Advisory in Group Liabilities Restructuring and Sale of the entire Share Capital'
    },
    year: '2025'
  },
  {
    id: 'sistac',
    category: 'selected',
    logo: '/images/cases/sistac.webp',
    name: 'Sistac – Sistemas de Acesso S.A.', // String direta
    value: 'R$ 113.518.527', // String direta
    serviceType: 'Liability Management', // String direta
    description: {
      pt: 'Assessoria na Reestruturação de Debêntures - SIAC11',
      en: 'Advisory in Debenture Restructuring - SIAC11'
    },
    year: '2025'
  },
         {
    id: 'projeto-fashion',
    category: 'selected',
    logo: '/images/cases/projeto-fashion.svg',
    name: 'Projeto Fashion',
    value: 'R$ 108.000.000',
    serviceType: 'Liability Management & Fund Raising',
    description: {
      pt: 'Assessoria na Reestruturação de Passivos e Captação de novos Recursos',
      en: 'Advisory in Liabilities Restructuring and Fund Raising'
    },
    year: '2025'
  },
           {
    id: 'grupo-cene',
    category: 'selected',
    logo: '/images/cases/grupo-cene.webp',
    name: 'CENE Home Care & Materiais Médicos',
    value: 'R$ 82.000.000',
    serviceType: 'Liability Management',
    description: {
      pt: 'Assessoria na Reestruturação de Passivos',
      en: 'Advisory in Liabilities Restructuring'
    },
    year: '2025'
  },
    {
    id: 'projeto-bulldozer',
    category: 'selected',
    logo: '/images/cases/projeto-bulldozer.svg',
    name: 'Projeto Bulldozer',
    value: 'R$ 452.000.000',
    serviceType: 'Liability Management',
    description: {
      pt: 'Assessoria de Reestruturação de Passivos do Grupo',
      en: 'Advisory in Group Liabilities Restructuring'
    },
    year: '2024'
  },
     {
    id: 'projeto-solar',
    category: 'selected',
    logo: '/images/cases/projeto-solar.svg',
    name: 'Projeto Solar',
    value: 'R$ 197.000.000',
    serviceType: 'Liability Management | CRI',
    description: {
      pt: 'Assessoria na Reestruturação de Certificados de Recebíveis Imobiliários - 22H123358',
      en: 'Advisory in Real Estate Receivables Certificates Restructuring - 22H123358'
    },
    year: '2024'
  },
  {
    id: 'credz',
    category: 'selected',
    logo: '/images/cases/credz.webp',
    name: 'Credz',
    value: 'R$ 2.220.000.000',
    serviceType: 'Liability Management & M&A',
    description: {
      pt: 'Assessoria na Reestruturação de Passivos Financeiros e Alienação da carteira de clientes do Grupo',
      en: 'Advisory in Financial Liabilities Restructuring and Sale of the Group\'s client portfolio'
    },
    year: '2024'
  },
  {
    id: 'weclix',
    category: 'selected',
    logo: '/images/cases/weclix.webp',
    name: 'WECLIX',
    value: 'R$ 185.000.000',
    serviceType: 'Turnaround & Liability Management',
    description: {
      pt: 'Assessoria na Reestruturação de Passivos do Grupo e Turnaround Operacional',
      en: 'Advisory in Group Liabilities Restructuring and Operational Turnaround'
    },
    year: '2024'
  },
  {
    id: 'allon',
    category: 'selected',
    logo: '/images/cases/allonda.webp',
    name: 'GRUPO ALLONDA',
    value: 'R$ 680.000.000',
    serviceType: 'Fund Raising & Liability Management',
    description: {
      pt: 'Assessoria na Reestruturação de Passivos do Grupo, Captação de novos recursos e Governança Corporativa',
      en: 'Advisory in Group Liabilities Restructuring, Fundraising and Corporate Governance'
    },
    year: '2023'
  },
  {
    id: 'morena',
    category: 'selected',
    logo: '/images/cases/morena-rosa.webp',
    name: 'GRUPO MORENA ROSA',
    value: 'R$ 86.000.000',
    serviceType: 'Fund Raising & Liability Management',
    description: {
      pt: 'Assessoria na captação de novos recursos e Reestruturação de Passivos do Grupo',
      en: 'Advisory in Fundraising and Group Liabilities Restructuring'
    },
    year: '2023'
  },
  {
    id: 'grupo-lotrans',
    category: 'selected',
    logo: '/images/cases/lotrans.webp',
    name: 'GRUPO LOTRANS',
    value: 'R$ 50.000.000',
    serviceType: 'Liability Management',
    description: {
      pt: 'Assessoria na Reestruturação de Passivos do Grupo',
      en: 'Advisory in Group Liabilities Restructuring'
    },
    year: '2023'
  },
   {
    id: 'jgr',
    category: 'selected',
    logo: '/images/cases/jgr.webp',
    name: 'JGR',
    value: 'R$ 40.900.000',
    serviceType: 'Real Estate',
    description: {
      pt: 'Assessoria na Estruturação de contratos de Sale & Leaseback de 5 Galpões Comerciais',
      en: 'Advisory in Structuring Sale & Leaseback agreements for 5 Commercial Warehouses'
    },
    year: '2023'
  },
  {
    id: 'greenhouse',
    category: 'selected',
    logo: '/images/cases/greenhouse.webp',
    name: 'GREENHOUSE',
    value: 'R$ 75.000.000',
    serviceType: 'Fund Raising & Liability Management',
    description: {
      pt: 'Assessoria na captação de novos recursos e Reestruturação de Passivos do Grupo',
      en: 'Advisory in Fundraising and Group Liabilities Restructuring'
    },
    year: '2022'
  },
    {
    id: 'fiasullbbw',
    category: 'selected',
    logo: '/images/cases/fiasul-lbbw.svg',
    name: 'Fiasul LBBW',
    value: 'R$ 36.000.000',
    serviceType: 'Liability Management',
    description: {
      pt: 'Assessoria no Reperfilamento de Dívida junto ao Banco LBBW Landesbank Baden-Württemberg',
      en: ''
    },
    year: '2022'
  },
 
   {
    id: 'sapaulista',
    category: 'selected',
    logo: '/images/cases/sa-paulista.webp',
    name: 'SA PAULISTA',
    value: 'R$ 158.000.000',
    serviceType: 'Liability Management',
    description: {
      pt: 'Assessoria na venda de ativos, captação de recursos e Reestruturação de Passivos do Grupo',
      en: 'Advisory in asset sales, fundraising, and Group Liabilities Restructuring'
    },
    year: '2022'
  },
  {
    id: 'ecoparque',
    category: 'selected',
    logo: '/images/cases/ecopark.webp',
    name: 'ECOPARQUE',
    value: 'R$ 450.000.000 (vgv)',
    serviceType: 'Real Estate',
    description: {
      pt: 'Assessoria para desmobilização de 100% do Complexo Multiuso EcoParque.',
      en: 'Advisory for the divestment of 100% of the EcoParque Mixed-Use Complex.'
    },
    year: '2022'
  },
  {
    id: 'grupohapvida',
    category: 'selected',
    logo: '/images/cases/grupohapvida.webp',
    name: 'Grupo Hapvida',
    value: 'R$ 120.000.000',
    serviceType: 'M&A',
    description: {
      pt: 'Assessoria financeira do Hospital Madrecor na alienação total de seu capital social',
      en: ''
    },
    year: '2021'
  },
  {
    id: 'cellep',
    category: 'selected',
    logo: '/images/cases/cellep.webp',
    name: 'Cellep',
    value: 'R$ 53.000.000',
    serviceType: 'Fund Raising & Liability Management',
    description: {
      pt: 'Assessoria na captação de novos recursos e Reestruturação de Passivos do Grupo',
      en: ''
    },
    year: '2021'
  },  
  {
    id: 'casadopaodequeijo',
    category: 'selected',
    logo: '/images/cases/casadopaodequeijo.svg',
    name: 'Casa do Pão de Queijo',
    value: 'R$ 55.000.000',
    serviceType: 'Turnaround e Liability Managemen',
    description: {
      pt: 'Assessoria na captação de novos recursos e Reestruturação de passivos do Grupo',
      en: ''
    },
    year: '2021'
  }, 
  {
    id: 'tbmtextil',
    category: 'selected',
    logo: '/images/cases/tbm.webp',
    name: 'TBM Têxtil',
    value: 'R$ 90.000.000',
    serviceType: 'Turnaround e Liability Management',
    description: {
      pt: 'Assessoria na Captação de recursos e Reestruturação de passivos em Grupo da área Têxtil',
      en: ''
    },
    year: '2021'
  },    
  
  {
    id: 'memorialguarulhos',
    category: 'selected',
    logo: '/images/cases/grupo-zelo.svg',
    name: 'Memorial Guarulhos',
    value: 'R$ 120.000.000',
    serviceType: 'LM&A',
    description: {
      pt: 'Assessoria financeira do Memorial Guarulhos na alienação total de seu capital social para o Grupo Zelo',
      en: ''
    },
    year: '2021'
  },
  {
    id: 'cromex',
    category: 'selected',
    logo: '/images/cases/cromex.svg',
    name: 'Cromex',
    value: 'R$ 140.000.000',
    serviceType: 'Liability Management',
    description: {
      pt: 'Assessoria na reestruturação de passivos do Grupo',
      en: ''
    },
    year: '2020'
  },  
  {
    id: 'fiasul',
    category: 'selected',
    logo: '/images/cases/fiasul.svg',
    name: 'Fiasul',
    value: 'R$ 85.000.000',
    serviceType: 'Turnaround e Liability Management',
    description: {
      pt: 'Assessoria na captação de novos recursos e Reestruturação de Passivos do Grupo',
      en: ''
    },
    year: '2020'
  },  
    {
    id: 'networker',
    category: 'selected',
    logo: '/images/cases/networker.svg',
    name: 'Networker Telecom',
    value: 'R$ 15.000.000',
    serviceType: 'Liability Management',
    description: {
      pt: 'Assessoria na reestruturação de Passivos do Grupo Networker Telecom',
      en: ''
    },
    year: '2020'
  }, 
   {
    id: 'projetohawk',
    category: 'selected',
    logo: '/images/cases/projeto-hawk.svg',
    name: 'Projeto Hawk',
    value: 'R$ 200.000.000',
    serviceType: 'M&A',
    description: {
      pt: 'Assessoria na alienação de participação societária em Grupo do setor de Infraestrutra',
      en: ''
    },
    year: '2019'
  }, 
{   
    id: 'projetostuttgart',
    category: 'selected',
    logo: '/images/cases/projeto-stuttgart.svg',
    name: 'Projeto Stuttgart',
    value: 'R$ 60.000.000',
    serviceType: 'Liability Management',
    description: {
      pt: 'Assessoria na Reestruturação de passivos em Grupo do setor Automotivo',
      en: ''
    },
    year: '2019'
  },  
  {   
    id: 'grupomarba',
    category: 'selected',
    logo: '/images/cases/marba.svg',
    name: 'Grupo Marba',
    value: 'R$ 45.000.000',
    serviceType: 'Turnaround e Liability Management',
    description: {
      pt: 'Assessoria na captação de novos recursos e Reestruturação de Passivos do Grupo',
      en: ''
    },
    year: '2019'
  }, 
     
  // ... continue com os outros casos selecionados

  // Portfólio
  {
    id: 'glep',
    category: 'portfolio',
    logo: '/images/cases/logo-glep.svg', // Converti para .webp como os outros
    name: 'Glep',
    value: 'R$ 288.000.000',
    serviceType: 'M&A'
  },
  {
    id: 'maringa',
    category: 'portfolio',
    logo: '/images/cases/logo-grupo-maringa.svg', // Converti para .webp
    name: 'Maringá',
    value: 'R$ 41.100.000',
    serviceType: 'ICVM 476'
  },
  {
    id: 'uniao',
    category: 'portfolio',
    logo: '/images/cases/logo-uniao-quimica.svg', // Converti para .webp
    name: 'União Química',
    value: 'R$ 100.000.000',
    serviceType: 'ICVM 476'
  },
  {
    id: 'energisa',
    category: 'portfolio',
    logo: '/images/cases/logo-grupo-energisa.svg', // Converti para .webp
    name: 'Grupo Energisa',
    value: 'R$ 1.500.000.000',
    serviceType: 'RE-IPO'
  },
  {
    id: 'uniao-quimica',
    category: 'portfolio',
    logo: '/images/cases/logo-uniao-quimica.svg', // Converti para .webp
    name: 'União Química',
    value: 'R$ 100.000.000',
    serviceType: 'ICVM 476'
  },
  {
    id: 'nascentes-do-xingu',
    category: 'portfolio',
    logo: '/images/cases/logo-nascentes-do-xingu.svg', // Converti para .webp
    name: 'Nascentes do Xingu',
    value: 'R$ 100.000.000',
    serviceType: 'ICVM 476'
  },
  {
    id: 'cab-ambiental',
    category: 'portfolio',
    logo: '/images/cases/logo-cab-ambiental.svg', // Converti para .webp
    name: 'Cab Ambiental',
    value: 'R$ 35.000.000',
    serviceType: 'Fiança BNDS'
  },
  {
    id: 'santander',
    category: 'portfolio',
    logo: '/images/cases/logo-santander-asset-management.svg', // Converti para .webp
    name: 'Santander',
    value: 'R$ 2.200.000.000',
    serviceType: 'M&A'
  },   
  {
    id: 'estreambiental',
    category: 'portfolio',
    logo: '/images/cases/logo-estre-ambiental.svg', // Converti para .webp
    name: 'Estre Ambiental',
    value: 'R$ 650.000.000',
    serviceType: 'ICVM 476'
  },
  {
    id: 'abn-amro',
    category: 'portfolio',
    logo: '/images/cases/logo-abn-amro.svg', // Converti para .webp
    name: 'ABN Amro',
    value: 'R$ 6.000.000.000',
    serviceType: 'M&A'
  },
  {
    id: 'grupo-estrutural',
    category: 'portfolio',
    logo: '/images/cases/logo-grupo-estrutural.svg', // Converti para .webp
    name: 'Grupo Estrutural',
    value: 'R$ 240.000.000',
    serviceType: 'Liability Management'
  },  
  {
    id: 'sa-paulista',
    category: 'portfolio',
    logo: '/images/cases/logo-sa-paulista.svg', // Converti para .webp
    name: 'SA Paulista Portifólio',
    value: 'R$ 120.000.000',
    serviceType: 'Liability Management'
  },   
  {
    id: 'aguas-do-mirante',
    category: 'portfolio',
    logo: '/images/cases/logo-aguas-do-mirante.svg', // Converti para .webp
    name: 'Águas do Mirante',
    value: 'R$ 120.000.000',
    serviceType: 'ICVM 476'
  }, 
  {
    id: 'aguas-de-andradina',
    category: 'portfolio',
    logo: '/images/cases/logo-aguas-de-andradina.svg', 
    name: 'Águas de Andradina',
    value: 'R$ 35.000.000',
    serviceType: 'Project Finance'
  },
  {
    id: 'grupo-delga',
    category: 'portfolio',
    logo: '/images/cases/logo-grupo-delga.svg', 
    name: 'Grupo Delga',
    value: 'R$ 90.000.000',
    serviceType: 'ICVM 476'
  },  
  {
    id: 'le-lis-blanc',
    category: 'portfolio',
    logo: '/images/cases/logo-le-lis-blanc.svg', 
    name: 'Le Lis Blanc',
    value: 'R$ 90.000.000',
    serviceType: 'ICVM 476'
  },    
  {
    id: 'estapar',
    category: 'portfolio',
    logo: '/images/cases/logo-estapar.svg', 
    name: 'Estapar',
    value: 'R$ 150.000.000',
    serviceType: 'ICVM 476'
  },   
  {
    id: 'graal-energia',
    category: 'portfolio',
    logo: '/images/cases/logo-graal-energia.svg', 
    name: 'Graal Energia',
    value: 'R$ 50.000.000',
    serviceType: 'Loan Offshore'
  }, 
  {
    id: 'desenvix',
    category: 'portfolio',
    logo: '/images/cases/logo-desenvix.svg', 
    name: 'Desenvix',
    value: 'R$ 86.000.000',
    serviceType: 'Fiança BNDS'
  }, 
  {
    id: 'ageo',
    category: 'portfolio',
    logo: '/images/cases/logo-ageo.svg', 
    name: 'Ageo',
    value: 'R$ 90.000.000',
    serviceType: '4131'
  },   
{
    id: 'bauducco',
    category: 'portfolio',
    logo: '/images/cases/logo-bauducco.svg', 
    name: 'Bauducco',
    value: 'R$ 25.000.000',
    serviceType: 'PPE'
  },              
  {
    id: 'casa-video',
    category: 'portfolio',
    logo: '/images/cases/logo-casa-e-video.svg', 
    name: 'Casa Video',
    value: 'R$ 58.500.000',
    serviceType: 'ICVM 476'
  },
  {
    id: 'windsor-hoteis',
    category: 'portfolio',
    logo: '/images/cases/logo-windsor-hoteis.svg', 
    name: 'Windsor Hotéis',
    value: 'R$ 500.000.000',
    serviceType: 'M&A'
  },
  {
    id: 'valid',
    category: 'portfolio',
    logo: '/images/cases/logo-valid.svg', 
    name: 'Valid',
    value: 'R$ 210.000.000',
    serviceType: 'Loan Offshore'
  },
 {
    id: 'destilaria-melhoramentos',
    category: 'portfolio',
    logo: '/images/cases/logo-destilaria-melhoramentos.svg', 
    name: 'Destilaria Melhoramentos',
    value: 'R$ 160.000.000',
    serviceType: 'ICVM 476'
  },
  // ... outros casos do portfólio
];