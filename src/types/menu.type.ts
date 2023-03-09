export interface MenuItem {
  name: string;
  handler: Function;
  color?: string;
}

export interface MenuGroup extends Array<MenuItem> {}
