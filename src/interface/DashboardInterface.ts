export interface sideBarProp {
  handleResponsive: (responsive: boolean) => void;
  responsive: boolean;
  setSelectodComponent: (selectedComponent: string) => void;
}

export type UserBasicInfo = {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  phone: string;
};
