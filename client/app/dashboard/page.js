'use client'
import TabContainer from "@/components/forms/Tabform";
import LoginForm from "@/components/forms/Textbox";
import PresaleStepsTimeline from "@/components/PresaleTimeline";
import ERC20abi from "@/lib/abi/Ecr20ABI";
import { useWalletStore } from "@/store/walletStore";
import { ethers } from "ethers";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import GlowingH1 from "./Glowtext";

const PreSale = () => {
  const {callReadOnlyFunction} = useWalletStore()
  const [presaleBalance, setpresaleBalance] = useState(0)

  useEffect(() => {

const fetchBalance= async  ()=>{
  const balance = await callReadOnlyFunction(ERC20abi, process.env.NEXT_PUBLIC_ERC20_CONTRACT_ADDRESS, 'balanceOf', process.env.NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS)
  setpresaleBalance(ethers.formatUnits(balance, 18))
}

fetchBalance()
console.log({presaleBalance})
  },[])

  return (
    <div>
      <section className="lg:flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 py-24 min-h-screen relative overflow-hidden">
        {/* Heading */}
        <div className="text-center text-white px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6 relative z-0">
            {/* Heading */}
            <h2 className="text-5xl font-bold text-white">RBO - Be an early bird</h2>
            {/* <GlowingH1 /> */}

            {/* Subheading */}
            <p className="text-xl text-gray-200">
              Rabbito is a blockchain platform designed for changemakers,
              innovators, and visionaries, offering the tools and technologies
              needed to unlock opportunities for the many, not just the few, and
              drive positive global transformation.
            </p>

            {/* Token Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md">
                <h3 className="text-2xl font-semibold text-yellow-400">
                  {presaleBalance}
                </h3>
                <p className="text-gray-200">Presale Balance</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md">
                <h3 className="text-2xl font-semibold text-yellow-400">0.50</h3>
                <p className="text-gray-200">Listing price</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md">
                <h3 className="text-2xl font-semibold text-yellow-400">
                  $0.01
                </h3>
                <p className="text-gray-200">Presale Price</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md">
                <h3 className="text-2xl font-semibold text-yellow-400">
                  30M+
                </h3>
                <p className="text-gray-200">presale target</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md">
                <h3 className="text-2xl font-semibold text-yellow-400">40M+</h3>
                <p className="text-gray-200">Total sold</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md">
                <h3 className="text-2xl font-semibold text-yellow-400">
                  $5
                </h3>
                <p className="text-gray-200">Minimum buy</p>
              </div>
            </div>
            <PresaleStepsTimeline />
            {/* Call-to-Action Button */}
            {/* <div className="space-x-4 ">
              <button  className="bg-yellow-400 text-black py-3 px-8 rounded-xl text-lg font-medium shadow-md hover:bg-yellow-500 transition-colors mt-8">
                Airdrop
              </button>
              <button className="hidden md:inline border-[2px] border-yellow-400 text-white font-bold py-2 px-8 rounded-xl text-lg shadow-md hover:bg-yellow-500 transition-colors mt-8">
                Connect Wallet
              </button>
            </div> */}
          </div>
        </div>

        <div className="lg:w-1/4">
        <TabContainer/>
        </div>
      </section>
    </div>
  );
};

export default PreSale;
