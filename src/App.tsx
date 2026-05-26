import React, { useState } from "react";

interface Service {
  icon: string;
  title: string;
  text: string;
}

const services: Service[] = [
  {
    icon: "👥",
    title: "Intellectual Workforce",
    text: "We help you find, hire, and structure skilled teams across technology, operations, admin, support, and management roles.",
  },
  {
    icon: "🏢",
    title: "Office Space & Infrastructure",
    text: "From workspace planning to utilities, systems, seating, and daily office readiness, we help build a real operating base.",
  },
  {
    icon: "📋",
    title: "Management Support",
    text: "Local coordination, team reporting, workflow setup, compliance support, and smooth execution for your offshore office.",
  },
  {
    icon: "💰",
    title: "Cost & Setup Planning",
    text: "We help estimate hiring, rent, infrastructure, and operational budgets so you scale with clarity and control.",
  },
];

const steps: string[] = [
  "Understand your business goals",
  "Map roles, space, and systems",
  "Hire the right workforce",
  "Set up your office operations",
  "Manage, report, and scale",
];

const stats: [string, string][] = [
  ["10+", "Companies supported"],
  ["360", "Office setup support"],
  ["4 Pillars", "Hiring, space, ops, cost"],
  ["100%", "Transparent billing focus"],
];

const navItems: string[] = ["Home", "Models", "Transparency", "About Us"];

interface PageShellProps {
  children: React.ReactNode;
}

function PageShell({ children }: PageShellProps) {
  return <main className="relative z-10 animate-fade-up">{children}</main>;
}

interface GradientTitleProps {
  children: React.ReactNode;
  className?: string;
}

