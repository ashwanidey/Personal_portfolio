type TopBarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  mainEndpoint : string; 
  setMainEndpoint : (value: string) => void;
    subDomain : string; 
    setSubDomain : (value: string) => void;
};

type ProjectType = {
  name: string;
  value : string;
  description: string;
  tech_stack: string[];
  github_url: string;
  website_url: string;
  image_path: string;
  images : string[];
};