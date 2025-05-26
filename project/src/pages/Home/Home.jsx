import React from 'react';
import { UserButton, useUser, SignOutButton } from '@clerk/clerk-react';

const Home = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 bg-white p-6 rounded-lg shadow-sm">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to Coding Interview Platform
            </h1>
            {user && (
              <p className="text-gray-600 mt-2">
                Hello, {user.firstName || user.emailAddresses[0].emailAddress}!
              </p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <UserButton afterSignOutUrl="/auth" />
            <SignOutButton>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors">
                Logout
              </button>
            </SignOutButton>
          </div>
        </header>

        {/* Main Content */}
        <main className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to start coding?
            </h2>
            <p className="text-gray-600 mb-8">
              Welcome to your coding interview platform. Here you can practice coding problems,
              take mock interviews, and improve your programming skills.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Practice Problems</h3>
                <p className="text-gray-600 mb-4">Solve coding challenges to improve your skills</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                  Start Practicing
                </button>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Mock Interviews</h3>
                <p className="text-gray-600 mb-4">Practice with timed coding interviews</p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors">
                  Start Interview
                </button>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Progress</h3>
                <p className="text-gray-600 mb-4">Track your coding journey and achievements</p>
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors">
                  View Progress
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
