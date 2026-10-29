import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import {
  Asterisk, ArrowLeft, ArrowRight, ArrowUpRight, Award, Briefcase, Check,
  ExternalLink, Github, GraduationCap, Lightbulb, Mail, MapPin, Menu, Palette,
  Presentation, Rocket, Send, Sparkles, Trophy, X, Layers, Plus,
} from 'lucide-react'
import avatar from './assets/avatar.png'
import moscowCover from './assets/moscow-cover.jpg'
import antiFraudCover from './assets/antifraud-cover.svg'
import officeBot from './assets/office-bot.jpg'
import moscowCardCover from './assets/moscow-card-cover.jpg'
import officeBotCard from './assets/office-bot-card.png'

type Project = {
  cardCover?: string
  slug: string
  number: string
  title: string
  subtitle: string
  category: string
  cover: string
  accent: string
  summary: string
  role: string[]
  details: string[]
  outcome: string
  links: { label: string; href: string }[]
  tags: string[]
}

const projects: Project[] = [
  {
    slug: 'moscow-realtime', number: '01', title: 'MoscowRealtime',
    subtitle: 'Город как приключение', category: 'Мобильный продукт', cover: moscowCover,cardCover: moscowCardCover,
    accent: 'blue',
    summary: 'Концепция мобильного приложения для цифрового городского туризма: маршруты, достопримечательности и игровые квесты в одном пользовательском опыте.',
    role: ['Разработка первоначальной идеи и концепции', 'Проектирование структуры и логики продукта', 'Визуальное оформление и презентация проекта', 'Участие в обсуждении архитектуры и развёртывания'],
    details: ['MoscowRealtime помогает знакомиться с городом через интерактивные маршруты и игровые механики. В проекте важно было объединить полезную информацию о местах с понятным и вовлекающим пользовательским сценарием.', 'Мой вклад был сосредоточен на концепции, проектировании, визуальном представлении и подготовке презентационных материалов. Также я немного участвовал в развёртывании проекта.'],
    outcome: 'Команда заняла 11-е место в итоговом отборе Международной олимпиады «IT-Планета 2026»; по баллам проект занял 8-е место.',
    links: [
      { label: 'Мобильное приложение', href: 'https://github.com/Shshdevs/MoscowRealtime' },
      { label: 'Backend / API', href: 'https://github.com/Shshdevs/MoscowRealtime-API' },
    ], tags: ['Концепция', 'Проектирование', 'Дизайн', 'Командная работа'],
  },
  {
    slug: 'antifraud', number: '02', title: 'AntiFraud',
    subtitle: 'Антифрод без прослушки', category: 'Антифрод · AI / Data', cover: antiFraudCover,
    accent: 'red',
    summary: 'Концепция решения для выявления подозрительных телефонных вызовов по метаданным, без прослушивания записей разговоров.',
    role: ['Формирование первоначальной идеи', 'Проектирование концепции решения', 'Разработка визуального оформления и презентации', 'Участие в обсуждении структуры и деплоя'],
    details: ['Задача проекта — помочь обнаруживать признаки телефонного мошенничества, не анализируя содержание разговоров. Решение строится вокруг выявления сигналов и подозрительных связей.', 'Я участвовал в формировании идеи, проектировании решения и подготовке материалов, которые объясняют задачу и подход команды. Вклад в программную реализацию был ограниченным; техническую разработку выполняли участники команды.'],
    outcome: '3-е место на хакатоне «Телеком» в кейсе «Антифрод без прослушки».',
    links: [{ label: 'Репозиторий проекта', href: 'https://github.com/Shshdevs/Antifraud_AIEgg' }],
    tags: ['Идея', 'Проектирование', 'Дизайн', 'Презентация', 'Хакатон'],
  },
  {
    slug: 'office-bot', number: '03', title: 'Office Check Bot',
    subtitle: 'Ежедневная проверка в офисе', category: 'Бот · Автоматизация', cover: officeBot, cardCover: officeBotCard,
    accent: 'green',
    summary: 'Бот-напоминание для ежедневных отметок сотрудников: помогает не забыть отметиться и упрощает повторяющийся офисный процесс.',
    role: ['Идея и сценарий работы', 'Проектирование процесса ежедневных отметок', 'Подготовка визуальных материалов'],
    details: ['Небольшой прикладной проект для регулярного офисного процесса. Бот напоминает участникам команды об отметках в течение дня и снижает зависимость от ручных напоминаний.', 'У меня пока нет отдельной публичной страницы или репозитория этого проекта, поэтому здесь показываем его как небольшой кейс на основе имеющегося скриншота. Технологический стек добавим после уточнения.'],
    outcome: 'Рабочий сценарий ежедневных напоминаний и отметок в чате.',
    links: [], tags: ['Бот', 'Автоматизация', 'Концепция', 'Проектирование'],
  },
]

