import auth from '@react-native-firebase/auth';

//Create a user (Sign Up)
export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    return userCredential.user;
  } catch (error) {
    console.log('User creation error = ' + error);
  }
};
/**
 * LOGIN USER (SIGN IN)
 */
export const logIn = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    return userCredential.user;
  } catch (error) {
    console.log('Error logging in ' + error);
  }
};
/**
 * LOGIN USER (SIGN IN)
 */
export const logOut = async () => {
  return auth().signOut();
};
