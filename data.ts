export interface Data {
    info: InfoModule;
    skills: SkillsModule;
    projects: ProjectsModule;
    certificates: CertificatesModule;
    education: EducationModule;
}

export interface Module {
    name: string;
}

export interface InfoModule extends Module {
}

export interface ProjectsModule extends Module {
    projects: Project[];
}

export interface SkillsModule extends Module {
    frontend: Skill[];
    backend: Skill[];
    server: Skill[];
    vcs: Skill[];
}

export interface CertificatesModule extends Module {
    certs: Certificate[];
}

export interface EducationModule extends Module {
    url: string;
    title: string;
    department: string;
}

export interface Project {
    name: string;
    title: string;
}

export interface Certificate {
    name: string;
    title: string;
    url: string;
    img: string;
}

export interface Skill {
    name: string;
    logo: string;
    color: string;
    text: string;
    more: string;
}

