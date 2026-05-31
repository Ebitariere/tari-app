export type UserRole = 'Admin' | 'Editor' | 'Viewer';

export interface User {
  username: string;
  role: UserRole;
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, role: UserRole) => void;
  logout: () => void;
}