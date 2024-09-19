'use client'

import { LibraryBig, House, Search, Plus, ArrowRight, List, GalleryVerticalEnd, Shuffle, SkipBack, Play, SkipForward, Repeat, Bell, Users, LucideProps } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { FaSpotify } from "react-icons/fa";

export default function Home() {
  const searchInput = useRef<HTMLInputElement>(null);
  const searchInputIcon = useRef<SVGSVGElement>(null);

  return (
    <div className="h-screen grid p-2 gap-2" style={{ position: "relative", gridTemplateAreas: "'global-nav global-nav global-nav' 'left-sidebar main-view right-sidebar' 'now-playing-bar now-playing-bar now-playing-bar'", gridTemplateColumns: "auto 1fr", gridTemplateRows: "auto 1fr auto" }}>
      <div className="h-12 w-full" style={{ gridArea: "global-nav" }}>
        <div className="w-full flex flex-row justify-between">
          <div className="h-12 w-12">
            <FaSpotify className="text-lg" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="w-16 flex items-center justify-center">
              <button className="bg-[color:#1f1f1f] hover:p-3.5 text-white font-bold p-3 rounded-full mr-0.5"><House /></button>
            </div>
            <label htmlFor="email" className="relative block">
              <Search ref={searchInputIcon} className="w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-4 stroke-[color:#b3b3b3] hover:stroke-white" onClick={() => searchInput.current && searchInput.current.focus()} />
              <input
                ref={searchInput}
                className="w-[475px] bg-[color:#1f1f1f] appearance-none border-2 border-transparent p-3 pl-12 pr-16 rounded-full text-[color:#b3b3b3] leading-tight hover:border-[color:#3d3c3d] focus:outline-none focus:bg-[color:#2a2a2a] focus:border-[color:#fff]"
                type="text"
                placeholder="O que você quer ouvir?" />
              <div className="w-[1px] h-3/5 absolute top-1/2 transform -translate-y-1/2 right-14 bg-[color:#7b7b7b]"></div>
              <div className="w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-4 border-l-[color:#7c7c7c]">
                <button><GalleryVerticalEnd className="stroke-[color:#b3b3b3] hover:stroke-white" /></button>
              </div>
            </label>
          </div>
          <div className="flex items-center space-x-6">
            <button><Bell className="stroke-[color:#b3b3b3] hover:stroke-white w-5 h-5" /></button>
            <button><Users className="stroke-[color:#b3b3b3] hover:stroke-white w-5 h-5" /></button>
            <div className="w-fit h-fit">
              <Image width={64} height={64} src="https://avatars.githubusercontent.com/u/7221389?v=4" alt="avatar" className="w-12 h-12 rounded-full border-[color:#1f1f1f] border-[9px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full" style={{ position: "relative", gridArea: "left-sidebar" }}>
        <div className="w-96 h-full bg-[color:#121212] rounded p-4 mr-2" style={{ color: "#aeaeae", fontWeight: "bold" }}>
          <nav className="flex flex-row mb-4 ml-2">
            <a href="/" className="flex flex-row h-9 items-center"><LibraryBig className="mr-2" /> Sua Biblioteca</a>
            <div className="ml-auto w-20 flex flex-row items-center justify-around">
              <div className="w-9 h-9 flex items-center justify-center">
                <button className="hover:bg-[color:#1f1f1f] hover:p-2 font-bold hover:rounded-full"><Plus className="w-5 h-5" /></button>
              </div>
              <div className="w-9 h-9 flex items-center justify-center">
                <button className="hover:bg-[color:#1f1f1f] hover:p-2 font-bold hover:rounded-full"><ArrowRight className="w-5 h-5" /></button>
              </div>

            </div>
          </nav>
          <div className="w-9 h-9 flex flex-row mb-2">
            <button className="bg-[color:#1f1f1f] text-white font-bold py-1 px-4 h-7 rounded-full mr-2 text-xs">Playlists</button>
            <button className="bg-[color:#1f1f1f] text-white font-bold py-1 px-4 h-7 rounded-full mr-2 text-xs">Podcasts</button>
            <button className="bg-[color:#1f1f1f] text-white font-bold py-1 px-4 h-7 rounded-full mr-2 text-xs">Álbuns</button>
            <button className="bg-[color:#1f1f1f] text-white font-bold py-1 px-4 h-7 rounded-full text-xs">Artistas</button>
          </div>
          <div className="flex flex-row">
            <div className="w-9 h-9 flex items-center justify-center">
              <button className="hover:bg-[color:#1f1f1f] hover:p-2 font-bold hover:rounded-full"><Search className="w-5 h-5" /></button>
            </div>
            <div className="ml-auto mr-2" style={{ width: "6rem" }}>
              <a href="/" className="flex flex-row justify-end hover:text-white"><span className="mr-2 text-sm self-center">Recentes</span> <List /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 w-full" style={{ gridArea: "now-playing-bar" }}>
        <footer className="flex h-auto w-full">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="w-[30%] bg-red-50">1</div>
            <div className="w-[30%] items-center justify-center">
              <div className="flex flex-row items-center justify-center space-x-2 mb-2">
                <div><button><Shuffle className="stroke-[color:#b3b3b3] hover:stroke-white" /></button></div>
                <div><button><SkipBack className="stroke-[color:#b3b3b3] hover:stroke-white" /></button></div>
                <div><button className="bg-[color:#1f1f1f] p-2 rounded-full"><Play className="stroke-[color:#b3b3b3] hover:stroke-white" /></button></div>
                <div><button><SkipForward className="stroke-[color:#b3b3b3] hover:stroke-white" /></button></div>
                <div><button><Repeat className="stroke-[color:#b3b3b3] hover:stroke-white" /></button></div>
              </div>
              <div className="w-full flex flex-row items-center justify-center">
                <div className="text-xs text-[color:#b3b3b3]">3:01</div>
                <div className="ml-2 mr-2 w-full h-1 bg-[color:#1f1f1f] rounded-sm">
                  <div className="w-[88%] h-1 bg-white rounded-sm"></div>
                </div>
                <div className="text-xs text-[color:#b3b3b3]">3:25</div>
              </div>
            </div>
            <div className="w-[30%] bg-red-50">3</div>
          </div>
        </footer>
      </div>
      <div className="h-full w-full" style={{ position: "relative", gridArea: "main-view" }}>
        <div className="w-full h-full bg-[color:#121212] rounded p-4 mr-2" style={{ color: "#aeaeae", fontWeight: "bold" }}></div>
      </div>
      <div className="h-full w-full" style={{ position: "relative", gridArea: "right-sidebar" }}>
        <div className="w-96 h-full bg-[color:#121212] rounded p-4 mr-2" style={{ color: "#aeaeae", fontWeight: "bold" }}></div>
      </div>
    </div>

  );
}
