export interface INinjaAction {
  id: string;
  title: string;
  hotkey?: string;
  handler?: Function;
  tiIcon?: string;
  icon?: string;
  parent?: string;
  keywords?: string;
  children?: string[];
  section?: string;
}
