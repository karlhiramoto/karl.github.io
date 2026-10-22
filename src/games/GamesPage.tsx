/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Gamepad2,
  Play,
  Github,
  ExternalLink,
  ArrowLeft,
  Maximize2,
  X,
  Compass,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Cpu,
  Monitor,
  Smartphone,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { GAMES, Game } from "./data";

export default function GamesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedGameId, setExpandedGameId] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{
    srcPng: string;
    srcWebp: string;
    title: string;
    playUrl: string;
  } | null>(null);
  const [activeControlTab, setActiveControlTab] = useState<Record<string, number>>({
    "harbor-master": 0,
    mahjong: 0,
    botica: 0,
  });

  const filteredGames =
    selectedCategory === "all"
      ? GAMES
      : GAMES.filter((g) => g.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedGameId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a
            href="/"
            className="group flex items-center gap-3 text-zinc-300 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-orange-600/20">
              K
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
                KARL HIRAMOTO
              </span>
              <span className="text-xs text-zinc-500 flex items-center gap-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                Back to Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Nav Actions */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
              <Gamepad2 className="w-3.5 h-3.5 text-orange-500" />
              <span>3 Playable Games</span>
            </div>
            <a
              href="https://github.com/karlhiramoto"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white rounded-full transition-all flex items-center gap-2 text-xs sm:text-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <div className="relative mb-16 pb-12 border-b border-zinc-800/80">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Zero-Backend Web Games
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Games &amp; Interactive Simulators
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed mb-8">
            A showcase of custom browser games and simulations developed in{" "}
            <span className="text-zinc-200 font-semibold">TypeScript</span> and{" "}
            <span className="text-zinc-200 font-semibold">HTML5 Canvas</span>.
            Engineered with WebAssembly physics, procedural vector rendering, and
            procedural Web Audio soundscapes—playable instantly on desktop and mobile.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-500">
                3
              </div>
              <div className="text-xs text-zinc-400 font-medium mt-1">
                Original Games
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                100%
              </div>
              <div className="text-xs text-zinc-400 font-medium mt-1">
                Client-Side / Static
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">
                120 Hz
              </div>
              <div className="text-xs text-zinc-400 font-medium mt-1">
                WASM Physics Engine
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                Touch
              </div>
              <div className="text-xs text-zinc-400 font-medium mt-1">
                Mobile &amp; Desktop Ready
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mr-2">
            Filter:
          </span>
          {[
            { id: "all", label: "All Games", count: GAMES.length },
            {
              id: "simulation",
              label: "Hydrodynamics & Marine",
              count: GAMES.filter((g) => g.category === "simulation").length,
            },
            {
              id: "puzzle",
              label: "3D Solitaire & Puzzles",
              count: GAMES.filter((g) => g.category === "puzzle").length,
            },
            {
              id: "arcade",
              label: "Pharmacy & Time Management",
              count: GAMES.filter((g) => g.category === "arcade").length,
            },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-600/25"
                  : "bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  selectedCategory === cat.id
                    ? "bg-white/20 text-white"
                    : "bg-zinc-800 text-zinc-400"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Game Showcase Cards List */}
        <div className="space-y-16">
          {filteredGames.map((game) => {
            const isExpanded = expandedGameId === game.id;
            const activeTab = activeControlTab[game.id] || 0;

            return (
              <article
                key={game.id}
                id={game.id}
                className="relative bg-zinc-900/60 rounded-3xl border border-zinc-800 hover:border-zinc-700 transition-all overflow-hidden backdrop-blur-sm shadow-xl"
              >
                {/* Background glow accent */}
                <div
                  className={`absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br ${game.accentColor} rounded-full blur-3xl pointer-events-none opacity-30`}
                />

                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Top Badge & Live Status */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full border ${game.badgeColor}`}
                      >
                        {game.badge}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono">
                        {game.releaseYear}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Live on GitHub Pages
                      </span>
                    </div>
                  </div>

                  {/* Main Grid: Screenshot on Left, Content on Right */}
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    {/* Screenshot Showcase (col 1-5 / 12) */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                      <div className="group relative rounded-2xl overflow-hidden border border-zinc-700/80 bg-zinc-950 shadow-2xl aspect-[16/10]">
                        <picture>
                          <source srcSet={game.imageWebp} type="image/webp" />
                          <img
                            src={game.imagePng}
                            alt={`${game.title} gameplay screenshot`}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        </picture>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                          <div className="flex items-center gap-3">
                            <a
                              href={game.playUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 py-2.5 px-4 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-orange-600/30"
                            >
                              <Play className="w-4 h-4 fill-white" />
                              Launch Game
                            </a>
                            <button
                              onClick={() =>
                                setLightboxImage({
                                  srcPng: game.imagePng,
                                  srcWebp: game.imageWebp,
                                  title: game.title,
                                  playUrl: game.playUrl,
                                })
                              }
                              className="p-2.5 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 rounded-xl transition-colors border border-zinc-700/60"
                              title="Enlarge Screenshot"
                            >
                              <Maximize2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Stat Counters under screenshot */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {game.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-2.5 text-center"
                          >
                            <div className="text-sm sm:text-base font-extrabold text-white">
                              {stat.value}
                            </div>
                            <div className="text-[10px] text-zinc-400 font-medium">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Game Details & Explanation (col 6-12 / 12) */}
                    <div className="lg:col-span-7 flex flex-col">
                      <div className="mb-4">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                          <span>{game.title}</span>
                        </h2>
                        <div className="text-sm font-semibold text-orange-400 mt-1">
                          {game.subtitle}
                        </div>
                        <p className="text-zinc-300 text-sm sm:text-base mt-2 font-medium italic">
                          "{game.tagline}"
                        </p>
                      </div>

                      <p className="text-zinc-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {game.summary}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="mb-6">
                        <div className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2.5 flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-orange-500" />
                          Tech Stack &amp; Architecture
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {game.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-200 text-xs font-mono border border-zinc-700/60 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <a
                          href={game.playUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm rounded-xl transition-all flex items-center gap-2.5 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:-translate-y-0.5"
                        >
                          <Play className="w-4 h-4 fill-white" />
                          <span>Play Online</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                        </a>

                        <a
                          href={game.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 hover:text-white font-semibold text-sm rounded-xl transition-all flex items-center gap-2 border border-zinc-700"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>

                        <button
                          onClick={() => toggleExpand(game.id)}
                          className="px-4 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-semibold text-sm rounded-xl transition-all flex items-center gap-2 border border-zinc-800 ml-auto"
                        >
                          <span>{isExpanded ? "Hide Details" : "Game Guide & Controls"}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-orange-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-zinc-400" />
                          )}
                        </button>
                      </div>

                      {/* Expandable Deep Dive Section */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden border-t border-zinc-800/80 pt-6 mt-2"
                          >
                            {/* Full Description Paragraphs */}
                            <div className="space-y-3 mb-6">
                              {game.fullDescription.map((p, pIdx) => (
                                <p
                                  key={pIdx}
                                  className="text-zinc-300 text-sm leading-relaxed"
                                >
                                  {p}
                                </p>
                              ))}
                            </div>

                            {/* Key Features List */}
                            <div className="mb-6">
                              <h3 className="text-sm uppercase tracking-wider font-bold text-zinc-200 mb-3 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-orange-400" />
                                Key Gameplay &amp; Physics Features
                              </h3>
                              <div className="grid sm:grid-cols-2 gap-3">
                                {game.keyFeatures.map((feat) => (
                                  <div
                                    key={feat.title}
                                    className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800"
                                  >
                                    <div className="font-semibold text-xs text-white flex items-start gap-2">
                                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                      <span>{feat.title}</span>
                                    </div>
                                    <div className="text-xs text-zinc-300 mt-1 pl-6 leading-relaxed">
                                      {feat.description}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Controls Breakdown */}
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <h3 className="text-sm uppercase tracking-wider font-bold text-zinc-200 flex items-center gap-2">
                                  <Compass className="w-4 h-4 text-orange-400" />
                                  Controls &amp; Input Guide
                                </h3>
                                {/* Controls Tab Switcher */}
                                <div className="flex rounded-lg bg-zinc-950 p-1 border border-zinc-800">
                                  {game.controls.map((ctrl, ctrlIdx) => (
                                    <button
                                      key={ctrl.device}
                                      onClick={() =>
                                        setActiveControlTab((prev) => ({
                                          ...prev,
                                          [game.id]: ctrlIdx,
                                        }))
                                      }
                                      className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors flex items-center gap-1.5 ${
                                        activeTab === ctrlIdx
                                          ? "bg-zinc-800 text-white"
                                          : "text-zinc-400 hover:text-zinc-300"
                                      }`}
                                    >
                                      {ctrlIdx === 0 ? (
                                        <Monitor className="w-3 h-3" />
                                      ) : (
                                        <Smartphone className="w-3 h-3" />
                                      )}
                                      <span className="hidden sm:inline">
                                        {ctrlIdx === 0 ? "Desktop" : "Mobile"}
                                      </span>
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-4">
                                <ul className="space-y-1.5">
                                  {game.controls[activeTab]?.items.map(
                                    (item, itemIdx) => (
                                      <li
                                        key={itemIdx}
                                        className="text-xs text-zinc-300 font-mono flex items-center gap-2"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                        <span>{item}</span>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      {/* Screenshot Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 px-6 border-b border-zinc-800">
                <span className="font-bold text-white text-base">
                  {lightboxImage.title} — High-Res Screenshot
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={lightboxImage.playUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    Play Now
                  </a>
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-2 bg-black flex items-center justify-center">
                <picture>
                  <source
                    srcSet={lightboxImage.srcWebp}
                    type="image/webp"
                  />
                  <img
                    src={lightboxImage.srcPng}
                    alt={lightboxImage.title}
                    className="max-h-[75vh] w-auto object-contain rounded-xl"
                  />
                </picture>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 py-12 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center font-bold text-white text-xs">
              K
            </div>
            <span>© {new Date().getFullYear()} Karl Hiramoto. Built with React, TypeScript &amp; Tailwind CSS.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/"
              className="hover:text-orange-400 transition-colors"
            >
              Portfolio Home
            </a>
            <a
              href="https://github.com/karlhiramoto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