function GradientTitle({ children, className = "" }: GradientTitleProps) {
  return (
    <span className={`bg-gradient-to-r from-[#0A1F44] via-[#123C73] to-[#1E3A8A] bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}

interface SectionLabelProps {
  children: React.ReactNode;
}

function SectionLabel({ children }: SectionLabelProps) {
  return <p className="font-black uppercase opacity-50">{children}</p>;
}

interface HomePageProps {
  activeService: number;
  setActiveService: (index: number) => void;
}

function HomePage({ activeService, setActiveService }: HomePageProps) {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 md:grid-cols-2 md:px-8 md:pb-24 md:pt-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#0A1F44] bg-[#F8F4EA] px-4 py-2 text-sm font-black shadow-[5px_5px_0_#111]">
            ✨ Offshore teams, offices, and operations under one roof.
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.92] md:text-8xl bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] bg-clip-text text-transparent">
            Build your offshore office without the chaos.
          </h1>

          <div className="mt-7 max-w-2xl rounded-[2rem] border-2 border-[#0A1F44] bg-[#0A1F44] p-5 text-[#F8F4EA] shadow-[8px_8px_0_#0A1F44]">
            <p className="text-3xl font-black md:text-5xl">RIGHT PEOPLE. RIGHT PLACE.</p>
            <p className="mt-3 text-base font-semibold opacity-75">The core belief behind every hiring, office, and operations decision we make.</p>
          </div>

          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 opacity-75 md:text-xl">
            Partner Desk helps US and Canada companies set up complete offshore operations: hiring, office space, infrastructure, management, and cost planning under one trusted system.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex h-14 items-center justify-center rounded-full bg-[#0A1F44] px-8 text-base font-black text-[#F8F4EA] transition hover:bg-[#0A1F44]/85">
              Plan My Offshore Office 
            </a>
            <a href="#services" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-[#0A1F44] bg-transparent px-8 text-base font-black transition hover:bg-[#0A1F44] hover:text-[#F8F4EA]">
              View Services
            </a>
          </div>
        </div>

        <div className="relative animate-soft-float">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#0A1F44]" />
          <div className="absolute -bottom-10 -left-8 h-40 w-40 rotate-12 rounded-[2.5rem] border-2 border-[#0A1F44] bg-[#F8F4EA]" />
          <div className="relative rounded-[2.5rem] border-2 border-[#0A1F44] bg-[#F8F4EA] p-5 shadow-[14px_14px_0_#0A1F44]">
            <div className="rounded-[2rem] bg-[#0A1F44] p-5 text-[#F8F4EA]">
              <div className="flex items-center justify-between">
                <p className="font-black uppercase opacity-70">Setup Board</p>
                <span className="text-2xl">🌍</span>
              </div>
              <div className="mt-8 space-y-4">
                {services.map((service, index) => (
                  <button
                    key={service.title}
                    onClick={() => setActiveService(index)}
                    className={`w-full rounded-3xl border border-white/20 p-4 text-left transition ${activeService === index ? "bg-[#F8F4EA] text-black" : "bg-[#F8F4EA]/5 text-[#F8F4EA] hover:bg-[#F8F4EA]/10"}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{service.icon}</span>
                      <span className="font-black">{service.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-5 rounded-[2rem] border-2 border-[#0A1F44] bg-[#F8F4EA] p-6">
              <div className="text-4xl">{services[activeService].icon}</div>
              <h3 className="mt-4 text-2xl font-black">{services[activeService].title}</h3>
              <p className="mt-2 font-medium leading-7 opacity-70">{services[activeService].text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#0A1F44] bg-[#0A1F44] py-5 text-[#F8F4EA]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-4 md:px-8">
          {stats.map(([num, label]) => (
            <div key={label} className="flex items-center gap-4 rounded-3xl border border-white/20 p-4">
              <p className="text-3xl font-black">{num}</p>
              <p className="text-sm font-bold opacity-70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="rounded-[2.5rem] border-2 border-[#0A1F44] bg-[#0A1F44] p-8 text-[#F8F4EA] shadow-[12px_12px_0_#0A1F44]">
            <p className="text-5xl font-black md:text-7xl">One desk. Complete setup.</p>
            <p className="mt-5 text-lg font-medium leading-8 opacity-75">
              You don’t need separate vendors for hiring, office space, reporting, billing, and local management. Partner Desk connects everything into one clear system.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["01", "Hire smarter", "Find people who match your role, culture, and growth plan."],
              ["02", "Set up faster", "Plan office space, seats, systems, and infrastructure without confusion."],
              ["03", "Operate clearly", "Keep reports, management, salaries, and invoices structured."],
              ["04", "Scale safely", "Grow your offshore ecosystem with cost control and transparency."],
            ].map(([num, title, text]) => (
              <div key={title} className="rounded-[2rem] border-2 border-[#0A1F44] bg-[#F8F4EA] p-6 shadow-[7px_7px_0_#0A1F44]">
                <p className="text-sm font-black opacity-50">{num}</p>
                <h3 className="mt-4 text-2xl font-black">{title}</h3>
                <p className="mt-3 font-medium leading-7 opacity-70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <SectionLabel>What We Merge</SectionLabel>
            <h2 className="mt-3 text-4xl font-black bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] bg-clip-text text-transparent md:text-6xl">Everything your offshore office needs.</h2>
          </div>
          <p className="max-w-md text-lg font-medium leading-8 opacity-70">
            Instead of dealing with multiple vendors, Partner Desk becomes your single execution partner.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="h-full rounded-[2rem] border-2 border-[#0A1F44] bg-[#F8F4EA] p-6 shadow-[7px_7px_0_#0A1F44] transition hover:-translate-y-2 hover:shadow-[12px_12px_0_#0A1F44]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A1F44] text-2xl text-[#F8F4EA]">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] bg-clip-text text-transparent tracking-tight">{service.title}</h3>
              <p className="mt-4 font-medium leading-7 opacity-70">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="rounded-[2.5rem] border-2 border-[#0A1F44] bg-[#F8F4EA] p-8 shadow-[10px_10px_0_#0A1F44] md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <SectionLabel>Built For Global Teams</SectionLabel>
              <h2 className="mt-3 text-4xl font-black bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] bg-clip-text text-transparent md:text-6xl">A real operating base, not just outsourcing.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Local hiring support",
                "Office space planning",
                "Infrastructure setup",
                "Finance visibility",
                "Team coordination",
                "Monthly reporting",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-3xl border-2 border-[#0A1F44] p-4 font-black">
                  <span>✅</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-5 rounded-[2.5rem] border-2 border-[#0A1F44] bg-[#F8F4EA] py-16 shadow-[10px_10px_0_#0A1F44] md:mx-8">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="mt-3 text-4xl font-black bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] bg-clip-text text-transparent md:text-6xl">From idea to operating office.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step} className="rounded-3xl border-2 border-[#0A1F44] bg-[#F8F4EA] p-5">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#0A1F44] text-sm font-black text-[#F8F4EA]">
                  {index + 1}
                </div>
                <p className="font-black leading-6">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </PageShell>
  );
}

function ModelsPage() {
  const models = [
    {
      tag: "Model 01",
      title: "Full Managed Office Model",
      subtitle: "We manage your office, finance, hiring, and day-to-day operations.",
      icon: "🏢",
      points: [
        "Complete hiring and team structuring",
        "Office space, seating, systems, and infrastructure setup",
        "Finance coordination, salary tracking, vendor bills, and reports",
        "Local management support for daily office operations",
        "Best for companies that want a complete offshore office partner",
      ],
    },
    {
      tag: "Model 02",
      title: "Talent + Space Model",
      subtitle: "We find the right talent and office space; your own manager handles the operations.",
      icon: "👥",
      points: [
        "We source and shortlist strong talent for your roles",
        "We help you find practical office space and basic setup support",
        "Your company appoints a manager from your own team",
        "Your manager settles workflow, culture, reporting, and daily control",
        "Best for companies that want control but need local execution help",
      ],
    },
  ];

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-4xl">
          <SectionLabel>Our Models</SectionLabel>
          <h1 className="mt-4 text-5xl font-black leading-[0.95] md:text-8xl">
            <GradientTitle>Choose how you want to build.</GradientTitle>
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 opacity-75 md:text-xl">
            Every company has a different comfort level. Some want us to manage everything. Some only need talent and space while their own manager runs the setup.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {models.map((model) => (
            <div key={model.title} className="rounded-[2.5rem] border-2 border-[#0A1F44] bg-[#F8F4EA] p-6 shadow-[12px_12px_0_#0A1F44] md:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="inline-flex rounded-full bg-[#0A1F44] px-4 py-2 text-sm font-black text-[#F8F4EA]">{model.tag}</p>
                  <h2 className="mt-6 text-4xl font-black md:text-5xl">
                    <GradientTitle>{model.title}</GradientTitle>
                  </h2>
                </div>
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl border-2 border-[#0A1F44] bg-[#F8F4EA] text-4xl">{model.icon}</div>
              </div>
              <p className="mt-5 text-lg font-bold leading-8 opacity-75">{model.subtitle}</p>
              <div className="mt-8 space-y-4">
                {model.points.map((point) => (
                  <div key={point} className="flex gap-4 rounded-3xl border-2 border-[#0A1F44] bg-[#F8F4EA] p-4">
                    <span>✅</span>
                    <p className="font-bold leading-7">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <ContactSection />
    </PageShell>
  );
}

function TransparencyPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionLabel>Our Main Core</SectionLabel>
            <h1 className="mt-4 text-5xl font-black leading-[0.95] md:text-8xl">
              <GradientTitle>Transparency is our operating system.</GradientTitle>
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 opacity-75 md:text-xl">
              Partner Desk is built around clean visibility. You should know where every dollar goes: salaries, invoices, office costs, vendor bills, and management charges.
            </p>
          </div>
          <div className="rounded-[2.5rem] border-2 border-[#0A1F44] bg-[#0A1F44] p-8 text-[#F8F4EA] shadow-[12px_12px_0_#111111]">
            <p className="text-6xl font-black">100%</p>
            <p className="mt-3 text-2xl font-black">Clear billing. Clear salaries. Clear invoices.</p>
            <p className="mt-4 font-medium leading-7 opacity-75">No hidden confusion. No messy reporting. Just structured operational clarity.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            ["💳", "Billing Transparency", "Monthly billing breakdowns with clear categories for office, management, hiring, and support costs."],
            ["👤", "Salary Transparency", "Clear salary visibility so you understand the real cost of every role and every department."],
            ["🧾", "Invoice Transparency", "Vendor invoices, office invoices, and service invoices are organized and shared in a simple format."],
          ].map(([icon, title, text]) => (
            <div key={title} className="rounded-[2rem] border-2 border-[#0A1F44] bg-[#F8F4EA] p-6 shadow-[7px_7px_0_#0A1F44]">
              <div className="text-4xl">{icon}</div>
              <h3 className="mt-5 text-3xl font-black">
                <GradientTitle>{title}</GradientTitle>
              </h3>
              <p className="mt-4 font-medium leading-7 opacity-70">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2.5rem] border-2 border-[#0A1F44] bg-[#F8F4EA] p-8 shadow-[10px_10px_0_#0A1F44] md:p-12">
          <h2 className="text-4xl font-black md:text-6xl">
            <GradientTitle>What clients can expect</GradientTitle>
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Simple monthly reports",
              "Clear department-wise cost visibility",
              "Salary and role cost mapping",
              "Organized invoice records",
              "No surprise operational expenses",
              "Better control over offshore office spending",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-3xl bg-[#F8F4EA] p-5 font-black">
                <span>✅</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </PageShell>
  );
}

function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionLabel>About Partner Desk</SectionLabel>
            <h1 className="mt-4 text-5xl font-black leading-[0.95] md:text-8xl">
              <GradientTitle>We help companies build their ecosystem.</GradientTitle>
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 opacity-75 md:text-xl">
              We help global companies build complete operating ecosystems with the right people, right space, right management, and right cost structure.
            </p>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 opacity-75 md:text-xl">
              We have helped 10+ companies build their ecosystem in India, where companies can access strong talent and practical operational costs compared to expensive markets.
            </p>
          </div>
          <div className="rounded-[2.5rem] border-2 border-[#0A1F44] bg-[#F8F4EA] p-8 shadow-[12px_12px_0_#0A1F44]">
            <p className="text-7xl font-black tracking-[-0.07em]">10+</p>
            <p className="mt-3 text-3xl font-black">Companies supported in building offshore ecosystems.</p>
            <p className="mt-5 font-medium leading-7 opacity-70">From hiring to office setup, our focus is to create a practical, scalable, and transparent operating base.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            ["🌍", "Global Thinking", "Built for US and Canada companies that want serious operational expansion."],
            ["🧠", "Talent First", "We believe the right person in the right place can change the speed of a company."],
            ["🏗️", "Ecosystem Building", "We merge hiring, workspace, infrastructure, management, and money planning into one system."],
          ].map(([icon, title, text]) => (
            <div key={title} className="rounded-[2rem] border-2 border-[#0A1F44] bg-[#F8F4EA] p-6 shadow-[7px_7px_0_#0A1F44]">
              <div className="text-4xl">{icon}</div>
              <h3 className="mt-5 text-3xl font-black">
                <GradientTitle>{title}</GradientTitle>
              </h3>
              <p className="mt-4 font-medium leading-7 opacity-70">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <ContactSection />
    </PageShell>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-5 pb-16 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[3rem] border-2 border-[#0A1F44] bg-[#0A1F44] p-8 text-center text-[#F8F4EA] shadow-[12px_12px_0_#111111] md:p-16">
        <p className="font-black uppercase opacity-60">Ready to expand?</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black md:text-7xl text-[#F8F4EA]">Build your offshore office with confidence.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 opacity-75">
          Tell us your roles, team size, and business goals. We’ll help you plan the people, space, infrastructure, management, and budget.
        </p>
        <div className="mt-9 flex justify-center">
          <a href="mailto:hello@thepartnerdesk.com" className="inline-flex h-14 items-center justify-center rounded-full bg-[#F8F4EA] px-8 text-base font-black text-black transition hover:bg-[#F8F4EA]">
            Book a Discovery Call 
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const [activeService, setActiveService] = useState(0);

  const goToPage = (page: string) => {
    setActivePage(page);
    setOpen(false);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8F4EA] text-[#0A1F44]">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes softFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-up { animation: fadeUp 0.75s ease both; }
        .animate-soft-float { animation: softFloat 5s ease-in-out infinite; }
      `}</style>

      <div
        className="pointer-events-none fixed inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#0A1F44 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <header className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <button onClick={() => goToPage("Home")} className="flex items-center gap-3 text-left">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-[#0A1F44]">
            <img 
              src="/logo.png" 
              alt="logo" 
              className="h-full w-full object-contain p-1" 
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = '🤝';
                }
              }} 
            />
          </div>
          <div>
            <p className="text-xl font-black tracking-tight">Partner Desk</p>
            <p className="-mt-1 text-xs font-semibold uppercase opacity-60">Offshore Ops</p>
          </div>
        </button>

        <nav className="hidden items-center gap-3 text-sm font-bold md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => goToPage(item)}
              className={`rounded-full px-5 py-2 transition ${activePage === item ? "bg-[#0A1F44] text-[#F8F4EA]" : "hover:bg-[#F8F4EA]"}`}
            >
              {item}
            </button>
          ))}
          <a href="#contact" className="rounded-full border-2 border-[#0A1F44] px-5 py-2 transition hover:bg-[#0A1F44] hover:text-[#F8F4EA]">Start Setup</a>
        </nav>

        <button className="text-3xl md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? "×" : "☰"}
        </button>
      </header>

      {open && (
        <div className="relative z-40 mx-5 rounded-3xl border-2 border-[#0A1F44] bg-[#F8F4EA] p-5 shadow-[8px_8px_0_#0A1F44] md:hidden">
          {navItems.map((item) => (
            <button key={item} onClick={() => goToPage(item)} className="block w-full border-b border-[#0A1F44]/15 py-3 text-left font-bold">
              {item}
            </button>
          ))}
          <a href="#contact" className="block py-3 font-bold" onClick={() => setOpen(false)}>Start Setup</a>
        </div>
      )}

      {activePage === "Home" && <HomePage activeService={activeService} setActiveService={setActiveService} />}
      {activePage === "Models" && <ModelsPage />}
      {activePage === "Transparency" && <TransparencyPage />}
      {activePage === "About Us" && <AboutPage />}
    </div>
  );
}
