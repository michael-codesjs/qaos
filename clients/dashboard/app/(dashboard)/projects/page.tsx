'use client';

import { useHeaderStore } from '@/store/header-store';
import { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Button } from '@/components/ui/button';
import { Add, Global, SearchNormal1 } from 'iconsax-react';
import Link from 'next/link';
import { Modal } from '@/components/ui/modal';
import { useDisclosure } from '@/hooks/use-disclosure';
import { CreateProjectForm } from '@/components/projects/create-project-form';
import { Input } from '@/components/ui/input';

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
      url
      description
      createdAt
      updatedAt
    }
  }
`;

export default function ProjectsPage() {
  const setHeader = useHeaderStore((state) => state.setHeader);
  const { data, loading, error, refetch } = useQuery(GET_PROJECTS);

  // Modal state
  const { isOpen, open, close } = useDisclosure();

  useEffect(() => {
    setHeader('Projects', 'Manage your web applications and their testing suites.');
  }, [setHeader]);

  if (loading) {
    return <div>Loading...</div>; // TODO: Better loading state
  }

  if (error) {
    return <div>Error loading projects</div>;
  }

  const projects = data?.projects || [];

  return (
    <div className="space-y-6">
      {/* Search and Action Bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 max-w-sm">
          <Input
            leftIcon={<SearchNormal1 />}
            placeholder="Search projects..."
            className="bg-white dark:bg-zinc-900 border-transparent dark:border-white/5 shadow-sm focus:bg-white dark:focus:bg-zinc-900"
          />
        </div>
        <Button variant="navigator" className="gap-2" onClick={open}>
          <Add size={20} color="currentColor" />
          <span>New Project</span>
        </Button>
      </div>

      {/* Projects Grid */}
      {projects.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 dark:bg-zinc-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-white/10">
          <div className="w-16 h-16 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 dark:text-gray-500">
            <Global size={32} variant="Bulk" />
          </div>
          <h3 className="text-lg font-bold text-foreground dark:text-white">No projects yet</h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-xs mx-auto mt-2 mb-6">
            Create your first project to start running autonomous tests.
          </p>
          <Button variant="outline" onClick={open}>
            Create Project
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: any) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="group block bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:border-navigator/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-navigator/10 flex items-center justify-center text-navigator group-hover:bg-navigator group-hover:text-white transition-colors">
                  <Global size={20} variant="Bulk" color="currentColor" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground dark:text-white mb-1 group-hover:text-navigator transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 min-h-[40px]">
                {project.description || 'No description provided.'}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-50 dark:border-white/5 flex items-center justify-between text-xs font-medium text-gray-400 dark:text-gray-500">
                <span>{project.url ? new URL(project.url).hostname : 'No URL'}</span>
                <span>{new Date(project.createdAt).toLocaleDateString()}</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Create Project Modal */}
      <Modal isOpen={isOpen} onClose={close} title="Create New Project">
        <CreateProjectForm
          onSuccess={() => {
            close();
            refetch();
          }}
          onCancel={close}
        />
      </Modal>
    </div>
  );
}
