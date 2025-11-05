export interface User {
  username: string;
  email: string;
}

const STORAGE_KEY = 'app_user';
const USERS_KEY = 'app_users';

// Mock database of users
const getStoredUsers = (): Record<string, { password: string; email: string }> => {
  const stored = localStorage.getItem(USERS_KEY);
  return stored ? JSON.parse(stored) : {
    'admin': { password: 'admin123', email: 'admin@example.com' },
    'user': { password: 'user123', email: 'user@example.com' },
  };
};

const saveUsers = (users: Record<string, { password: string; email: string }>) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const register = (username: string, email: string, password: string): boolean => {
  const users = getStoredUsers();
  if (users[username]) {
    return false; // User already exists
  }
  users[username] = { password, email };
  saveUsers(users);
  return true;
};

export const login = (username: string, password: string): User | null => {
  const users = getStoredUsers();
  const user = users[username];
  
  if (!user || user.password !== password) {
    return null;
  }

  const currentUser: User = { username, email: user.email };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser));
  return currentUser;
};

export const logout = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const getCurrentUser = (): User | null => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};
