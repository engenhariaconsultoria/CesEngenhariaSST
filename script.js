// Theme Toggle Logic
const themeToggleCheckbox = document.getElementById('theme-toggle');
if (themeToggleCheckbox) {
    // Set initial toggle state based on theme attribute set by the head script
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        themeToggleCheckbox.checked = true;
    } else {
        themeToggleCheckbox.checked = false;
    }

    themeToggleCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Menu Mobile Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Service Data
const servicesData = {
    'gro': {
        title: 'GRO e PGR',
        image: 'assets/gro_pgr.jpg',
        description: `
            <p>O <strong>Gerenciamento de Riscos Ocupacionais (GRO)</strong> e o <strong>Programa de Gerenciamento de Riscos (PGR)</strong> são as bases da nova Norma Regulamentadora nº 01 (NR-01). Eles substituem o antigo PPRA e trazem uma abordagem mais completa e contínua para a segurança do trabalho.</p>
            <ul>
                <li>Identificação de perigos e avaliação de riscos ocupacionais.</li>
                <li>Planejamento de medidas de prevenção e controle.</li>
                <li>Monitoramento contínuo da eficácia das medidas implementadas.</li>
                <li>Atendimento integral às exigências legais trabalhistas.</li>
            </ul>
            <p>Nossa consultoria elabora o PGR personalizado para sua empresa, garantindo não apenas a conformidade legal, mas a efetiva proteção dos seus colaboradores.</p>
        `
    },
    'ltcat': {
        title: 'LTCAT',
        image: 'assets/ltcat.jpg',
        description: `
            <p>O <strong>Laudo Técnico das Condições Ambientais do Trabalho (LTCAT)</strong> é um documento obrigatório exigido pelo INSS. Ele tem como objetivo caracterizar se o trabalhador tem direito ou não à Aposentadoria Especial.</p>
            <ul>
                <li>Avaliação dos riscos físicos, químicos e biológicos.</li>
                <li>Documento base para a emissão do PPP (Perfil Profissiográfico Previdenciário).</li>
                <li>Prevenção de passivos previdenciários e tributários.</li>
            </ul>
            <p>Elaboramos o LTCAT com rigor técnico, utilizando equipamentos calibrados e metodologias normalizadas para garantir a precisão das informações.</p>
        `
    },
    'ppp': {
        title: 'PPP',
        image: 'assets/ppp.jpg',
        description: `
            <p>O <strong>Perfil Profissiográfico Previdenciário (PPP)</strong> documenta o histórico laboral do trabalhador. Desde janeiro de 2023, o PPP é emitido exclusivamente em formato eletrônico.</p>
            <p>Nós realizamos a gestão completa do PPP Eletrônico, assegurando que as informações enviadas ao INSS estejam corretas e atualizadas, evitando multas e problemas futuros para a empresa e para o colaborador.</p>
        `
    },
    'insalubridade': {
        title: 'Insalubridade e Periculosidade',
        image: 'assets/insalubridade.jpg',
        description: `
            <p>A caracterização de <strong>Insalubridade (NR-15)</strong> e <strong>Periculosidade (NR-16)</strong> define o pagamento de adicionais salariais aos trabalhadores expostos a certos riscos.</p>
            <ul>
                <li><strong>Insalubridade:</strong> Exposição a agentes nocivos à saúde acima dos limites de tolerância (ruído, calor, químicos, etc.).</li>
                <li><strong>Periculosidade:</strong> Atividades que impliquem risco acentuado (eletricidade, inflamáveis, explosivos, segurança pessoal, etc.).</li>
            </ul>
            <p>Emitimos laudos técnicos conclusivos para dar segurança jurídica à sua empresa na gestão desses adicionais.</p>
        `
    },
    'higiene': {
        title: 'Higiene Ocupacional',
        image: 'assets/higiene.jpg',
        description: `
            <p>A <strong>Higiene Ocupacional</strong> é a ciência dedicada à antecipação, reconhecimento, avaliação e controle dos riscos ambientais no local de trabalho.</p>
            <ul>
                <li><strong>Avaliação de Ruído:</strong> Dosimetria de ruído conforme NHO-01.</li>
                <li><strong>Avaliação de Calor:</strong> Medição de IBUTG conforme NHO-06.</li>
                <li><strong>Agentes Químicos:</strong> Coleta e análise de poeiras, fumos, vapores e gases.</li>
                <li><strong>Vibração:</strong> Avaliação de vibração de corpo inteiro e mãos/braços.</li>
            </ul>
            <p>Utilizamos equipamentos de alta precisão para quantificar as exposições e propor medidas de controle eficazes.</p>
        `
    },
    'esocial': {
        title: 'Gestão de eSocial SST',
        image: 'assets/esocial.jpg',
        description: `
            <p>O <strong>eSocial</strong> exigiu que as empresas enviassem informações de Segurança e Saúde no Trabalho (SST) ao governo digitalmente. Somos especialistas no envio desses eventos:</p>
            <ul>
                <li><strong>S-2210:</strong> Comunicação de Acidente de Trabalho (CAT).</li>
                <li><strong>S-2220:</strong> Monitoramento da Saúde do Trabalhador (ASOs).</li>
                <li><strong>S-2240:</strong> Condições Ambientais do Trabalho - Agentes Nocivos (Carga inicial e alterações).</li>
            </ul>
            <p>Garantimos o envio correto e no prazo, evitando as multas automáticas do sistema.</p>
        `
    },
    'assessoria': {
        title: 'Assessoria Técnica',
        image: 'assets/assessoria.jpg',
        description: `
            <p>Nossa <strong>Assessoria Técnica</strong> oferece suporte contínuo para sua empresa:</p>
            <ul>
                <li>Acompanhamento em perícias trabalhistas de insalubridade e periculosidade.</li>
                <li>Defesa técnica e formulação de quesitos.</li>
                <li>Auditorias internas de SST para preparação para fiscalizações.</li>
                <li>Suporte na implementação de medidas corretivas.</li>
            </ul>
            <p>Atuamos como parceiros estratégicos para blindar sua empresa de passivos trabalhistas.</p>
        `
    },
    'nr12': {
        title: 'NR-12 - Máquinas e Equipamentos',
        image: 'assets/nr12.jpg',
        description: `
            <p>A <strong>NR-12</strong> define referências técnicas e medidas de proteção para garantir a saúde e a integridade física dos trabalhadores que lidam com máquinas e equipamentos.</p>
            <ul>
                <li>Análise de Risco (Apreciação de Risco).</li>
                <li>Inventário de Máquinas.</li>
                <li>Projetos de adequação e proteção.</li>
                <li>Manuais e procedimentos de trabalho.</li>
            </ul>
            <p>Adequamos seu parque fabril às exigências da norma, garantindo operação segura e produtiva.</p>
        `
    },
    'incendio': {
        title: 'Projeto de Combate a Incêndio',
        image: 'assets/incendio.jpg',
        description: `
            <p>O <strong>Projeto de Segurança Contra Incêndio e Pânico (PSCIP)</strong> é fundamental para a regularização da edificação junto ao Corpo de Bombeiros (AVCB/CLCB).</p>
            <ul>
                <li>Dimensionamento de extintores, hidrantes e sinalização.</li>
                <li>Sistemas de iluminação de emergência e alarme.</li>
                <li>Planos de emergência.</li>
                <li>Renovação de AVCB.</li>
            </ul>
            <p>Proteja seu patrimônio e a vida dos ocupantes com um projeto técnico eficiente e aprovado.</p>
        `
    }
};

// Load Service Details
const serviceContent = document.getElementById('service-content');
if (serviceContent) {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');

    if (serviceId && servicesData[serviceId]) {
        const service = servicesData[serviceId];
        serviceContent.innerHTML = `
            <div class="service-detail-image-wrapper">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="service-detail-text">
                <h1>${service.title}</h1>
                ${service.description}
                <div style="margin-top: 30px;">
                    <a href="#contato" class="btn btn-primary">Solicitar Orçamento deste Serviço</a>
                </div>
            </div>
        `;
    } else {
        serviceContent.innerHTML = `
            <div style="text-align: center; width: 100%;">
                <h2>Serviço não encontrado</h2>
                <p>O serviço que você procura não está disponível ou o link está incorreto.</p>
                <a href="index.html" class="btn btn-outline" style="background: var(--primary-color); border-color: var(--primary-color);">Voltar ao Início</a>
            </div>
        `;
    }
}

// Reset scroll to top on page reload
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
window.onload = function () {
    window.scrollTo(0, 0);
};
