import { extendType, objectType, stringArg, nonNull } from 'nexus';
import * as NexusPrisma from 'nexus-prisma';

const { Project: ProjectNexus } = NexusPrisma;

export const Project = objectType({
  name: ProjectNexus.$name,
  description: ProjectNexus.$description,
  definition(t) {
    t.field(ProjectNexus.id);
    t.field(ProjectNexus.name);
    t.field(ProjectNexus.url);
    t.field(ProjectNexus.description);
    t.field(ProjectNexus.createdAt);
    t.field(ProjectNexus.updatedAt);
    t.field(ProjectNexus.userId);
  },
});

export const ProjectQueries = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('projects', {
      type: 'Project',
      description: 'Returns the projects for the currently authenticated user.',
      resolve: async (_root, _args, ctx) => {
        if (!ctx.user?.id) {
          return [];
        }

        return ctx.prisma.project.findMany({
          where: { userId: ctx.user.id },
          orderBy: { createdAt: 'desc' },
        });
      },
    });

    t.field('project', {
      type: 'Project',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_root, { id }, ctx) => {
        if (!ctx.user?.id) return null;

        const project = await ctx.prisma.project.findUnique({
          where: { id },
        });

        if (project?.userId !== ctx.user.id) {
          return null; // Or throw Not Authorized
        }
        return project;
      },
    });
  },
});

export const ProjectMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createProject', {
      type: 'Project',
      args: {
        name: nonNull(stringArg()),
        url: stringArg(),
        description: stringArg(),
      },
      resolve: async (_root, args, ctx) => {
        if (!ctx.user?.id) {
          throw new Error('Not authenticated');
        }

        return ctx.prisma.project.create({
          data: {
            name: args.name,
            url: args.url,
            description: args.description,
            userId: ctx.user.id,
          },
        });
      },
    });
  },
});
