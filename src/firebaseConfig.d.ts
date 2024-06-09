declare module '@/firebaseConfig' {
  import { Auth } from 'firebase/auth';

  const auth: Auth;
  export { auth };
}