const navItems = [
  { to: '/', label: 'Главная', end: true },
  { to: '/about', label: 'Обо мне' },
  { to: '/projects', label: 'Проекты' },
  { to: '/achievements', label: 'Достижения' },
  { to: '/contacts', label: 'Контакты' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setMenuOpen(false), [location.pathname])

  return <header className="site-header shell">
    <Link to="/" className="brand" aria-label="Скурлатов Александр — главная"><span className="brand-mark">A<span>S</span></span><span className="brand-caption">PORTFOLIO <i> / 2026</i></span></Link>
    <button className="mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}>{menuOpen ? <X /> : <Menu />}</button>
    <nav className={`navigation ${menuOpen ? 'navigation-open' : ''}`} aria-label="Основная навигация">
      {navItems.map(item => <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>{item.label}</NavLink>)}
    </nav>
    <a className="header-contact" href="mailto:skurlatov.aleksandr2@gmail.com">Связаться <ArrowUpRight size={15} /></a>
  </header>
}

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <div className="section-label"><span>{number}</span><span className="section-label-line" /><span>{children}</span></div>
}

function Hero() {
  return <section className="hero panel shell">
    <div className="hero-grid-glow" />
    <div className="hero-copy">
      <div className="eyebrow"><span className="live-dot" /> ИДЕИ → КОНЦЕПЦИИ → ПРОДУКТЫ</div>
      <h1>Привет, я<br /><span className="hero-name">Скурлатов<br className="name-break" /> Александр<span className="cursor">_</span></span></h1>
      <p className="hero-subtitle">Проектирование IT-продуктов <i>·</i><br className="mobile-break" /> Концепции <i>·</i> Дизайн</p>
      <p className="hero-description">Мне интересны проекты в разных сферах, особенно IT: придумываю идеи, проектирую решения, создаю презентации и визуальный стиль, участвую в подготовке проектов к запуску.</p>
      <div className="hero-actions">
        <Link className="button button-primary" to="/projects">Смотреть проекты <ArrowRight size={17} /></Link>
        <Link className="button button-ghost" to="/about">Обо мне <ArrowUpRight size={16} /></Link>
      </div>
      <div className="hero-stats">
        <div><strong>03</strong><span>проекта</span></div>
        <div><strong>02</strong><span>достижения</span></div>
        <div><strong>05</strong><span>технологий</span></div>
        <div><strong className="stat-symbol">∞</strong><span>идеи</span></div>
      </div>
    </div>
    <div className="hero-art" aria-label="Аватар Александра">
      <div className="art-grid" />
      <div className="art-circle art-circle-one" /><div className="art-circle art-circle-two" />
      <div className="avatar-frame"><img src={avatar} alt="Неоновый аватар Александра" /></div>
      <div className="avatar-ornament ornament-sparkle" aria-hidden="true"><Sparkles size={31} strokeWidth={1.8}/></div>
      <div className="avatar-ornament ornament-asterisk" aria-hidden="true"><Asterisk size={38} strokeWidth={1.8}/></div>
      <div className="avatar-ornament ornament-arrow" aria-hidden="true"><ArrowUpRight size={30} strokeWidth={1.8}/></div>
      <div className="avatar-ornament ornament-plus" aria-hidden="true"><Plus size={31} strokeWidth={1.8}/></div>
      <span className="avatar-ornament ornament-dot" aria-hidden="true"><span/></span>
    </div>
  </section>
}

