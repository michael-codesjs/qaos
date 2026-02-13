'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginValues) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: authError } = await authClient.signIn.email({
        email: values.email,
        password: values.password,
        callbackURL: process.env.NEXT_PUBLIC_APP_CLIENT_URL + '/dashboard',
      });

      if (authError) {
        if (authError.message?.toLowerCase().includes('verify') || authError.status === 403) {
          router.push(`/verify-email?email=${encodeURIComponent(values.email)}`);
          return;
        }
        setError(authError.message || 'Failed to login');
      } else {
        router.push((process.env.NEXT_PUBLIC_APP_CLIENT_URL || '') + '/dashboard');
      }
    } catch (err: any) {
      setError('An unexpected error occurred');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: process.env.NEXT_PUBLIC_APP_CLIENT_URL + '/dashboard',
      });
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome back</h1>
        <p className="text-secondary-text font-medium text-sm">
          Continue your journey from chaos to order.
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

        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center px-0.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-[11px] font-bold uppercase tracking-wider text-navigator hover:underline"
            >
              Forgot?
            </Link>
          </div>
          <Input
            type="password"
            placeholder="••••••••"
            {...register('password')}
            variant={errors.password ? 'error' : 'default'}
            helperText={errors.password?.message}
          />
        </div>

        <Button className="w-full mt-2" size="lg" type="submit" isLoading={loading}>
          Log In
        </Button>

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-100"></span>
          </div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest text-gray-300">
            <span className="bg-white px-2">or continue with</span>
          </div>
        </div>

        <Button
          variant="secondary"
          className="w-full"
          size="lg"
          type="button"
          onClick={handleGoogleLogin}
        >
          Google
        </Button>
      </form>

      <p className="text-center text-sm text-secondary-text font-medium">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-navigator font-bold hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
