export interface ISidebar {
    name: string;
    displayOrder: number;
    route: string;
    hasSubItems?: boolean;
    display?: boolean;
}