const capabilities = [
  { number: '01', title: 'Идея', desc: 'Формирование концепции и сценария продукта', icon: Lightbulb, color: 'pink' },
  { number: '02', title: 'Проектирование', desc: 'Структура, логика и пользовательский путь', icon: Layers, color: 'blue' },
  { number: '03', title: 'Дизайн', desc: 'Визуальное оформление и логотипы', icon: Palette, color: 'green' },
  { number: '04', title: 'Презентации', desc: 'Подача идеи и защита проектных решений', icon: Presentation, color: 'purple' },
  { number: '05', title: 'Запуск', desc: 'Участие в деплое и развитии проекта', icon: Rocket, color: 'pink' },
]

function Capabilities() {
  return <section className="section shell capabilities-section">
    <SectionLabel number="01">ЧТО Я ДЕЛАЮ</SectionLabel>
    <div className="section-heading-row"><h2>От первой мысли<br />до <span className="accent-text">понятного решения.</span></h2><p className="section-intro">Мне интересно находить смысл в идеях, выстраивать вокруг них систему и показывать результат так, чтобы его понимали и команда, и аудитория.</p></div>
    <div className="capability-grid">{capabilities.map(item => { const Icon = item.icon; return <article className={`capability-card ${item.color}`} key={item.number}><div className="capability-top"><span>{item.number} / 05</span><Icon size={22} /></div><h3>{item.title}</h3><p>{item.desc}</p><span className="card-corner">↗</span></article> })}</div>
  </section>
}

