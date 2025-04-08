const projects = [
  {
    id: 'form',
    title: 'Simple Form',
    description: 'A feature-rich form with validation, dynamic fields, and real-time preview capabilities.',
    path: '/form',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    technologies: ['React', 'Material-UI', 'React Hook Form', 'Yup'],
    demoUrl: 'https://react-form-builder-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/react-form-builder',
    category: 'Forms & Validation',
    difficulty: 'Intermediate',
    features: [
      'Input validation',
      'Responsive layout',
      'Dynamic form fields',
      'Real-time preview'
    ],
    order: 1
  },
  {
    id: 'birthday',
    title: 'Birthday Reminder',
    description: 'Keep track of upcoming birthdays with notifications, calendar integration, and celebration animations.',
    path: '/birthday',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    technologies: ['React', 'Material-UI', 'Local Storage', 'Date-fns'],
    demoUrl: 'https://react-birthday-reminder-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/react-birthday-reminder',
    category: 'State Management',
    difficulty: 'Beginner',
    features: [
      'Birthday reminders',
      'Celebration animations',
      'Friend management',
      'Calendar view'
    ],
    order: 2
  },
  {
    id: 'todo',
    title: 'Redux Todo App',
    description: 'Feature-rich todo application with Redux state management, filters, and task categorization.',
    path: '/todo',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    technologies: ['React', 'Redux Toolkit', 'Material-UI', 'Local Storage'],
    demoUrl: 'https://react-redux-todo-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/react-redux-todo',
    category: 'State Management',
    difficulty: 'Advanced',
    features: [
      'Task creation and deletion',
      'State management with Redux',
      'Task filtering',
      'Local storage persistence'
    ],
    order: 3
  },
  {
    id: 'weather',
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts, beautiful visualizations, and daily predictions.',
    path: '/weather',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    technologies: ['React', 'Material-UI', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    demoUrl: 'https://react-weather-dashboard-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/react-weather-dashboard',
    category: 'API Integration',
    difficulty: 'Intermediate',
    features: [
      'Weather forecasts',
      'Location detection',
      'Visual weather indicators',
      'Interactive charts'
    ],
    order: 4
  },
  {
    id: 'search',
    title: 'Advanced Search',
    description: 'Dynamic search interface with real-time filtering, results highlighting, and detailed user profiles.',
    path: '/search',
    image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    technologies: ['React', 'Material-UI', 'React Query', 'JSON Server'],
    demoUrl: 'https://react-search-app-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/react-search-app',
    category: 'Data & Filtering',
    difficulty: 'Intermediate',
    features: [
      'Real-time search',
      'User profiles',
      'Filter controls',
      'Results highlighting'
    ],
    order: 5
  },
  {
    id: 'datatable',
    title: 'Advanced DataTable',
    description: 'Powerful data table with sorting, filtering, grouping, and comprehensive data visualization capabilities.',
    path: '/datatable',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    technologies: ['React', 'Material-UI', 'React Table', 'CSV Export'],
    demoUrl: 'https://react-datatable-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/react-datatable',
    category: 'Data & Tables',
    difficulty: 'Advanced',
    features: [
      'Column sorting & filtering',
      'Data grouping',
      'Export options',
      'Column customization'
    ],
    order: 6
  }
].sort((a, b) => a.order - b.order);

const projectCategories = [
  'Forms & Validation',
  'State Management',
  'API Integration',
  'Data & Filtering',
  'Data & Tables'
].sort();

const difficultyLevels = ['Beginner', 'Intermediate', 'Advanced'];

// Helper functions for filtering and sorting
const filterProjectsByCategory = (projects, category) => 
  projects.filter(project => project.category === category);

const filterProjectsByDifficulty = (projects, difficulty) => 
  projects.filter(project => project.difficulty === difficulty);

const sortProjectsByTitle = (projects) => 
  [...projects].sort((a, b) => a.title.localeCompare(b.title));

export { 
  projects, 
  projectCategories, 
  difficultyLevels,
  filterProjectsByCategory,
  filterProjectsByDifficulty,
  sortProjectsByTitle
};

