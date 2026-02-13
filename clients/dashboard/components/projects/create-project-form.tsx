'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { ModalFooter } from '@/components/ui/modal';

const createProjectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  description: z.string().optional(),
});

type CreateProjectFormValues = z.infer<typeof createProjectSchema>;

const CREATE_PROJECT_MUTATION = gql`
  mutation CreateProject($name: String!, $url: String, $description: String) {
    createProject(name: $name, url: $url, description: $description) {
      id
      name
      url
      description
      createdAt
    }
  }
`;

interface CreateProjectFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function CreateProjectForm({ onSuccess, onCancel }: CreateProjectFormProps) {
  const router = useRouter();
  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT_MUTATION);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateProjectFormValues>({
    resolver: zodResolver(createProjectSchema),
  });

  const onSubmit = async (data: CreateProjectFormValues) => {
    try {
      await createProject({
        variables: {
          name: data.name,
          url: data.url || undefined,
          description: data.description,
        },
      });
      reset();
      router.refresh(); // Refresh server data
      onSuccess?.();
    } catch (e) {
      console.error('Failed to create project:', e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Project Name"
        {...register('name')}
        variant={errors.name ? 'error' : 'default'}
        helperText={errors.name?.message}
        placeholder="My Awesome App"
      />

      <Input
        label="Project URL"
        {...register('url')}
        variant={errors.url ? 'error' : 'default'}
        helperText={errors.url?.message}
        placeholder="https://example.com"
      />

      <Textarea
        label="Description"
        {...register('description')}
        variant={errors.description ? 'error' : 'default'}
        helperText={errors.description?.message}
        placeholder="A brief description of the project"
      />

      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">{error.message}</div>
      )}

      <ModalFooter>
        <Button type="button" variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" isLoading={loading} variant="navigator">
          Create Project
        </Button>
      </ModalFooter>
    </form>
  );
}