function ProjectCard({ project }: { project: Project }) {
  return <article className={`project-card ${project.accent}`}>
    <Link to={`/projects/${project.slug}`} className="project-cover-link" aria-label={`Подробнее о проекте ${project.title}`}><div className="project-cover"><img src={project.cardCover ?? project.cover} alt={`Визуализация проекта ${project.title}`} /> <span className="cover-number">PROJECT / {project.number}</span><span className="cover-open"><ArrowUpRight size={20}/></span></div></Link>
    <div className="project-card-body"><div className="project-card-meta"><span>{project.category}</span><span>{project.number}</span></div><h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p><div className="tag-list">{project.tags.slice(0, 3).map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><div className="project-card-footer"><Link className="text-link" to={`/projects/${project.slug}`}>Посмотреть кейс <ArrowUpRight size={16}/></Link>{project.links.length > 0 && <a className="icon-link" target="_blank" rel="noreferrer" href={project.links[0].href} aria-label={`Открыть репозиторий ${project.title}`}><Github size={17}/></a>}</div></div>
  </article>
}

function FeaturedProjects({ full = false }: { full?: boolean }) {
  const [filter, setFilter] = useState('Все')
  const filters = ['Все', 'Концепции', 'Дизайн', 'Боты']
  const filteredProjects = full ? projects.filter(project => filter === 'Все' || (filter === 'Боты' ? project.slug === 'office-bot' : filter === 'Дизайн' ? project.tags.includes('Дизайн') : project.tags.includes('Концепция') || project.tags.includes('Идея'))) : projects
  return <section className={`section shell projects-section ${full ? 'projects-page-section' : ''}`}>
    <SectionLabel number="02">ИЗБРАННЫЕ РАБОТЫ</SectionLabel>
    <div className="section-heading-row"><h2>{full ? <>Мои <span className="accent-text">проекты.</span></> : <>Идеи, которые<br /><span className="accent-text">становятся реальностью.</span></>}</h2><div className="projects-aside"><p>{full ? 'Проекты, в которых я участвовал на разных этапах: от идеи и проектирования до презентации и запуска.' : 'Каждый проект — это сочетание идеи, структуры, визуального языка и командной работы.'}{' '}</p>{!full && <Link className="text-link" to="/projects">Все проекты <ArrowRight size={16}/></Link>}</div></div>
    {full && <div className="filter-row" role="group" aria-label="Фильтр проектов">{filters.map(value => <button key={value} onClick={() => setFilter(value)} className={`filter-chip ${filter === value ? 'selected' : ''}`}>{filter === value && <span className="filter-dot"/>}{value}</button>)}</div>}
    <div className="project-grid">{filteredProjects.map(project => <ProjectCard project={project} key={project.slug}/>)}</div>
    {!full && <div className="all-projects-mobile"><Link to="/projects" className="button button-ghost">Все проекты <ArrowRight size={16}/></Link></div>}
  </section>
}

function AboutTeaser() {
  const skills = ['1C', '1IDM', 'BASH', 'SQL', 'Python']
  return <section className="section shell about-teaser">
    <div className="about-teaser-main panel"><SectionLabel number="03">НЕМНОГО ОБО МНЕ</SectionLabel><h2>Моя сильная сторона —<br /><span className="accent-text">увидеть целое.</span></h2><p>Мне близок путь от идеи до работающей концепции. Я умею собирать мысли в систему, проектировать решение, находить визуальный язык и готовить материалы, которые помогают команде двигаться в одном направлении.</p><Link className="text-link" to="/about">Подробнее обо мне <ArrowUpRight size={16}/></Link><div className="about-scribble">THINK<br/>MAKE<br/><span>SHOW.</span></div></div>
    <div className="about-side"><div className="panel skills-panel"><SectionLabel number="04">ТЕХНОЛОГИИ</SectionLabel><h3>Инструменты,<br />с которыми работал.</h3><div className="skill-grid">{skills.map((skill, i) => <div className={`skill-item skill-${i}`} key={skill}><span className="skill-icon">{skill === 'Python' ? 'Py' : skill === 'BASH' ? '$_' : skill}</span><span>{skill}</span></div>)}</div><p className="muted-note">Навыки отражены по практическому опыту и обучению.</p></div><div className="panel mini-award"><div className="award-icon"><Trophy size={21}/></div><div><span className="mini-label">КОМАНДНЫЙ РЕЗУЛЬТАТ</span><h3>2 достижения</h3><p>IT-Планета 2026 · Хакатон «Телеком»</p></div><Link to="/achievements" aria-label="Все достижения"><ArrowUpRight size={19}/></Link></div></div>
  </section>
}

function ContactBanner() {
  return <section className="shell contact-banner"><div className="contact-banner-glow"/><div className="contact-banner-copy"><span className="eyebrow"><span className="live-dot"/> ЕСТЬ ИДЕЯ?</span><h2>Давай создадим<br /><span className="accent-text">что-то значимое.</span></h2><p>Открыт к интересным проектам, сотрудничеству и новым возможностям.</p></div><div className="contact-banner-actions"><a href="mailto:skurlatov.aleksandr2@gmail.com" className="button button-primary">Написать мне <ArrowUpRight size={17}/></a><Link to="/contacts" className="button button-ghost">Все контакты <ArrowRight size={16}/></Link></div><div className="contact-banner-orbit">AS</div></section>
}

function Footer() {
  return <footer className="site-footer shell"><Link to="/" className="footer-brand">AS<span> / 2026</span></Link><span>Концепции. Проектирование. Визуальный язык.</span><a href="https://github.com/Xseon-Prog" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a></footer>
}

function HomePage() {
  return <><Hero/><Capabilities/><FeaturedProjects/><AboutTeaser/><ContactBanner/></>
}

function AboutPage() {
  return <main className="shell inner-page"><SectionLabel number="01">ОБО МНЕ</SectionLabel><div className="inner-hero-grid"><div><h1>Я думаю о том,<br />как <span className="accent-text">идея работает.</span></h1><p className="inner-lead">Скурлатов Александр · Проектирование IT-продуктов · Концепции · Дизайн</p><p className="body-copy">Мне интересно участвовать в проектах на разных этапах — от первоначальной идеи и проектирования до презентации и запуска. В первую очередь меня привлекают IT-продукты, но мне также интересно работать над проектами в других сферах, разбираться в задачах и находить способ ясно представить решение команде и аудитории.</p><p className="body-copy">В командных проектах я занимался разработкой презентаций, визуальным оформлением, логотипами и проектированием. Также участвовал в обсуждении технической стороны и отдельных задачах развёртывания.</p></div><div className="about-profile-card panel"><div className="about-avatar"><img src={avatar} alt="Аватар Александра"/></div><span className="profile-index">PROFILE / 001</span><h3>Скурлатов Александр</h3><p>Идеи · Проектирование · Дизайн</p><div className="profile-location"><MapPin size={15}/> Москва, Россия</div><div className="profile-line"/><div className="profile-status"><span className="live-dot"/> Открыт к новым проектам</div></div></div>
    <div className="subsection-title"><h2>Как я участвую в проектах</h2><span>FOCUS / 05</span></div><div className="capability-grid detail-capabilities">{capabilities.map(item => {const Icon = item.icon;return <article className={`capability-card ${item.color}`} key={item.number}><div className="capability-top"><span>{item.number} / 05</span><Icon size={22}/></div><h3>{item.title}</h3><p>{item.desc}</p></article>})}</div>
    <div className="education-block"><div className="subsection-title"><h2>Образование и обучение</h2><GraduationCap size={23}/></div><div className="timeline"><div className="timeline-item"><span className="timeline-dot"/><div><span className="timeline-meta">ОБРАЗОВАНИЕ</span><h3>Колледж программирования и кибербезопасности РТУ МИРЭА</h3><p>Среднее профессиональное образование.</p></div></div><div className="timeline-item"><span className="timeline-dot"/><div><span className="timeline-meta">КУРСЫ</span><h3>HTML · C++ · Основы Python</h3><p>Курсы по основам веб-разработки и программирования.</p></div></div><div className="timeline-item"><span className="timeline-dot green-dot"/><div><span className="timeline-meta">ПОВЫШЕНИЕ КВАЛИФИКАЦИИ</span><h3>Основы 1С</h3><p>Курс повышения квалификации успешно пройден.</p></div></div></div></div>
  </main>
}

function ProjectsPage() { return <main className="inner-page"><FeaturedProjects full/><div className="shell project-note panel"><Lightbulb size={22}/><div><h3>Не только код</h3><p>В карточках показан мой реальный вклад: идея, проектирование, дизайн, презентации и участие в запуске. Задачи программной реализации выполняли и другие участники команд.</p></div></div></main> }

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  if (!project) return <NotFoundPage />
  return <main className="shell inner-page project-detail-page"><Link to="/projects" className="back-link"><ArrowLeft size={16}/> Назад к проектам</Link><SectionLabel number={`PROJECT / ${project.number}`}>{project.category.toUpperCase()}</SectionLabel><div className="detail-hero-grid"><div className="detail-intro"><h1>{project.title.split(/(?=[A-Z])/).length > 1 && project.slug !== 'office-bot' ? <>{project.title}</> : project.title}</h1><p className="inner-lead">{project.subtitle}</p><p className="body-copy">{project.summary}</p><div className="tag-list detail-tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><div className="detail-actions">{project.links.map(link => <a className="button button-primary" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <ExternalLink size={15}/></a>)}</div></div><div className="detail-cover"><img src={project.cover} alt={`Иллюстрация ${project.title}`}/><span className="detail-cover-mark">{project.number} / CASE STUDY</span></div></div><div className="detail-content-grid"><section className="detail-copy panel"><SectionLabel number="01">О ПРОЕКТЕ</SectionLabel>{project.details.map((para, i) => <p className="body-copy" key={i}>{para}</p>)}<div className="outcome-box"><Award size={22}/><div><span>РЕЗУЛЬТАТ</span><p>{project.outcome}</p></div></div></section><aside className="detail-role panel"><SectionLabel number="02">МОЙ ВКЛАД</SectionLabel><ul>{project.role.map(item => <li key={item}><Check size={16}/><span>{item}</span></li>)}</ul><div className="detail-divider"/><SectionLabel number="03">ТЕМЫ</SectionLabel><div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></aside></div><div className="detail-bottom-nav"><Link to="/projects" className="text-link"><ArrowLeft size={16}/> Все проекты</Link><Link to="/contacts" className="text-link">Обсудить проект <ArrowUpRight size={16}/></Link></div></main>
}

