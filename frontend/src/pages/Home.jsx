import React from "react";
import { PenLine, ScrollText, ArrowUpRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Syne:wght@500;600;700&display=swap"
      />

      <div className="w-full max-w-md">
        {/* Eyebrow mark */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-8 bg-[#D4A24C]/40" />


          <span className="h-px w-8 bg-[#D4A24C]/40" />
        </div>

        {/* Panel */}
        <div className="bg-[#161F38] border border-white/[0.06] rounded-2xl px-8 py-10 sm:px-10 sm:py-12 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
          <h1
            className="text-4xl sm:text-5xl text-[#F5F1E8] mb-3 italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Welcome back
          </h1>

          <p className="text-sm text-[#8890A6] mb-10 leading-relaxed">
            Pick up where you left off, or start something new.
          </p>

          {/* Entries */}
          <div className="flex flex-col">
            {/* Create Post */}
            <a
              href="/Createpost"
              className="group flex items-center justify-between py-5 border-t border-white/[0.08] transition-colors"
            >
              <span className="flex items-center gap-4">
                <PenLine
                  className="w-[18px] h-[18px] text-[#D4A24C]"
                  strokeWidth={1.5}
                />

                <span className="text-left">
                  <span
                    className="block text-lg text-[#F5F1E8] group-hover:text-[#D4A24C] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Create a post
                  </span>

                  <span
                    className="block text-[11px] tracking-wider uppercase text-[#8890A6] mt-0.5"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Start writing
                  </span>
                </span>
              </span>

              <ArrowUpRight
                className="w-4 h-4 text-[#8890A6] group-hover:text-[#D4A24C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                strokeWidth={1.5}
              />
            </a>

            {/* Feed */}
            <a
              href="/Feed"
              className="group flex items-center justify-between py-5 border-t border-b border-white/[0.08] transition-colors"
            >
              <span className="flex items-center gap-4">
                <ScrollText
                  className="w-[18px] h-[18px] text-[#C97B63]"
                  strokeWidth={1.5}
                />

                <span className="text-left">
                  <span
                    className="block text-lg text-[#F5F1E8] group-hover:text-[#C97B63] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    View the feed
                  </span>

                  <span
                    className="block text-[11px] tracking-wider uppercase text-[#8890A6] mt-0.5"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Catch up
                  </span>
                </span>
              </span>

              <ArrowUpRight
                className="w-4 h-4 text-[#8890A6] group-hover:text-[#C97B63] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;