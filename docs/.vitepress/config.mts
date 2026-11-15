import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/Teaching/',
  title: 'PSG IAS Courseware',
  description: 'Interactive Engineering Mechanics & Electronics Courseware — Dr. Sebin Devasia',
  vite: {
    build: {
      chunkSizeWarningLimit: 2500
    }
  },
  markdown: {
    math: true
  },
  themeConfig: {
    siteTitle: 'PSG IAS Courseware',
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    docFooter: {
      prev: 'Previous Chapter',
      next: 'Next Chapter'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Physics — 23IM102', link: '/physics/', activeMatch: '^/physics/' },
      { text: 'Basics of Electronics — 23IR202', link: '/electronics/', activeMatch: '^/electronics/' }
    ],
    sidebar: {
      '/physics/': [
        {
          text: 'Course Overview & Syllabus',
          link: '/physics/'
        },
        {
          text: 'Module 1: Statics of Particles',
          collapsed: false,
          items: [
            { text: '1.1 Newtonian Foundations & Vectors', link: '/physics/module-1/newtonian-and-vectors' },
            { text: '1.2 Force Resolution & 2D Equilibrium', link: '/physics/module-1/force-resolution-and-equilibrium' },
            { text: '1.3 Forces & Equilibrium in 3D Space', link: '/physics/module-1/forces-in-space' },
            { text: '1.4 Important Questions & Quiz', link: '/physics/module-1/questions-and-quiz' }
          ]
        },
        {
          text: 'Module 2: Kinematics of Particles',
          collapsed: false,
          items: [
            { text: '2.1 Rectilinear Motion & Curves', link: '/physics/module-2/rectilinear-and-graphical' },
            { text: '2.2 Multi-Particle & Curvilinear Motion', link: '/physics/module-2/multi-particle-and-curvilinear' },
            { text: '2.3 Projectile, Rotary & Rolling Motion', link: '/physics/module-2/projectile-and-rotary' },
            { text: '2.4 Important Questions & Quiz', link: '/physics/module-2/questions-and-quiz' }
          ]
        },
        {
          text: 'Module 3: Kinetics – Newton\'s Law & Friction',
          collapsed: false,
          items: [
            { text: '3.1 Newton\'s 2nd Law & D\'Alembert', link: '/physics/module-3/newtons-law-and-dalembert' },
            { text: '3.2 Dry, Wedge, Screw & Belt Friction', link: '/physics/module-3/dry-wedge-screw-belt-friction' },
            { text: '3.3 Bearings, Disks & Rolling Resistance', link: '/physics/module-3/bearings-disks-and-rolling' },
            { text: '3.4 Important Questions & Quiz', link: '/physics/module-3/questions-and-quiz' }
          ]
        },
        {
          text: 'Module 4: Kinetics – Energy Methods',
          collapsed: false,
          items: [
            { text: '4.1 Work & Kinetic Energy', link: '/physics/module-4/work-and-kinetic-energy' },
            { text: '4.2 Conservation, Power & Efficiency', link: '/physics/module-4/conservation-power-efficiency' },
            { text: '4.3 Important Questions & Quiz', link: '/physics/module-4/questions-and-quiz' }
          ]
        },
        {
          text: 'Module 5: Kinetics – Momentum Methods',
          collapsed: false,
          items: [
            { text: '5.1 Impulse & Momentum Conservation', link: '/physics/module-5/impulse-and-momentum' },
            { text: '5.2 Impact & Coefficient of Restitution', link: '/physics/module-5/impact-and-restitution' },
            { text: '5.3 Important Questions & Quiz', link: '/physics/module-5/questions-and-quiz' }
          ]
        }
      ],
      '/electronics/': [
        {
          text: 'Course Overview & Syllabus',
          link: '/electronics/'
        },
        {
          text: 'Stage 2 Modules (23IR202)',
          collapsed: false,
          items: [
            { text: 'Module 1: Semiconductor & Diode Theory', link: '/electronics/module-1/' },
            { text: 'Module 2: Bipolar Junction Transistor', link: '/electronics/module-2/' },
            { text: 'Module 3: Amplifiers & Oscillators', link: '/electronics/module-3/' },
            { text: 'Module 4: Operational Amplifiers', link: '/electronics/module-4/' },
            { text: 'Module 5: Voltage Regulators', link: '/electronics/module-5/' }
          ]
        }
      ],
      '/': [
        {
          text: 'Academic Portal',
          items: [
            { text: 'Portal Home', link: '/' },
            { text: '23IM102: Physics (Full Course)', link: '/physics/' },
            { text: '23IR202: Basics of Electronics', link: '/electronics/' }
          ]
        },
        {
          text: 'Physics Quick Jump (23IM102)',
          collapsed: false,
          items: [
            { text: 'Module 1: Statics of Particles', link: '/physics/module-1/newtonian-and-vectors' },
            { text: 'Module 2: Kinematics of Particles', link: '/physics/module-2/rectilinear-and-graphical' },
            { text: 'Module 3: Kinetics – Newton\'s Law & Friction', link: '/physics/module-3/newtons-law-and-dalembert' },
            { text: 'Module 4: Kinetics – Energy Methods', link: '/physics/module-4/work-and-kinetic-energy' },
            { text: 'Module 5: Kinetics – Momentum Methods', link: '/physics/module-5/impulse-and-momentum' }
          ]
        }
      ]
    }
  }
});
