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

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type SignupValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (values: SignupValues) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: authError } = await authClient.signUp.email({
        email: values.email,
        password: values.password,
        name: values.name,
        callbackURL: '/login',
      });

      if (authError) {
        setError(authError.message || 'Failed to sign up');
      } else {
        router.push(`/verify-email?email=${encodeURIComponent(values.email)}`);
      }
    } catch (err: any) {
      setError('An unexpected error occurred');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Create account</h1>
        <p className="text-secondary-text font-medium text-sm">
          Start building intent-based tests today.
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
          label="Full Name"
          placeholder="John Doe"
          {...register('name')}
          variant={errors.name ? 'error' : 'default'}
          helperText={errors.name?.message}
        />

        <Input
          label="Work Email"
          type="email"
          placeholder="name@company.com"
          {...register('email')}
          variant={errors.email ? 'error' : 'default'}
          helperText={errors.email?.message}
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          {...register('password')}
          variant={errors.password ? 'error' : 'default'}
          helperText={errors.password?.message}
        />

        <Button className="w-full mt-2" size="lg" type="submit" isLoading={loading}>
          Create Account
        </Button>

        <p className="text-[10px] text-gray-400 text-center leading-relaxed">
          By clicking &quot;Create Account&quot;, you agree to our{' '}
          <Link href="#" className="underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </form>

      <p className="text-center text-sm text-secondary-text font-medium">
        Already have an account?{' '}
        <Link href="/login" className="text-navigator font-bold hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
