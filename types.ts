
export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Urban' | 'Interior';
  image: string;
  year: string;
  location: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
