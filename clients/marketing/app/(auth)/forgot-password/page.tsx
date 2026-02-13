'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
});

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (values: ForgotPasswordValues) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: authError } = await (authClient as any).forgetPassword({
        email: values.email,
        redirectTo: '/reset-password',
      });

      if (authError) {
        setError(authError.message || 'Failed to send reset link');
      } else {
        setSubmittedEmail(values.email);
        setSuccess(true);
      }
    } catch (err: any) {
      setError('An unexpected error occurred');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Check your inbox</h1>
          <p className="text-secondary-text font-medium text-sm">
            We've sent a password reset link to{' '}
            <span className="text-foreground font-bold">{submittedEmail}</span>.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-4 text-center">
          <p className="text-sm text-gray-500 italic pb-2">
            "Chaos is a ladder." — But we prefer order.
          </p>
          <Link href="/login">
            <Button variant="secondary" className="w-full">
              Back to Login
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Forgot password?</h1>
        <p className="text-secondary-text font-medium text-sm">
          No problem. Enter your email and we'll send you a link to reset it.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-4"
      >
        {error && (
          <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-xs font-semibold text-red-500">
            {error}
          </div>
        )}

        <Input
          label="Email Address"
          type="email"
          placeholder="name@company.com"
          {...register('email')}
          variant={errors.email ? 'error' : 'default'}
          helperText={errors.email?.message}
        />

        <Button className="w-full mt-2" size="lg" type="submit" isLoading={loading}>
          Send Reset Link
        </Button>
      </form>

      <p className="text-center text-sm text-secondary-text font-medium">
        Remembered your password?{' '}
        <Link href="/login" className="text-navigator font-bold hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
