import { useState } from 'react';
import { Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { VStack } from 'native-base';
import firestore from '@react-native-firebase/firestore';

import {Header} from '../components/Header';
import {Input} from '../components/Input';
import {Button} from '../components/Button';


export function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [patrimony,setPatrimony] = useState('');
  const [description,setDescription] = useState('');
  const navigation = useNavigation();

  function handleNewOrderRegister(){
    if(!patrimony || !description){
      return Alert.alert("Cadastro","Informe o patrimônio e a descrição");
    }

    setIsLoading(true);

    firestore()
    .collection('orders')
    .add({
      patrimony,
      description, 
      status: 'open',
      created_at: firestore.FieldValue.serverTimestamp()})

    .then(() => {
    
      Alert.alert('Cadastro', 'Ordem de serviço cadastrada com sucesso');
      navigation.goBack();
    })
    .catch((error) => {
      setIsLoading(false);
      // console.log(error);
      return Alert.alert('Cadastro', 'Não foi possível cadastrar a ordem de serviço');

    })
  }



  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova Solicitação" />

      <Input 
        placeholder="Nº Patrimônio"
        mt={4}
        onChangeText={setPatrimony}
      />

      <Input
        placeholder="Descrição do Problema"
        flex={1}
        mt={5}
        multiline 
        textAlignVertical="top"
        onChangeText={setDescription}

      />
      <Button 
        title="Cadastrar"
        mt={5} 
        isLoading={isLoading}
        onPress={handleNewOrderRegister}

      
      />

    </VStack>
  );
}