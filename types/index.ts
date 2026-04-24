export interface ResumeData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedinURL: string;
  githubURL: string;
  cityState: string;
  country: string;
  experiences: ExperienceItem[];
  education: EducationItem[];
  skills: SkillItem[];
  summary:string;
}

export interface PersonalDetailsItem {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedinURL: string;
  githubURL: string;
  cityState: string;
  country: string;
}

export interface ExperienceItem {
  jobTitle: string;
  company: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  description: string;
  isCurrent: boolean;
}

export interface EducationItem {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
  city: string;
}

export interface SkillItem{
  skillName: string;
}
