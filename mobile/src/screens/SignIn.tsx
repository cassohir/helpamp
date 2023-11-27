import {useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {VStack, Heading, Icon, useTheme} from 'native-base';
import Logo from '../assets/logo_primary.svg';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import {Envelope, Key} from 'phosphor-react-native'
 

export function SignIn(){

  const [isLoading,setIsLoading] = useState(false);
  const [userEmail,setUserEmail] = useState('');
  const [password,setPassword] = useState('');
  const { colors } = useTheme();

  function handleSignIn(){

    if(!userEmail || !password){
      return Alert.alert("Entrar","Informe E-mail e Senha");
    }

    setIsLoading(true);

    auth()
    .signInWithEmailAndPassword(userEmail,password)
    .catch((error) => {
      setIsLoading(false);
      // console.log(error);


    if(error.code === 'auth/invalid-email'){
      return Alert.alert('Entrar', "-Email inválido")
    }
    if(error.code === 'auth/user-not-found'){
      return Alert.alert('Entrar', "Senha ou E-mail inválido")
    }
    if(error.code === 'auth/wrong-password'){
      return Alert.alert('Entrar', "Senha ou E-mail inválido")
    }

    return Alert.alert('Entrar', "Não foi possível acessar")

    });


  }
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24} >

      <Logo/>

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
          Faça seu login
      </Heading>

      <Input 
      placeholder="E-mail"
      mb={4}
      InputLeftElement ={<Icon as={<Envelope color={colors.gray[300]}/>}
      ml={4}/>}
      onChangeText={setUserEmail}
      />
      
      <Input 
      placeholder="Senha"
      mb={8}
      InputLeftElement ={<Icon as={<Key color={colors.gray[300]}/>}
      ml={4}/>}
      secureTextEntry
      onChangeText={setPassword}
      />

      <Button title="Entrar" w="full" onPress={handleSignIn} isLoading={isLoading} />

    </VStack>



  );
}