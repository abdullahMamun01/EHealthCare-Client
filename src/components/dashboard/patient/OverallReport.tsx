export default function OverallReport() {
    return (
      <div className="bg-white p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Overall Report</h2>
      <div className="relative w-[100px] h-[100px] aspect-square mx-auto">
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <div className="text-xs text-gray-500">Last visit 25</div>
          <div className="text-xs text-gray-500">Mar 2024</div>
        </div>
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="90"
            className="stroke-current text-gray-200"
            strokeWidth="15"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r="90"
            className="stroke-current text-green-500"
            strokeWidth="15"
            fill="none"
            strokeDasharray={2 * Math.PI * 90}
            strokeDashoffset={2 * Math.PI * 90 * (1 - 0.95)}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-600">Your health is</p>
        <p className="text-sm font-semibold">95% Normal</p>
      </div>
      <button className="w-full mt-4 bg-[#1B2559] text-white py-2 rounded-lg hover:bg-blue-900">
        View Details
      </button>
    </div>
    
    )
  }
  
  