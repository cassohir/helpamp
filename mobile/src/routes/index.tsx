import {NavigationContainer} from '@react-navigation/native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Loading} from '../components/Loading';
import { SignIn} from "../screens/SignIn";
import {AppRoutes} from "./app.routes";
import { useState, useEffect } from 'react';

export function Routes() {

  const [isLoading, SetIsLoading] = useState(true);
  const [user,setUser] = useState<FirebaseAuthTypes.User>();

  useEffect(() => {

    const subscriber = auth()
    .onAuthStateChanged(response => {
      if(response){
        setUser(response);
      }
      SetIsLoading(false);
    });

    return subscriber;

  },[]);

  if(isLoading){
    return <Loading/>
  }


  return (
    <NavigationContainer>
      {user ? <AppRoutes/> : <SignIn/>}
    </NavigationContainer>
  );
}