function AchievementsPage() {
  const achievements = [
    { no: '01', title: 'Международная олимпиада «IT-Планета 2026»', project: 'MoscowRealtime', result: '8-е место по баллам; 11-е место команды в итоговом отборе.', desc: 'Командный проект мобильного приложения для цифрового городского туризма.', icon: Trophy, color: 'blue' },
    { no: '02', title: 'Хакатон «Телеком»', project: '«Антифрод без прослушки»', result: '3-е место.', desc: 'Концепция решения для выявления подозрительных звонков без прослушивания разговоров.', icon: Award, color: 'pink' },
  ]
  return <main className="shell inner-page"><SectionLabel number="01">ДОСТИЖЕНИЯ</SectionLabel><div className="section-heading-row inner-heading-row"><h1>Результат —<br /><span className="accent-text">это командная работа.</span></h1><p className="section-intro">Соревнования, где идея должна стать убедительным решением, а проект — выдержать проверку задачей и временем.</p></div><div className="achievement-grid">{achievements.map(item => {const Icon=item.icon;return <article className={`achievement-card panel ${item.color}`} key={item.no}><div className="achievement-top"><span>{item.no} / ACHIEVEMENT</span><Icon size={23}/></div><h2>{item.title}</h2><span className="achievement-project">{item.project}</span><p>{item.desc}</p><div className="achievement-result"><Trophy size={18}/><strong>{item.result}</strong></div></article>})}</div><div className="achievement-footer panel"><Sparkles size={22}/><p>В конкурсных проектах я участвовал в формировании идеи, проектировании, визуальном оформлении и подготовке презентации решения.</p></div></main>
}

