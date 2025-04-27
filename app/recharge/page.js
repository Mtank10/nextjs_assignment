"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import esimData from '../data/esimData.json'
import PlanCard from "../components/PlanCard"
import Header from "../components/Header";
export default function page() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const router = useRouter();
   

    return (
        <div className="min-h-screen bg-gray-100">
            <Header/>
            <main className="p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <button className="flex items-center text-blue-500 hover:text-blue-600 mb-6"
                     onClick={()=> router.push('/dashboard')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left mr-2"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path>
                        </svg>
                       
                        Back to Dashboard
                    </button>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                        Manage SIM
                    </h1>
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Current Plan
                            </h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package text-blue-500"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path>
                            </svg>
                        </div>
                        
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-600">Plan Name</p>
                                    <p className="text-lg font-semibold">{esimData.plan.name}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Price</p>
                                    <p className="text-lg font-semibold">{esimData.plan.price}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Validity</p>
                                    <p className="text-lg font-semibold">{esimData.plan.validFrom} - {esimData.plan.validUntil}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Remaining Data</p>
                                    <p className="text-lg font-semibold">{esimData.plan.remainingData}</p>
                                </div>
                            </div>
                         
                    </div>
                    <div className="mb-2 p-4 md:p-8 bg-white rounded-xl shadow-lg max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Available Plans
            </h2>
            
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {esimData.availablePlans.map((plan, i) => (
                        <PlanCard
                            key={i}
                            plan={plan}
                            isSelected={selectedPlan?.name === plan.name}
                            onSelect={() => {
                                setSelectedPlan(plan)
                            }}
                            
                        />
                    ))} 
                    </div>
            
             </div>
                </div>
            </main>
            </div>

    )
}