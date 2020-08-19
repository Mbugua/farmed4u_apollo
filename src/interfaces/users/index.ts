export interface UserProfile {
  email: string;
  username: string;
  is_active: boolean;
  is_superuser: boolean;
  id: string;
}

export interface UserProfileUpdate {
  email?: string;
  username?: string;
  password?: string;
  is_active?: boolean;
  is_superuser?: boolean;
}

export interface UserProfileCreate {
  email: string;
  username: string;
  password?: string;
  is_active?: boolean;
  is_superuser?: boolean;
}
