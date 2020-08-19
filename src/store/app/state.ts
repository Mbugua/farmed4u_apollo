import { UserProfile } from "@/interfaces/users";

export interface AppNotification {
  content: string;
  color?: string;
  showProgress?: boolean;
}

export interface AppState {
  token: string;
  isLoggedIn: boolean | null;
  logInError: boolean;
  userProfile: UserProfile | null;
  dashBoardMiniDrawer: boolean;
  dashBoardShowDrawer: boolean;
  notifications: AppNotification[];
}
