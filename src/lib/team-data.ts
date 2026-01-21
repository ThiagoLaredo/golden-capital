export interface TeamMember {
  id: string;
  name: {
    pt: string;
    en: string;
  };
  role: {
    pt: string;
    en: string;
  };
  photo: string;
  companies: string[];
  shortBio: {
    pt: string;
    en: string;
  };
  fullBio: {
    pt: string;
    en: string;
  };
  linkedin?: string;
  email?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'murilo',
    name: {
      pt: 'Murilo Ungar Glausiusz',
      en: 'Murilo Ungar Glausiusz'
    },
    role: {
      pt: 'Sócio-diretor e co-fundador',
      en: 'Managing Partner & Co-Founder'
    },
    photo: '/images/equipe/murilo-ungar-glausiusz.webp',
    companies: ['/images/logos/citi.svg', '/images/logos/ing.svg', '/images/logos/santander.svg'],
    shortBio: {
      pt: 'Com passagens pelos Bancos Citibank e ING Bank, antes de integrar a sociedade da Golden Capital, foi Managing Director de Corporate Banking do Banco Santander, onde trabalhou por 17 anos.\n\nAo longo de sua carreira profissional, possui mais de 25 anos de experiência em operações de Corporate Banking, Debt Capital Markets e Equity Capital Markets, trabalhando diretamente na originação e execução de importantes Operações de DCM e Corporate Finance.',
      
      en: 'Murilo began his career in Citibank and later moved to ING Bank. Before joining Golden Capital in 2018, he was a Managing Director of Corporate Banking at Banco Santander, where he worked for 17 years.\n\nThroughout his professional career, he has over 25 years of experience in Corporate Banking, Debt Capital Markets and Equity Capital Markets operations, working directly on the origination and execution of important DCM and Corporate Finance transactions across various sectors of the economy, such as Retail, Industry, Infrastructure and Consumer Goods.'
    },
    fullBio: {
      pt: `Murilo Ungar Glausiusz, Sócio-Diretor da Golden Capital desde Novembro de 2018.

Possui mais de 25 anos de experiência em operações de Corporate Banking, Debt Capital Markets e Equity Capital Markets. Com passagens pelos Bancos Citibank e ING Bank, antes de integrar a sociedade da Golden Capital, foi Managing Director de Corporate Banking do Banco Santander, instituição onde trabalhou por 17 anos. É bacharel em Administração de Empresas pela Pontifícia Universidade Católica de São Paulo com especialização em Gestão de Liderança pelo ISE e Conselheiro certificado pela Fundação Dom Cabral.

Ao longo de sua carreira profissional, trabalhou diretamente na originação e execução de importantes Operações de DCM e Corporate Finance em diversos setores da economia, tais como Varejo, Indústria, Infraestrutura e Consumo. Entre as principais transações que realizou, incluem-se o Re-IPO da Energisa (R$ 1,5 Bi), alienação do Windsor Atlântica para a Blackstone (R$500 milhões), diversas operações de ICVMs 476, entre elas Estapar (R$150 milhões), Restoque (R$100 milhões), Nascentes do Xingu (R$100 milhões), Loan offshore da Valid (R$210 milhões), Project Finance da Hidrovias do Brasil (US$238 milhões), além de muitas outras transações de assessoria financeira, reestruturação e mercado de capitais. Atualmente é Board Member em diversas companhias de capital fechado.`,
      en: `Murilo Ungar Glausiusz, Managing Partner at Golden Capital since November 2018.

Has over 25 years' work experience in Corporate Banking, with direct involvement in Debt and Equity Capital Markets. He began his career in Citibank and later moved to ING Bank. Before joining Golden Capital in 2018, he was a Managing Director of Corporate Banking at Banco Santander, where he worked for 17 years. He holds a Business Administration degree from Pontifícia Universidade Católica of São Paulo – PUC- SP with specialization in Leadership Management from ISE, along with a Board Member certification from Fundação Dom Cabral.

Throughout his professional career, he worked directly on the origination and execution of important DCM and Corporate Finance transactions and in various sectors of the economy, such as Retail, Industry, Infrastructure and Consumer Goods. Among the main transactions he led, include: Energisa's Re-IPO (R $ 1.5 Bi), sale of Windsor Atlântica to Blackstone (R$ 500 MM), several ICVM 476 transactions, including Estapar (R$ 150MM), Restoque (R$ 100MM), Nascentes do Xingu (R$ 100MM), Valid offshore loan (R$ 210MM), Hidrovias do Brasil Project Finance (US$ 238 million), in addition to many other financial advisory transactions, restructuring and capital markets. He is currently a Board Member in several privately held companies.`
    },
    linkedin: 'linkedin.com/in/murilo-ungar-glausiusz-085b8918/',
    email: 'murilo.ungar@goldencapital.com'
  },
  {
    id: 'newton',
    name: {
      pt: 'Newton Borbolla Filho',
      en: 'Newton Borbolla Filho'
    },
    role: {
      pt: 'Sócio-diretor e co-fundador',
      en: 'Managing Partner & Co-Founder'
    },
    photo: '/images/equipe/newton-borbolla-filho.webp',
    companies: ['/images/logos/santander.svg', '/images/logos/real.svg', '/images/logos/werte.svg'],
    shortBio: {
      pt: 'Com mais de 20 anos de experiência em operações de Corporate Banking e mercado de capitais. Foi superintendente no segmento de Corporate & Investment Banking do Banco Santander Brasil onde trabalhou por 15 anos.\n\nAo longo de sua carreira profissional, trabalhou diretamente na originação e execução de importantes operações de M&A e mercado de capitais em diversos setores da economia, tais como Varejo, Infraestrutura, Consumo e Indústria.',
      
      en: `Newton has 20+ years' work experience in Corporate Banking and Capital Market transactions before co-founding Golden Capital. Previously, he held a position of superintendent in the Corporate & Investment Banking division at Banco Santander Brasil where he worked for 15 years.\n\nThroughout his professional career, he participated directly on the origination and execution of important M&A and capital market operations in various sectors of the economy, such as Retail, Infrastructure, Consumer Goods and Industry.`
    },
    fullBio: {
      pt: `Newton Aguilar Borbolla Filho, Sócio-Diretor e Co-Fundador da Golden Capital em 2017.

Possui mais de 20 anos de experiência em operações de Corporate Banking e mercado de capitais. Antes de co-fundar a Golden Capital, foi sócio da Werte Capital, atuando na estruturação e reestruturação financeira de empresas de médio e grande porte. Anteriormente, foi superintendente no segmento de Corporate & Investment Banking do Banco Santander Brasil, onde trabalhou por 15 anos. É bacharel em Administração de Empresas pela Pontifícia Universidade Católica de São Paulo.

Ao longo de sua carreira profissional, trabalhou diretamente na originação e execução de importantes operações de M&A e mercado de capitais em diversos setores da economia, tais como Varejo, Infraestrutura, Consumo e Indústria. Entre as princiais transações que realizou, incluem-se Project Finance da Hidrovias do Brasil (US$238 milhões) e a alienação da PCH Santa Luiza para CPFL Energias Renováveis (R$288 milhões). Em DCM estruturou importantes transações como Águas do Mirante (R$65milhões), Santher (R$74milhões), Gran Energia (R$100milhões) e Destilaria Melhoramentos (R$160milhões). Foi responsável também por várias operações de restruturação e renegociação de dívidas como do Grupo Estrutural (R$420 milhões) e S.A. Paulista (R$120 milhões).`,
      en: `Newton Aguilar Borbolla Filho, Managing Partner and Co-founder of Golden Capital since 2017.

With over 20 years work experience in Corporate Banking and Capital Market transactions, before co-founding Golden Capital, Newton was a partner at Werte Capital, where he acted in structuring and restructuring Corporate and Large Corporate companies. Previously, he held the position of superintendent in the Corporate & Investment Banking division at Banco Santander Brasil where he worked for 15 years.

Throughout his professional career, he participated directly on the origination and execution of important M&A and capital market operations in various sectors of the economy, such as Retail, Infrastructure, Consumer Goods and Industry. Among important transactions he carried out, main ones include Project Finance of Hidrovias do Brasil (US$ 238 million) and the sale of PCH Santa Luiza to CPFL Energias Renováveis (R$ 288 million). In DCM, he structured key transactions such as Águas do Mirante (R$ 65 million), Santher (R$ 74 million), Gran Energia (R$ 100 million) and Destilaria Melhoramentos (R$ 160 million). He was also responsible for several debt restructuring and renegotiation deals, such as Grupo Estrutural (R$ 420 million) and S.A. Paulista (R$ 120 million). He holds a degree in Business Administration from the Pontifícia Universidade Católica of São Paulo.`
    },
    linkedin: 'https://www.linkedin.com/in/newton-borbolla-filho-87163b/',
    email: 'newton.borbolla@goldencapital.com'
  },
  {
    id: 'pedro',
    name: {
      pt: 'Pedro Paulo Pereira',
      en: 'Pedro Paulo Pereira'
    },
    role: {
      pt: 'Sócio-diretor e co-fundador',
      en: 'Managing Partner & Co-Founder'
    },
    photo: '/images/equipe/pedro-paulo-pereira.webp',
    companies: ['/images/logos/citi.svg', '/images/logos/real.svg', '/images/logos/santander.svg'],
    shortBio: {
      pt: 'Antes de co-fundar a Golden Capital, ocupou por 11 anos a posição de CFO e COO da Santander Asset Management onde trabalhou por 18 anos.\n\nAo longo de sua experiência, trabalhou diretamente na execução de importantes projetos estratégicos da Empresa. Liderou o redesenho estratégico de atuação da Companhia no mercado de fundos de investimento, além de executar a reestruturação societária da Empresa para atuar de forma independente.', 
      en: 'Before co-founding Golden Capital, he worked for 18 years for Santander Asset Management where he acted as the CFO and COO for 11 years.\n\nThroughout his career at Santander Asset Management, he worked directly on the execution of important strategic projects for the company. Among them, he structured and redesigned the company\'s operations in the investment fund market, in addition to carrying out the company\'s corporate restructuring to operate independently.'    },
    fullBio: {
      pt: `Pedro Paulo Nogueira Pereira, Sócio-Diretor e Co-Fundador da Golden Capital em 2017.

Possui mais de 28 anos de experiência no mercado financeiro. Antes de co-fundar a Golden Capital, ocupou por 11 anos a posição de CFO e COO da Santander Asset Management, sendo também Diretor Estatutário desta instituição onde trabalhou por 18 anos. É bacharel em Economia pela Fundação Armando Álvares Penteado, possui MBA em Finanças pela University of Florida, EUA e especialização em estratégia competitiva pelo INSEAD, Fontainebleau, França.

Ao longo de sua experiência na Santander Asset Management, trabalhou diretamente na execução de importantes projetos estratégicos da Empresa. Liderou o redesenho estratégico de atuação da Companhia no mercado de fundos de investimento, além de executar a reestruturação societária da Empresa para atuar de forma independente. Atuou em várias operações de Fusões & aquisições proprietárias, tais como: aquisição e incorporação dos fundos da Dresdner Asset Management; fusão da Santander Asset Management e ABN AMRO Asset Management; venda de 50% do capital da Santander Asset Management para os fundos de Private Equity General Atlantic e Warburg Pincus, entre outras transações.`,
      en: `Pedro Paulo Nogueira Pereira, Managing Partner and Co-Founder of Golden Capital since 2017.

Has over 28 years work experience in the financial market. Before co-founding Golden Capital, he was a statutory director at Santander Asset Management where he worked for 18 years and acted as the CFO and COO for 11 years. He holds a degree in Economics from Fundação Armando Álvares Penteado, a Master's degree in Business Administration from the University of Central Florida, USA and specialization in competitive strategy at INSEAD, Fontainebleau, France.

Throughout his professional career at Santander Asset Management, he worked directly on the execution of important strategic projects for the Company. Among them, he structured and redesigned the Company's operations in the investment fund market, in addition to carrying out the company's corporate restructuring to operate independently. He also worked in several proprietary M&A transactions, such as the acquisition and incorporation of Dresdner Asset Management funds; the merger of Santander Asset Management and ABN AMRO Asset Management; the sale of a 50% stake of Santander Asset Management's to Private Equity firms General Atlantic and Warburg Pincus funds, among other transactions.`
    },
    linkedin: 'https://www.linkedin.com/in/pedro-paulo-pereira-36802022/',
    email: 'pedro.paulo.pereira@goldencapital.com'
  },
  {
    id: 'diego',
    name: {
      pt: 'Diego Alvarez',
      en: 'Diego Alvarez'
    },
    role: {
      pt: 'Partner',
      en: 'Partner'
    },
    photo: '/images/equipe/diego-alvarez.webp',
    companies: ['/images/logos/citi.svg', '/images/logos/santander.svg'],
    shortBio: {
      pt: 'Possui mais de 25 anos de experiência no mercado financeiro, com sólida atuação em Corporate and Investment Banking, Debt Capital Markets e Structured Finance. Atuou no Citibank e construiu longa carreira no Banco Santander, onde chegou a Executive Director no Corporate & Investment Banking.\n\nLiderou a cobertura comercial de grandes companhias nacionais e multinacionais, conduzindo operações estratégicas de dívida, mercado de capitais e soluções estruturadas de financiamento e derivativos.',
      
      en: 'Has over 25 years of experience in the financial market, with a solid background in Corporate and Investment Banking, Debt Capital Markets and Structured Finance. Worked at Citibank and built a long career at Banco Santander, where he reached the position of Executive Director in Corporate & Investment Banking.\n\nLed the commercial coverage of large national and multinational companies, conducting strategic debt operations, capital markets and structured financing and derivatives solutions.'
    },
    fullBio: {
      pt: `Com mais de 25 anos de experiência em Corporate and Investment Banking, Debt Capital Markets e Structured Finance. Teve passagens pelo Citibank e trajetória consolidada no Banco Santander, atuou em posições de liderança por mais de duas décadas, sendo Executive Director do Corporate & Investment Banking, com responsabilidade sobre clientes estratégicos dos setores de Varejo, TMT e empresas multinacionais.

Ao longo de sua carreira, liderou a originação e execução de operações de Investment Banking, transações locais e internacionais de DCM, financiamentos estruturados e soluções de tesouraria. Também coordenou equipes de relacionamento no segmento Corporate & Middle Market.

Entre os projetos em que esteve diretamente envolvido, destacam-se: securitizações de recebíveis, operações de leasing internacional, financiamentos de longo prazo para companhias brasileiras e multinacionais, além de transações estruturadas com derivativos, equity derivatives e funding offshore.

Graduado em Administração de Empresas pela Fundação Armando Álvares Penteado (FAAP), em Marketing pela ESPM e possui extensão em Finanças pela Harvard Extension School.`,
      en: `With over 25 years of experience in Corporate and Investment Banking, Debt Capital Markets and Structured Finance. Had previous experiences at Citibank and a consolidated trajectory at Banco Santander, where he held leadership positions for over two decades, including Executive Director of Corporate & Investment Banking, with responsibility for strategic clients in the Retail, TMT and multinational companies sectors.

Throughout his career, he led the origination and execution of Investment Banking operations, local and international DCM transactions, structured financing and treasury solutions. He also coordinated relationship teams in the Corporate & Middle Market segment.

Among the projects he was directly involved in, stand out: receivables securitizations, international leasing operations, long-term financing for Brazilian and multinational companies, as well as structured transactions with derivatives, equity derivatives and offshore funding.

Graduated in Business Administration from Fundação Armando Álvares Penteado (FAAP), in Marketing from ESPM and has an extension in Finance from Harvard Extension School.`
    },
    linkedin: 'https://www.linkedin.com/in/diego-gon%C3%A7alves-alvarez-865b9112/',
    email: 'diego.alvarez@goldencapital.com'
  },
  {
    id: 'daniel',
    name: {
      pt: 'Daniel Juniti Takeushi',
      en: 'Daniel Juniti Takeushi'
    },
    role: {
      pt: 'Partner - Header of Credit',
      en: 'Partner - Header of Credit'
    },
    photo: '/images/equipe/daniel-juniti-takeushi.webp',
    companies: ['/images/logos/santander.svg', '/images/logos/mizuho.svg', '/images/logos/fitch.svg'],
    shortBio: {
      pt: 'Conta com experiência de mais de 15 anos no mercado financeiro, com passagem em bancos e em agência de rating. Ocupou a posição de especialista de crédito em sua última passagem por bancos e o cargo de associate director na Fitch Ratings.\n\nTrabalhou por mais de 10 anos no Santander, com experiência nas áreas de risco de crédito, empréstimos sindicalizados, financiamento de aquisições e análise de projetos de infraestrutura. Na Fitch Ratings, atuou na atribuição e monitoramento de ratings de diversos projetos de infraestrutura, como concessões de portos, rodovias e aeroportos, além de projetos de energia, como parques eólicos, usinas termoelétricas e solares e linhas de transmissão.',
      
      en: 'Has over 15 years of experience in the financial market, with stints in banks and a rating agency. Held the position of credit specialist in his last banking role and the position of associate director at Fitch Ratings.\n\nWorked for more than 10 years at Santander, with experience in credit risk areas, syndicated loans, acquisition financing and infrastructure project analysis. At Fitch Ratings, worked on the assignment and monitoring of ratings for various infrastructure projects, such as port, highway and airport concessions, as well as energy projects, including wind farms, thermoelectric and solar power plants and transmission lines.'
    },
    fullBio: {
      pt: `Daniel Juniti Takeushi, head de crédito da Golden Capital desde Novembro de 2024.

Possui mais de 15 anos de experiência em análise de crédito, empréstimos sindicalizados, financiamento de aquisições e análise de projetos de infraestrutura. Trabalhou em bancos, Banco Santander e Banco Mizuho, além de ter trabalhado na Fitch Ratings, agência de rating.

É bacharel em Administração de Empresas pela Faculdade de Economia, Administração, Contabilidade e Atuária da Universidade de São Paulo (FEA – USP) e possui um MBA em Administração Financeira pela Fundação Instituto de Administração (FIA).

Durante sua carreira em bancos, trabalhou na área de risco de crédito, com foco no segmento de grandes empresas, de diversos setores, da região metropolitana de São Paulo. Ainda em bancos, trabalhou nas áreas de empréstimos sindicalizados e financiamento de aquisições e na área de análise de crédito especializada em financiamentos estruturados, a qual analisava financiamento de projetos e de aquisições. Na Fitch Ratings, atuou na atribuição e monitoramento de ratings de diversos projetos de infraestrutura, como concessões de portos, rodovias e aeroportos, além de projetos de energia, como parques eólicos, usinas termoelétricas e solares e linhas de transmissão.`,
      en: `Daniel Juniti Takeushi, Head of Credit at Golden Capital since November 2024.

Has over 15 years of experience in credit analysis, syndicated loans, acquisition financing and infrastructure project analysis. He worked in banks, Banco Santander and Banco Mizuho, in addition to having worked at Fitch Ratings, a rating agency.

He holds a Bachelor's degree in Business Administration from the Faculty of Economics, Administration, Accounting and Actuarial Sciences of the University of São Paulo (FEA - USP) and an MBA in Financial Management from Fundação Instituto de Administração (FIA).

During his career in banks, he worked in the credit risk area, focusing on the segment of large companies from various sectors in the São Paulo metropolitan region. Also in banks, he worked in the areas of syndicated loans and acquisition financing and in the credit analysis area specialized in structured financing, which analyzed project and acquisition financing. At Fitch Ratings, he worked on the assignment and monitoring of ratings for various infrastructure projects, such as port, highway and airport concessions, as well as energy projects, such as wind farms, thermoelectric and solar power plants and transmission lines.`
    },
    linkedin: 'https://www.linkedin.com/in/daniel-takeushi-b8742155/',
    email: 'daniel.takeushi@goldencapital.com'
  },
  {
    id: 'gabriel',
    name: {
      pt: 'Gabriel Sales de Oliveira',
      en: 'Gabriel Sales de Oliveira'
    },
    role: {
      pt: 'Partner - Senior Associate',
      en: 'Partner - Senior Associate'
    },
    photo: '/images/equipe/gabriel-sales-de-oliveira.webp',
    companies: ['/images/logos/igc.svg'],
    shortBio: {
      pt: 'Mais de 5 anos de experiência em transações de equity e dívida. Antes de integrar o time da Golden Capital, foi advisor na igc Partners, onde assessorou companhias em operações de M&A e crédito estruturado.\n\nAo longo de sua trajetória, liderou projetos do início ao fim, participando de mais de 30 transações, com volume total transacionado de mais de R$ 300 milhões em setores como energia, tecnologia, bens de consumo, agronegócio, entre outros.',
      
      en: 'Over 5 years of experience in equity and debt transactions. Before joining the Golden Capital team, was an advisor at igc Partners, where he advised companies on M&A and structured credit operations.\n\nThroughout his career, has led projects from start to finish, participating in more than 30 transactions, with a total traded volume of over R$ 300 million in sectors such as energy, technology, consumer goods, agribusiness, among others.'
    },
    fullBio: {
      pt: `Mais de 5 anos de experiência em transações de equity e dívida. Antes de integrar o time da Golden Capital, ocupou a liderou a área de novos negócios na Mottu e trabalhou como advisor no sell side na igc Partners, onde assessorou companhias em operações de M&A e crédito estruturado. Durante sua carreira, esteve à frente projetos de M&A e captação do início ao fim, participando de mais de 30 transações. É economista pela Faculdade de Economia, Administração, Contabilidade e Atuárias da Universidade de São Paulo.

Atuou na execução e originação de transações em múltiplos setores, incluindo energia, tecnologia, bens de consumo, agronegócio, entre outros. O volume total de recursos transacionados em operações que atuou diretamente supera os R$ 300 milhões.`,
      en: `Over 5 years of experience in equity and debt transactions. Before joining the Golden Capital team, he led the new business area at Mottu and worked as an advisor on the sell side at igc Partners, where he advised companies on M&A and structured credit operations. During his career, he has been in charge of M&A and fundraising projects from start to finish, participating in more than 30 transactions. He is an economist from the Faculty of Economics, Administration, Accounting and Actuarial Sciences of the University of São Paulo.

He worked on the execution and origination of transactions in multiple sectors, including energy, technology, consumer goods, agribusiness, among others. The total volume of resources transacted in operations he directly participated in exceeds R$ 300 million.`
    },
    linkedin: 'https://www.linkedin.com/in/gabriel-sales-de-oliveira/',
    email: 'gabriel.oliveira@goldencapital.com'
  }
];