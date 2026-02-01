"use client";

import React, { useState } from "react";
import Image from "next/image";


export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-black text-white">
      {/* Background SVG */}
      <svg
        className="size-full absolute -z-10 inset-0"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path stroke="#1D293D" strokeOpacity=".7" d="M-15.227 702.342H1439.7" />
        <circle cx="711.819" cy="372.562" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
        <circle cx="16.942" cy="20.834" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
        <path stroke="#1D293D" strokeOpacity=".7" d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7" />
        <circle cx="782.595" cy="411.166" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
      </svg>

      {/* Navbar */}
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-white text-sm">
        <a href="https://mitrevdarko.dev" target="_blank" rel="noopener noreferrer" aria-label="MitrevDesign">
           <Image
            src="/MitrevDesign-Logo.png"
            alt="Client Hub logo"
            width={60}
            height={40}
            priority
        />
        </a>

        <div className="hidden md:flex items-center gap-8 transition duration-500">
          
        </div>

      <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-600 bg-white/5 px-4 py-2 text-xs text-white">
    <span className="h-2 w-2 rounded-full bg-green-400" />
            Достапен за нови проекти
      </div>

        <button onClick={() => setOpen(true)} className="md:hidden active:scale-90 transition" aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 text-white backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <a href="/" onClick={() => setOpen(false)}>Home</a>
        <a href="/products" onClick={() => setOpen(false)}>Products</a>
        <a href="/stories" onClick={() => setOpen(false)}>Stories</a>
        <a href="/pricing" onClick={() => setOpen(false)}>Pricing</a>

        <button
          onClick={() => setOpen(false)}
          className="aspect-square size-10 p-1 bg-white hover:bg-slate-200 text-black rounded-md flex items-center justify-center"
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      {/* Hero */}
      <section className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-slate-600 text-white text-xs">
            <div className="flex items-center">
              <img
                className="size-7 rounded-full border-[3px] border-white -translate-x-2"
                src="/Mike-team.jpg"
                alt="userImage2"
              />
              <img
                className="size-7 rounded-full border-[3px] border-white -translate-x-4"
                src="/Darko-team.webp"
                alt="userImage3"
              />
            </div>
            <p className="-translate-x-2">Работа со клиенти од Македонија и Европа</p>
          </div>

         <h1 className="text-center md:text-left text-5xl leading-[68px] md:text-6xl md:leading-[80px] font-medium max-w-xl text-slate-50 mt-6">
            Еве како може да изгледа вашиот веб систем <br className="hidden md:block" />
        </h1>

          <p className="text-center md:text-left text-sm text-slate-200 max-w-lg mt-3">
           Ова е демо пример како може да изгледа и функционира
        вашата веб страна или систем.
        </p>

          <div className="flex items-center gap-4 mt-8 text-sm">
           <a href="https://fuji-dent.mitrevdarko.dev/" target="_blank" rel="noopener noreferrer"  className="bg-white gap-2 hover:bg-slate-200 inline-flex  items-center justify-center text-black active:scale-95 rounded-md px-7 h-11">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                <rect x="2" y="6" width="14" height="12" rx="2" />
              </svg> 
            Отвори демо верзија
        </a>

            <a href="https://mitrevdarko.dev" target="_blank" rel="noopener noreferrer" className="flex items-center  flex-inline justify-center items-center  gap-2 border border-slate-600 active:scale-95 hover:bg-white/10 transition text-white rounded-md px-6 h-11">
              <span>Нашата веб страна</span>
            </a>
          </div>
        </div>

      <div className="relative mx-auto w-full max-w-xl">
  <img
    src="/Fuji-Dent-Laptop.png"
    alt="Laptop mockup"
    className="relative z-10 w-full"
  />

  <img
    src="/Fuji-Dent-Tablet-2.png"
    alt="Tablet mockup"
      className="
    absolute
    top-[25%]
    left-[calc(0%-20px)]
    z-0
    w-[60%]
    -rotate-0

    md:top-[18%]
    md:left-auto
    md:right-[-8%]
    md:z-0
    md:w-[62%]
    md:rotate-0
  "
  />

  <img
    src="/Fuji-Dent-Phone.png"
    alt="Phone mockup"
   className="
    absolute
    bottom-[4.9%]
    left-[calc(40%+75px)]
    z-40
    w-[18%]
    rotate-0

    md:bottom-[6%]
    md:left-auto
    md:right-[-2%]
    md:z-20
    md:rotate-0
  "
  />
</div>


      </section>
    </div>
  );
}

// Put this under your hero section (still inside the main wrapper)
type Module = {
  title: string;
  desc: string;
  img: string;
  href?: string;
};

const modules: Module[] = [
  {
    title: "Закажување на термини",
    desc: "Едноставно онлајн закажување со автоматски календар и преглед на термини",
    img: "/Appointment-page.png",
    href: "/dashboard",
  },
  {
    title: "За Fuji-Dent",
    desc: "Локална стоматолошка ординација од Кавадарци.",
    img: "/About-page.png",
    href: "/patients",
  },
  {
    title: "Стоматолошки услуги за пациенти",
    desc: "Нудиме современи стоматолошки услуги со индивидуален пристап",
    img: "/Services-page.png",
  },
  {
    title: "Одговори на најчестите прашања",
    desc: "Корисни информации пред вашиот закажан термин",
    img: "/FAQ-page.png",
  },
  {
    title: "Луѓето зад Fuji-Dent",
    desc: "Тим од стручни лица со долгогодишно искуство во стоматологијата",
    img: "/Our-team.png",
  },
];


function VisualModuleCard({ title, desc, img, href }: Module) {
  return (
      <a
  href="#"
  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
  role="button"
  className="group relative block overflow-hidden rounded-3xl border border-slate-800 bg-black cursor-pointer"
>

   
      {/* IMAGE */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      </div>

      {/* TEXT (minimal) */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <p className="mt-1 text-sm text-slate-200 max-w-[90%]">
          {desc}
        </p>
      </div>

      {/* Hover border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/30 transition" />
    </a>
  );
}

export function SystemPreviewGrid() {
  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-32 pb-28">
      <div className="mb-12 max-w-2xl">
        <p className="text-xs uppercase tracking-wider text-slate-400">
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-medium text-white">
          Повеќе од веб страна — цел систем
        </h2>
        <p className="mt-3 text-sm text-slate-300">
          Неколку главни екрани за да се добие реална слика за обемот на проектот.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {modules.map((m) => (
          <VisualModuleCard key={m.title} {...m} />
        ))}
      </div>
    </section>
  );
}





 {/*className="absolute right-[-8%] top-[18%] z-0 w-[62%]" Tablet
   className="absolute right-[-2%] bottom-[6%] z-20 w-[18%]" Phone*/}