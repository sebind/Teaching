import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import CourseSwitcher from './CourseSwitcher.vue';
import QuizModule from './components/QuizModule.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-before': () => h(CourseSwitcher)
    });
  },
  enhanceApp({ app }) {
    // Register interactive assessment quiz module globally
    app.component('QuizModule', QuizModule);

    // Dynamically discover and register all simulation lab components from ./components/sims/*.vue
    const sims = import.meta.glob<{ default: any }>('./components/sims/*.vue', { eager: true });
    for (const rawPath in sims) {
      const normalized = rawPath.replace(/\\/g, '/');
      const filename = normalized.split('/').pop()?.replace(/\.vue$/, '');
      if (filename) {
        const comp = sims[rawPath]?.default || sims[rawPath];
        if (comp) {
          app.component(filename, comp);
        }
      }
    }
  }
} satisfies Theme;