function ContactsPage() {
  const contacts = [
    { label: 'ЭЛЕКТРОННАЯ ПОЧТА', value: 'skurlatov.aleksandr2@gmail.com', href: 'mailto:skurlatov.aleksandr2@gmail.com', icon: Mail, color: 'pink' },
    { label: 'TELEGRAM', value: '@What338', href: 'https://t.me/What338', icon: Send, color: 'blue' },
    { label: 'GITHUB', value: 'Xseon-Prog', href: 'https://github.com/Xseon-Prog', icon: Github, color: 'green' },
  ]
  return <main className="shell inner-page contacts-page"><SectionLabel number="01">КОНТАКТЫ</SectionLabel><div className="section-heading-row inner-heading-row"><h1>Есть идея?<br /><span className="accent-text">Обсудим.</span></h1><p className="section-intro">Открыт к интересным проектам, командному сотрудничеству и новым возможностям.</p></div><div className="contacts-layout"><div className="contact-list">{contacts.map(item => {const Icon=item.icon;return <a href={item.href} target={item.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" className={`contact-item panel ${item.color}`} key={item.label}><span className="contact-icon"><Icon size={21}/></span><span className="contact-copy"><span>{item.label}</span><strong>{item.value}</strong></span><ArrowUpRight size={18} className="contact-arrow"/></a>})}</div><div className="contact-info panel"><div className="contact-info-glow"/><div className="contact-info-avatar"><img src={avatar} alt="Аватар Александра"/></div><span className="mini-label">НА СВЯЗИ</span><h2>Скурлатов<br />Александр</h2><div className="contact-location"><MapPin size={16}/> Москва, Россия</div><div className="contact-location"><Briefcase size={16}/> Удалённо / гибрид / офис</div><div className="availability"><span className="live-dot"/> Рассматриваю предложения</div></div></div></main>
}

function NotFoundPage() {
  return <main className="shell inner-page not-found"><span className="not-found-number">404</span><h1>Кажется, этой страницы<br/><span className="accent-text">пока нет.</span></h1><Link to="/" className="button button-primary">На главную <ArrowRight size={16}/></Link></main>
}

export default function App() {
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }) }, [location.pathname])
  return <div className="app-shell"><div className="ambient ambient-one"/><div className="ambient ambient-two"/><Header/><Routes><Route path="/" element={<HomePage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/projects" element={<ProjectsPage/>}/><Route path="/projects/:slug" element={<ProjectDetailPage/>}/><Route path="/achievements" element={<AchievementsPage/>}/><Route path="/contacts" element={<ContactsPage/>}/><Route path="*" element={<NotFoundPage/>}/></Routes><Footer/></div>
}
