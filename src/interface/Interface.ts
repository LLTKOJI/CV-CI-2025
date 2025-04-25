export interface SocialProps {
    name: string;
    url: string;
    icon: string;
}

export interface CardIndexProps {
    title: string;
    title_en: string;
    description: string;
    description_en: string;
}

export interface ItemProps {
    titleEs: string;
    titleEn: string;
    href: string;
    subitems?: ItemProps[];
}

interface Skill {
    name: string;
    level: number;
}

export interface Skills {
    [categoria: string]: Skill[];
}

