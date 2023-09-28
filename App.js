import { NavigationContainer } from "@react-navigation/native"; /* É responsavel pela mecanica de troca de telas, é responsavel também pela função 'linking', importa a opção de 'state persistence' que permite que o sistema salve onde o usuário estava e volta de onde ele saiu */
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './screens/Login';
import CreateUser from './screens/CreateUser';
import FeedBooks from './screens/FeedBooks';
import DetailsBook from './screens/DetailBook';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="Login" 
         component={Login}
         options={{title:"Login"}}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}