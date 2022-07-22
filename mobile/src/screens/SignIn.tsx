import {useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {VStack, Heading, Icon, useTheme} from 'native-base';
import Logo from '../assets/logo_primary.svg';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import {Envelope, Key} from 'phosphor-react-native'
 

export function SignIn(){

  const [userEmail,setUserEmail] = useState('');
  const [password,setPassword] = useState('');
  const { colors } = useTheme();

  function handleSignIn(){

    if(!userEmail || !password){
      return Alert.alert("Entrar","Informe E-mail e Senha");
    }



    console.log(userEmail,password);
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

      <Button title="Entrar" w="full" onPress={handleSignIn} />

    </VStack>



  );
}