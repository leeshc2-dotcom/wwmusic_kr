/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Globe } from "lucide-react";
import { navLinks, brandName } from "../data";
import { LogoIcon } from "./LogoIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      if (window.scrollY > 20) {
        isScrolled || setIsScrolled(true);
      } else {
        isScrolled && setIsScrolled(false);
      }

      // Sync active tab on scroll
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveTab(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    const headerElement = document.getElementById("site-header");
    const offset = headerElement ? headerElement.offsetHeight : 80;

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setActiveTab(id);
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="logo-link"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
            }}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300 overflow-hidden">
              <LogoIcon className="w-8 h-8" />
              <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-sans font-extrabold text-xl sm:text-[1.375rem] tracking-tight text-white leading-none sm:leading-normal">
                WorldWide
              </span>
              <span className="block font-mono text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-amber-500 font-bold mt-0.5 sm:mt-0 ml-0.5">
                MUSIC GROUP
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`nav-${link.id}`}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`px-4 py-2 text-[13px] font-semibold uppercase tracking-widest rounded-lg transition-all duration-200 ${
                  activeTab === link.id
                    ? "text-orange-300 bg-slate-800/80 border border-slate-700/80"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="relative group ml-2">
              <button className="flex items-center gap-1.5 px-3 py-2 text-[13px] font-bold tracking-wide text-emerald-400 hover:text-emerald-300 rounded-lg transition-all duration-200 focus:outline-none">
                <Globe className="w-4 h-4" />
                <span className="capitalize">KOREAN</span>
              </button>
              <div className="absolute top-full right-0 mt-1 w-32 bg-slate-900 rounded-xl border border-slate-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden flex flex-col z-50">
                <a
                  href="https://wwmusic-test.store/"
                  target="_self"
                  className="px-4 py-3 text-[15px] font-bold text-slate-300 hover:text-emerald-400 border-b border-slate-800 hover:bg-slate-800 transition-colors text-center"
                >
                  English
                </a>
                <a
                  href="https://kr.wwmusic-test.store/"
                  target="_self"
                  className="px-4 py-3 text-[15px] font-bold text-slate-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors text-center"
                >
                  Korean
                </a>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-all focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">메인 메뉴 열기</span>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 py-4 px-4 sm:px-6 transition-all duration-300 animate-in fade-in slide-in-from-top-5 shadow-2xl h-[calc(100vh-80px)] overflow-y-auto"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-${link.id}`}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`px-4 py-3 rounded-lg text-[13px] font-medium uppercase tracking-wider transition-all ${
                  activeTab === link.id
                    ? "text-orange-300 bg-slate-800 border border-slate-700"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-slate-800">
              <div className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-1">
                Language
              </div>
              <div className="flex flex-col gap-1">
                <a
                  href="https://wwmusic-test.store/"
                  target="_self"
                  className="px-4 py-3 rounded-lg text-sm font-medium tracking-wider text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all flex items-center justify-between"
                >
                  English
                  <Globe className="w-4 h-4 opacity-50" />
                </a>
                <a
                  href="https://kr.wwmusic-test.store/"
                  target="_self"
                  className="px-4 py-3 rounded-lg text-sm font-medium tracking-wider text-emerald-400 bg-slate-800/50 hover:text-emerald-300 transition-all flex items-center justify-between"
                >
                  Korean
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
