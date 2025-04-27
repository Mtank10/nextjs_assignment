export default function UsageBar({usage}){
    const dataUsed = parseFloat(usage.usedData);
    const dataTotal = parseFloat(usage.totalData);
    const percentage = (dataUsed/dataTotal) * 100;

    return (
        <div className="bg-white shadow-lg p-6 mb-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Data Usage</h2>
                            <p className="text-sm text-gray-600 mt-1">Tailand & Days 3GB plan</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-signal text-blue-500"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
                    </div>
                    <div className="w-full">
                        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 transition-all duration-500 ease-in-out"
                                style={{width:`40%`}}>

                                </div>
                        </div>
                        <div className="mt-2 flex justify-between text-sm text-gray-600">
                            <span>
                                {usage.usedData} 
                            </span>
                            <span>
                                {usage.totalData} 
                            </span>
                        </div>
                    </div>
                </div>
    )
}