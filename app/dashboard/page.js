"use client"
import { useRouter } from "next/navigation"
import esimData from '../data/esimData.json'
import UsageBar from "../components/UsageBar"
import PlanCard from "../components/PlanCard"
import Header from "../components/Header"

export default function page() {
    const router = useRouter();
    
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
        <main className="p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={()=> router.push('/recharge')}
                    >Manage SIM</button>
                </div>
               <UsageBar usage={esimData.usage}/> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-700">Remaining Data</h3>
                            <div className="text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-signal "><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">{esimData.plan.remainingData}</div>
                        <p className="text-sm text-gray-500 mb-4">Available for use</p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">Total Data</span>
                                <span className="text-sm font-medium text-gray-900">{esimData.usage.totalData}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">Used Data</span>
                                <span className="text-sm font-medium text-gray-900">{esimData.usage.usedData}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">SMS Total</span>
                                <span className="text-sm font-medium text-gray-900">{esimData.usage.smsTotal}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">SMS Used</span>
                                <span className="text-sm font-medium text-gray-900">{esimData.usage.smsUsed}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">Voice Total</span>
                                <span className="text-sm font-medium text-gray-900">{esimData.usage.voiceTotal}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">Voice Used</span>
                                <span className="text-sm font-medium text-gray-900">{esimData.usage.voiceUsed}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">Valid From</span>
                                <span className="text-sm font-medium text-gray-900">{esimData.plan.validFrom}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">Valid Until</span>
                                <span className="text-sm font-medium text-gray-900">{esimData.plan.validUntil}</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-700">Current Session</h3>
                            <div className="text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity "><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">{esimData.currentSession.usageMB} MB</div>
                        <p className="text-sm text-gray-500 mb-4">Last updated: 12:56:35</p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">Session ID</span>
                                <span className="text-sm font-medium text-gray-900">{esimData.currentSession.sessionId}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">Started</span>
                                <span className="text-sm font-medium text-gray-900">{new Date(esimData.currentSession.started).toLocaleString()}</span>
                            </div><div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">Usage</span>
                                <span className="text-sm font-medium text-gray-900">256,000 KB</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
        </div>
    )
}

