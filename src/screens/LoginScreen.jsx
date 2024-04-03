import { Image } from "expo-image";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import auth from "../config/firebase";
import styles from "../config/styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = async () => {
    try {
      const usuario = await signInWithEmailAndPassword(auth, email, senha);
      console.log(usuario);
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../assets/icon_space.png")}   
          style={{ width: 250, height: 100, alignSelf: "center"}}
        />
        <Text variant="bodyMedium" style={styles.selfCenter}>  
          Faça seu login
        </Text> 

        <TextInput
          label="Email"
          mode="outlined"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          style={{ borderRadius: 10 }}
        />
        <TextInput
          label="Senha"
          mode="outlined"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          style={{ borderRadius: 10 }}
        />
        <Button onPress={() => navigation.navigate("RegistroScreen")}>
          Registre-se
        </Button>
        <Button
          mode="outlined"
          style={{
            marginTop: 10,
            maxWidth: 260,
            alignSelf: "flex-end",
          }}
          onPress={fazerLogin}
        >
          Entrar
        </Button>
      </View>
    </View>
  );
}
