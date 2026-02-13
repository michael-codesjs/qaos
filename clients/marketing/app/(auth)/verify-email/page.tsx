'use client';

import { Button } from '@/components/ui/button';
import { PinInput } from '@/components/ui/pin-input';
import { authClient } from '@/lib/auth-client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';

function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [otp, setOtp] = useState('');

  // Auto-submit when OTP is full
  useEffect(() => {
    if (otp.length === 6) {
      handleVerify(otp);
    }
  }, [otp]);

  const handleVerify = async (code: string) => {
    setError('');
    setLoading(true);

    try {
      const { data, error: authError } = await authClient.emailOtp.verifyEmail({
        email,
        otp: code,
      });

      if (authError) {
        setError(authError.message || 'Failed to verify email');
        setOtp(''); // Reset on error
      } else {
        // Redirect to external app
        const appUrl = process.env.NEXT_PUBLIC_APP_CLIENT_URL + '/dashboard' || '/';
        window.location.href = appUrl;
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      await authClient.emailOtp.sendVerificationOtp({
        email,
        type: 'email-verification',
      });
      // Optionally show a toast or success message
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Verify your email</h1>
        <p className="text-secondary-text font-medium text-sm">
          We've sent a 6-digit code to <span className="text-foreground font-bold">{email}</span>.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400 text-center">
            Verification Code
          </label>
          <PinInput value={otp} onChange={setOtp} error={!!error} disabled={loading} />
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-xs font-semibold text-red-500 text-center">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-4">
          <Button
            className="w-full"
            size="lg"
            onClick={() => handleVerify(otp)}
            isLoading={loading}
            disabled={otp.length !== 6}
          >
            Verify Email
          </Button>

          <p className="text-center text-sm text-secondary-text font-medium">
            Didn't receive the code?{' '}
            <button onClick={handleResend} className="text-navigator font-bold hover:underline">
              Resend code
            </button>
          </p>
        </div>
      </div>

      <p className="text-center text-sm text-secondary-text font-medium">
        Wrong email address?{' '}
        <Link href="/signup" className="text-foreground font-bold hover:underline">
          Go back
        </Link>
      </p>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center p-12">
          <div className="w-8 h-8 border-4 border-navigator/20 border-t-navigator rounded-full animate-spin" />
        </div>
      }
    >
      <VerifyEmailContent />
    </Suspense>
  );
}
