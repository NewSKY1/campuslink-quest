import { useMemo, useState } from 'react';
const glyph = (symbol) => ({ size = 18, ...props }) => <span aria-hidden="true" style={{ fontSize: size, lineHeight: 1 }} {...props}>{symbol}</span>;
const ArrowUpRight = glyph('↗');
const Bell = glyph('♢');
const BookOpen = glyph('▤');
const CalendarDays = glyph('▦');
const Check = glyph('✓');
const ChevronRight = glyph('›');
const CircleUserRound = glyph('◉');
const GraduationCap = glyph('⌂');
const LayoutDashboard = glyph('▣');
const MessageCircle = glyph('◌');
const Moon = glyph('◐');
const Plus = glyph('+');
const Search = glyph('⌕');
const Sparkles = glyph('✳');
const Sun = glyph('☼');
const Users = glyph('♧');

const communities = [
  { code: 'BIT 293', title: 'Web-Based Concepts', detail: 'Build, share and learn together.', members: 148, color: 'blue' },
  { code: 'MATH 251', title: 'Mathematics study circle', detail: 'Make the tricky topics click.', members: 96, color: 'pink' },
  { code: 'KNUST', title: 'Campus learning community', detail: 'Good questions belong here.', members: 420, color: 'green' },
];

const tasks = [
  { label: 'Finish your HTML practice', course: 'BIT 293', xp: 50, done: true },
  { label: 'Review differentiation notes', course: 'MATH 251', xp: 40, done: false },
  { label: 'Join a study session', course: 'CampusLink', xp: 30, done: false },
];

function Logo({ onClick }) {
  return <button className="logo" onClick={onClick} aria-label="Go to home">campuslink <strong>QUEST</strong></button>;
}

function Header({ page, setPage, dark, setDark }) {
  return (
    <header className="site-header">
      <Logo onClick={() => setPage('home')} />
      <nav className="desktop-nav" aria-label="Main navigation">
        <button className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}>Why CampusLink</button>
        <button onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}>How it works</button>
        <button onClick={() => setPage('communities')}>Communities</button>
      </nav>
      <div className="header-actions">
        <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
        <button className="btn btn-small" onClick={() => setPage('dashboard')}>Get started <ArrowUpRight size={15} /></button>
      </div>
    </header>
  );
}

