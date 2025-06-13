import React from 'react';

const EditIcon = () => (
  <svg className="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6 3 3-6 6H9v-3z" />
  </svg>
);

type JobStatus = 'Completed' | 'In Progress' | 'Failed';

const jobs: { name: string; status: JobStatus }[] = [
  { name: 'AtomLabeling', status: 'Completed' },
  { name: 'AtomLabeling', status: 'In Progress' },
  { name: 'AtomLabeling', status: 'Failed' },
  { name: 'AtomLabeling', status: 'Completed' },
  { name: 'AtomLabeling', status: 'In Progress' },
  { name: 'AtomLabeling', status: 'Failed' },
];

const statusStyles: Record<JobStatus, string> = {
  'Completed': 'bg-green-50 text-green-700 border border-green-200',
  'In Progress': 'bg-yellow-50 text-yellow-700 border border-yellow-200',
  'Failed': 'bg-red-50 text-red-700 border border-red-200',
};

const Dashboard = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-extrabold mb-8 relative inline-block">
          <span className="relative z-10">Dashboard</span>
          <span className="absolute bottom-0.5 left-1 w-full h-2 bg-cyan-500 z-0"></span>
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Recent Jobs */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 transition-shadow hover:shadow-2xl">
              <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                <h2 className="text-xl font-bold">Recent Jobs</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr>
                      <th className="pb-3 px-2 w-1/2 text-gray-600">Job</th>
                      <th className="pb-3 px-2 w-1/2 text-right text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job, idx) => (
                      <tr key={idx} className="group transition hover:bg-gray-50">
                        <td className="px-2 py-4 border-b border-gray-100 text-blue-600 font-medium cursor-pointer hover:underline">
                          {job.name}
                        </td>
                        <td className="px-2 py-4 border-b border-gray-100 text-right">
                          <span className={`px-4 py-1 rounded-full text-xs font-semibold inline-block min-w-[100px] text-center ${statusStyles[job.status]}`}>
                            {job.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Links and Quick Contacts */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 transition-shadow hover:shadow-2xl">
              <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                <h2 className="text-xl font-bold">Quick Links</h2>
                <button className="flex items-center border border-blue-500 text-blue-600 font-semibold rounded-full px-4 py-1 text-sm transition-all hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  <EditIcon /> Edit
                </button>
              </div>
              <ul className="space-y-3">
                <li className="text-blue-600 font-medium cursor-pointer hover:underline">Link 1</li>
                <li className="text-blue-600 font-medium cursor-pointer hover:underline">Link 2</li>
                <li className="text-blue-600 font-medium cursor-pointer hover:underline">Link 3</li>
              </ul>
            </div>

            {/* Quick Contacts */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 transition-shadow hover:shadow-2xl">
              <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                <h2 className="text-xl font-bold">Quick Contacts</h2>
                <button className="flex items-center border border-blue-500 text-blue-600 font-semibold rounded-full px-4 py-1 text-sm transition-all hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  <EditIcon /> Edit
                </button>
              </div>
              <ul className="space-y-3">
                <li className="text-blue-600 font-medium cursor-pointer hover:underline">Contact 1</li>
                <li className="text-blue-600 font-medium cursor-pointer hover:underline">Contact 2</li>
                <li className="text-blue-600 font-medium cursor-pointer hover:underline">Contact 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
