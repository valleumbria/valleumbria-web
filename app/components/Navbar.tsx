"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <a href="/" className="flex items-center gap-4">

          <Image
            src="/logo.jpeg"
            alt="Valle Umbría"
            width={90}
            height={90}
            className="rounded-xl object-contain"
            priority
          />

          <div>
            <h1 className="text-2xl font-bold text-stone-900 leading-none">
              Valle Umbría
            </h1>

            <p className="text-sm text-stone-500 mt-1">
              Café de Especialidad Colombiano
            </p>
          </div>

        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          <a
            href="/"
            className="hover:text-amber-700 transition"
          >
            Inicio
          </a>

          <a
            href="#productos"
            className="hover:text-amber-700 transition"
          >
            Cafés
          </a>

          <a
            href="#historia"
            className="hover:text-amber-700 transition"
          >
            Nuestra Historia
          </a>

          <a
            href="#contacto"
            className="hover:text-amber-700 transition"
          >
            Contacto
          </a>

          <a
            href="https://instagram.com/valleumbriacafe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 font-semibold hover:underline"
          >
            Instagram
          </a>

        </nav>

      </div>
    </header>
  );
}