export interface Tab {
    id?: number;
    label: string;
    route: string;
    module: string;
    order: number;
    isVisible: boolean;
    isDisabled: boolean;
  }
  