function Landing({ setPage }) {
  return (
    <main>
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">// BUILT FOR YOUR CAMPUS JOURNEY</p>
          <h1>Big goals.<br /><em>Better</em> together.</h1>
          <p className="lede">Find your study people, organize your academic life, and turn everyday effort into progress. Starting at KNUST.</p>
          <div className="button-row">
            <button className="btn" onClick={() => setPage('dashboard')}>Start your campus quest <ArrowUpRight size={16} /></button>
            <button className="text-btn" onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}>Explore the experience <ChevronRight size={16} /></button>
          </div>
          <p className="microcopy">Your courses. Your community. Your next chapter.</p>
        </div>
        <div className="hero-card">
          <div className="card-kicker">A little structure. A lot of possibility.</div>
          <div className="date">Monday, 16 Nov</div>
          <h3>You’ve got this, Kwame.</h3>
          <div className="next-class"><span>YOUR NEXT CLASS</span><strong>Web-Based Concepts</strong><small>BIT 293 · 10:00–11:30 · Lab 2</small></div>
          <div className="task-preview"><span className="check"><Check size={14} /></span>Finish your HTML practice <b>+50 XP</b></div>
        </div>
      </section>
      <div className="ticker">Computer Science Society ✳ Compile your fit ✳ Wear the society ✳</div>
      <section id="why" className="section-shell feature-section">
        <p className="eyebrow">// LESS JUGGLING. MORE GROWING.</p>
        <h2>Everything you need<br />to move forward.</h2>
        <div className="feature-grid">
          {[
            ['01 / Connect', 'Find people on your wavelength.', 'Discover students who share your courses, interests and academic goals.', Users],
            ['02 / Organize', 'Make space for what matters.', 'Keep lectures, assignments and study sessions together in one clear plan.', CalendarDays],
            ['03 / Achieve', 'Small steps. Real momentum.', 'Track your progress, earn meaningful badges and celebrate consistent effort.', Sparkles],
          ].map(([label, title, copy, Icon]) => <article className="feature-card" key={label}><Icon size={22} /><p className="eyebrow">{label}</p><h3>{title}</h3><p>{copy}</p><button className="text-btn" onClick={() => setPage('dashboard')}>Explore <ArrowUpRight size={15} /></button></article>)}
        </div>
      </section>
      <section id="how" className="steps-section">
        <div className="section-shell">
          <p className="eyebrow">// YOUR FIRST THREE STEPS</p><h2>A fresh start, without<br />the friction.</h2>
          <div className="steps">{[['01', 'Make it yours', 'Add your courses and academic interests.'], ['02', 'Find your circle', 'Connect with peers and join a study group.'], ['03', 'Build your rhythm', 'Plan your week and celebrate your progress.']].map(([n, title, copy]) => <div className="step" key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
        </div>
      </section>
      <section className="section-shell community-callout"><div><p className="eyebrow">// YOUR CAMPUS, A LITTLE CLOSER</p><h2>There’s a place for<br />your kind of curious.</h2><p className="lede">From your first lecture to your next group project, find conversations that move you forward.</p></div><div className="mini-communities">{communities.map((community) => <button key={community.code} onClick={() => setPage('communities')}><span>{community.code}</span><strong>{community.title}</strong><small>{community.detail}</small></button>)}</div></section>
    </main>
  );
}

function SideNav({ page, setPage }) {
  return <aside className="side-nav"><Logo onClick={() => setPage('dashboard')} /><p className="eyebrow">YOUR SPACE</p>{[['dashboard', LayoutDashboard, 'Overview'], ['planner', CalendarDays, 'Planner'], ['communities', Users, 'Communities'], ['messages', MessageCircle, 'Messages'], ['profile', CircleUserRound, 'Profile']].map(([id, Icon, label]) => <button className={page === id ? 'selected' : ''} key={id} onClick={() => setPage(id)}><Icon size={18} />{label}</button>)}</aside>;
}

function Dashboard({ setPage }) {
  const [done, setDone] = useState(tasks.map((task) => task.done));
  const completed = done.filter(Boolean).length;
  return <div className="dashboard-content"><div className="page-bar"><div><p className="eyebrow">MONDAY, 16 NOVEMBER</p><h1>Your campus quest.</h1><p className="muted">A clear view of what matters today.</p></div><button className="icon-btn notification"><Bell size={19} /><i /></button></div><div className="dashboard-hero"><p className="eyebrow">LEVEL 04 · 1,250 XP</p><h2>Keep your momentum,<br />Kwame.</h2><div className="progress"><span style={{ width: '68%' }} /></div><small>680 XP to level 5</small><div className="due"><BookOpen size={18} /><span><b>Next up:</b> Web-Based Concepts · Lab 2</span><button className="btn btn-white" onClick={() => setPage('planner')}>Open planner</button></div></div><div className="stat-grid"><div><span>STUDY STREAK</span><strong>7 days 🔥</strong></div><div><span>QUESTS DONE</span><strong>{completed + 12}</strong></div><div><span>COMMUNITIES</span><strong>4 joined</strong></div></div><section className="tasks-section"><div className="section-heading"><div><p className="eyebrow">// TODAY'S QUESTS</p><h2>Small steps, real progress.</h2></div><button className="text-btn" onClick={() => setPage('planner')}>View planner <ArrowUpRight size={15} /></button></div><div className="task-list">{tasks.map((task, index) => <label className={done[index] ? 'quest done' : 'quest'} key={task.label}><button className="quest-check" onClick={() => setDone(done.map((value, i) => i === index ? !value : value))}>{done[index] && <Check size={14} />}</button><span><b>{task.label}</b><small>{task.course}</small></span><strong>+{task.xp} XP</strong></label>)}</div></section></div>;
}

function Communities() {
  const [query, setQuery] = useState('');
  const [joined, setJoined] = useState([]);
  const filtered = communities.filter((item) => `${item.code} ${item.title}`.toLowerCase().includes(query.toLowerCase()));
  return <div className="dashboard-content"><div className="page-bar"><div><p className="eyebrow">CONNECT</p><h1>Find your people.</h1><p className="muted">Communities built around the things you are learning.</p></div></div><div className="search-bar"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search courses, interests or communities" /></div><div className="community-grid">{filtered.map((community) => { const isJoined = joined.includes(community.code); return <article className="community-card" key={community.code}><div className={`community-avatar ${community.color}`}><GraduationCap size={24} /></div><span className="community-code">{community.code}</span><h3>{community.title}</h3><p>{community.detail}</p><small>{community.members} students</small><button className={isJoined ? 'btn joined' : 'btn'} onClick={() => setJoined(isJoined ? joined.filter((item) => item !== community.code) : [...joined, community.code])}>{isJoined ? <><Check size={15} /> Joined</> : <>Join community <ArrowUpRight size={15} /></>}</button></article>})}</div></div>;
}

function Planner() {
  const [week, setWeek] = useState(0);
  const events = ['Web-Based Concepts', 'Mathematics II', 'Database Concepts'];
  return <div className="dashboard-content"><div className="page-bar"><div><p className="eyebrow">ORGANIZE</p><h1>Your academic planner.</h1><p className="muted">One calm view of the week ahead.</p></div><button className="btn"><Plus size={16} /> Add quest</button></div><div className="planner-toolbar"><button className="icon-btn" onClick={() => setWeek(week - 1)}>&larr;</button><strong>16 – 22 November 2026</strong><button className="icon-btn" onClick={() => setWeek(week + 1)}>&rarr;</button></div><div className="calendar">{['MON 16', 'TUE 17', 'WED 18', 'THU 19', 'FRI 20'].map((day, index) => <div className="calendar-day" key={day}><h4>{day}</h4>{events.slice(0, index % 3 + 1).map((event, eventIndex) => <button className="calendar-event" key={event}><small>{10 + eventIndex * 2}:00</small>{event}</button>)}</div>)}</div><div className="planner-note"><Sparkles size={18} /><span><b>Build your rhythm.</b> Consistency beats intensity. You have completed 3 quests this week.</span></div></div>;
}

function Messages() { const [message, setMessage] = useState(''); const [messages, setMessages] = useState(['Hey! Are we still meeting for the BIT 293 practice?', 'Yes, I will be there at 3pm.']); return <div className="dashboard-content"><div className="page-bar"><div><p className="eyebrow">CONNECT</p><h1>Your conversations.</h1></div></div><div className="message-panel"><div className="conversation-list"><strong>Messages</strong>{['Ama Serwaa', 'Kofi Mensah', 'BIT 293 Study Group'].map((name, i) => <button key={name} className={i === 0 ? 'selected' : ''}><span className="avatar">{name[0]}</span>{name}<small>{i === 0 ? 'Active now' : 'Yesterday'}</small></button>)}</div><div className="conversation"><div className="conversation-head"><span className="avatar">A</span><strong>Ama Serwaa</strong><small>Active now</small></div><div className="messages">{messages.map((item, index) => <p className={index % 2 ? 'mine' : ''} key={`${item}-${index}`}>{item}</p>)}</div><form className="message-send" onSubmit={(event) => { event.preventDefault(); if (message.trim()) { setMessages([...messages, message]); setMessage(''); } }}><input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Write a message..." /><button className="btn" aria-label="Send message"><ArrowUpRight size={16} /></button></form></div></div></div>; }

function App() {
  const [page, setPage] = useState('home');
  const [dark, setDark] = useState(false);
  const appPage = page !== 'home';
  const content = useMemo(() => ({ dashboard: <Dashboard setPage={setPage} />, communities: <Communities />, planner: <Planner />, messages: <Messages />, profile: <Dashboard setPage={setPage} /> }[page]), [page]);
  return <div className={dark ? 'app dark' : 'app'}>{appPage ? <div className="app-shell"><SideNav page={page} setPage={setPage} /><main className="workspace"><div className="mobile-top"><Logo onClick={() => setPage('dashboard')} /><button className="icon-btn" onClick={() => setDark(!dark)}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button></div>{content}</main><div className="mobile-nav">{[['dashboard', LayoutDashboard], ['planner', CalendarDays], ['communities', Users], ['messages', MessageCircle]].map(([id, Icon]) => <button className={page === id ? 'active' : ''} onClick={() => setPage(id)} key={id}><Icon size={18} />{id}</button>)}</div></div> : <><Header page={page} setPage={setPage} dark={dark} setDark={setDark} /><Landing setPage={setPage} /><footer className="site-footer section-shell"><Logo onClick={() => setPage('home')} /><span>© 2026 CampusLink Quest · Starting at KNUST</span></footer></>}</div>;
}

export default App;
