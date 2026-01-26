
import { Project, TeamMember } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Solace Penthouse',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    year: '2023',
    location: 'Geneva, Switzerland',
    description: 'A sanctuary of light and glass designed for tranquil urban living.'
  },
  {
    id: '2',
    title: 'Velocity Headquarters',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
    year: '2022',
    location: 'Austin, USA',
    description: 'A dynamic office ecosystem fostering collaboration and deep work.'
  },
  {
    id: '3',
    title: 'Kinetic Hybrid Loft',
    category: 'Urban',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',
    year: '2024',
    location: 'Berlin, Germany',
    description: 'A seamless integration of living quarters and a professional creative studio.'
  },
  {
    id: '4',
    title: 'Lumina Corporate Park',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200',
    year: '2023',
    location: 'London, UK',
    description: 'Redefining the modern campus with biophilic architecture.'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Elena Vance',
    role: 'Principal Architect',
    bio: 'Pritzker prize nominee focused on sustainable brutalism and residential retreats.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Marcus Thorne',
    role: 'Director of Workplace Design',
    bio: 'Pioneer in behavioral ergonomics and next-generation office productivity.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  }
];
