
export interface Project {
  id: number;
  title: string;
  description: string;
  date: {
    month: string;
    year: number;
  };
  technologies: string[];
  client: string;
  image: string;
  feedback?: string;
  additionalImages?: string[];
}

