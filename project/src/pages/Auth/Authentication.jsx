import { SignIn, SignUp, SignedIn, SignedOut } from '@clerk/clerk-react';
import { useSearchParams } from 'react-router-dom';

const Authentication = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'sign-in';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <SignedOut>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Coding Interview Platform
            </h2>
            <p className="text-gray-600">
              {mode === 'sign-up' ? 'Create your account to get started' : 'Sign in to your account'}
            </p>
          </div>

          <div className="flex justify-center">
            {mode === 'sign-up' ? (
              <SignUp
                forceRedirectUrl="/"
                signInUrl="/auth?mode=sign-in"
                appearance={{
                  elements: {
                    formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
                    card: 'shadow-lg rounded-lg bg-white',
                  }
                }}
              />
            ) : (
              <SignIn
                forceRedirectUrl="/"
                signUpUrl="/auth?mode=sign-up"
                appearance={{
                  elements: {
                    formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
                    card: 'shadow-lg rounded-lg bg-white',
                  }
                }}
              />
            )}
          </div>
        </SignedOut>

        <SignedIn>
          {/* This will redirect to home via App.jsx routing */}
          <div className="text-center">
            <p className="text-gray-600">Redirecting to dashboard...</p>
          </div>
        </SignedIn>
      </div>
    </div>
  );
};

export default Authentication;
