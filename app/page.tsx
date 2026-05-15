"use client"

import { useState } from "react"
import Image from "next/image"

export default function KatinaAccessPortal() {
  const [password, setPassword] = useState("")
  const [step, setStep] = useState(0)
  const [error, setError] = useState("")

  const handleUnlock = () => {
    if (password.toLowerCase() === "katina") {
      setStep(1)
      setError("")
    } else {
      setError("ACCESS DENIED")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,128,0.15),transparent_60%)]" />

      <div className="w-full max-w-5xl relative z-10">

        {step === 0 && (
          <div className="border border-pink-500 rounded-3xl bg-black/90 p-10 shadow-[0_0_60px_rgba(255,0,140,0.35)] text-center">

            <p className="text-lime-400 tracking-[0.3em] uppercase mb-4">
              Mission Authorization Required
            </p>

            <h1 className="text-4xl md:text-6xl font-black text-pink-500 mb-2 tracking-wide">
              BRIDESQUAD
            </h1>

            <h2 className="text-4xl md:text-6xl font-black text-lime-400 mb-8 leading-tight">
              MISSION DEBRIEFING
            </h2>

            <p className="text-xl text-pink-300 mb-8">
              Enter the password to unlock the invitation and access all the details for Katina’s Bachelorette Weekend ✨
            </p>

            <div className="max-w-xl mx-auto">
              <p className="text-white text-2xl mb-6">
                Who are we celebrating this bachelorette weekend?
              </p>

              <input
                type="text"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border border-pink-500 rounded-xl px-5 py-4 text-white text-lg mb-4"
              />

              <button
                onClick={handleUnlock}
                className="w-full bg-lime-400 text-black font-black uppercase py-4 rounded-xl hover:scale-[1.02] transition-all"
              >
                Unlock Invitation
              </button>

              {error && (
                <p className="text-red-500 mt-4 font-bold">
                  {error}
                </p>
              )}
            </div>
          </div>
        )}

        {step > 0 && (
          <div className="text-center">

            {step === 1 && (
              <Image
                src="/invite.png"
                alt="Invitation"
                width={1200}
                height={1600}
                unoptimized
                className="rounded-3xl border border-pink-500 shadow-[0_0_60px_rgba(255,0,140,0.35)] mx-auto"
              />
            )}

            {step === 2 && (
              <Image
                src="/itinerary.png"
                alt="Itinerary"
                width={1200}
                height={1600}
                unoptimized
                className="rounded-3xl border border-pink-500 shadow-[0_0_60px_rgba(255,0,140,0.35)] mx-auto"
              />
            )}

            {step === 3 && (
              <Image
                src="/budget.png"
                alt="Budget"
                width={1200}
                height={1600}
                unoptimized
                className="rounded-3xl border border-pink-500 shadow-[0_0_60px_rgba(255,0,140,0.35)] mx-auto"
              />
            )}

            {step === 4 && (
              <div className="border border-lime-400 rounded-3xl bg-black/90 p-12 text-center shadow-[0_0_80px_rgba(163,255,0,0.35)]">

                <p className="text-pink-400 uppercase tracking-[0.3em] mb-6">
                  System Status
                </p>

                <h1 className="text-5xl md:text-7xl font-black text-lime-400 mb-8">
                  BRIDE MODE
                  <br />
                  ACTIVATED
                </h1>

                <p className="text-2xl text-white mb-4">
                  Katina’s Bachelorette Weekend Successfully Loaded ✨
                </p>

                <p className="text-pink-400 text-xl mb-8">
                  Bride Squad Mission Successfully Activated
                </p>

                <p className="text-pink-400 text-4xl italic">
                  Let’s Celebrate Katina!
                </p>
              </div>
            )}

            <div className="flex justify-center gap-4 mt-8">

              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="bg-pink-500 text-white px-8 py-4 rounded-xl font-black uppercase hover:scale-[1.02] transition-all"
                >
                  ← Previous
                </button>
              )}

              {step < 4 && (
                <button
                  onClick={() => setStep(step + 1)}
                  className="bg-lime-400 text-black px-8 py-4 rounded-xl font-black uppercase hover:scale-[1.02] transition-all"
                >
                  {step === 1
                    ? "Accept"
                    : step === 3
                    ? "Activate Bride Mode"
                    : "Next →"}
                </button>
              )}

            </div>

            <p className="text-pink-400 mt-6 tracking-[0.2em] uppercase text-sm">
              Step {step} of 4
            </p>

          </div>
        )}

      </div>
    </div>
  )
}
