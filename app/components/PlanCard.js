"use client"
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function PlanCard({ plan, onSelect, isSelected }) {
    const [loading, setLoading] = useState(false);

    const handlePayment = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success('Recharge successful!');
        }, 2000);
    };

    return (
        <div
            className={`border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors
                ${isSelected ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-500 border-gray-200'}
            `}
            onClick={onSelect}
        >
            <h3 className="text-lg font-semibold mb-2">
                {plan.name}
            </h3>
            <p className="text-2xl font-bold text-blue-500 mb-4">
                {plan.price}
            </p>
            <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                    {plan.data}
                </li>
                <li className="flex items-center text-gray-600">
                     {plan.validity}
                </li>
                <li className="flex items-center text-gray-600">
                     {plan.speed}
                </li>
                {plan.support &&
                    <li className="flex items-center text-gray-600">
                         {plan.support}
                    </li>
                }
                {plan.roaming &&
                    <li className="flex items-center text-gray-600">
                         Global Roaming
                    </li>
                }
            </ul>

            <div className="m-4">
                <button
                    onClick={handlePayment}
                    disabled={loading}
                    className={`bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors ${
                        loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
                    }`}
                >
                    {loading ? 'Processing...' : 'Select Plan'}
                </button>
            </div>
        </div>
    );
}
