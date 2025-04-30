import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.5.0',
  ssg: 'gatsby',
  nodeVersion: '16',
  contentSources: [
    {
      name: 'assets',
      path: 'src/assets',
      commitMessage: 'Add favicon',
      commitDate: '3 years ago'
    },
    {
      name: 'components',
      path: 'src/components',
      commitMessage: 'Bumping versions, using Image CDN (#134)',
      commitDate: 'last year'
    },
    {
      name: 'context',
      path: 'src/context',
      commitMessage: 'adds prettier and runs it on write',
      commitDate: '3 years ago'
    },
    {
      name: 'helpers',
      path: 'src/helpers',
      commitMessage: 'Bumping versions, using Image CDN (#134)',
      commitDate: 'last year'
    },
    {
      name: 'pages',
      path: 'src/pages',
      commitMessage: 'Bumping versions, using Image CDN (#134)',
      commitDate: 'last year'
    },
    {
      name: 'plop',
      path: 'src/plop',
      commitMessage: 'adds prettier and runs it on write',
      commitDate: '3 years ago'
    },
    {
      name: 'config.json',
      path: 'src/config.json',
      commitMessage: 'changes # links to /shop',
      commitDate: '3 years ago'
    }
  ]
});
