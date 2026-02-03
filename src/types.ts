export interface Service {
  id: string;
  path: string;
  heroImage: string;
  title: string;
  content: string;
  links?: { label: string; url: string }[];
}

export interface NewsItem {
  date: string;
  category: string;
  title: string;
}

export interface NavLink {
  name: string;
  path: string;
  enName: string;
}

export interface CompanyInfo {
  name: string;
  enName: string;
  address: string;
  ceo: string;
  established: string;
  capital: string;
  license: string;
  constructionLicense: string;
  securityLicense: string;
  realEstateLicense: string;
  services: string;
  employees: string;
  phone: string;
  email: string;
}