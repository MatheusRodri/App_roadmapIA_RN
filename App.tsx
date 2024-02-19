import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View, StatusBar, TextInput, Platform,Pressable } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight || 0;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor='#f1f1f1' />
      <Text style={styles.heading}>
        Roadmap IA
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}>
          Arrived City
        </Text>
        <TextInput style={styles.input} placeholder="São Paulo" />

        <Text>
          Time to stay: <Text style={styles.days}> 10 </Text> days
        </Text>

        <Slider
          minimumValue={1}
          maximumValue={7}
          minimumTrackTintColor="#009688"
          maximumTrackTintColor="#000000"
        />

      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Create Roadmap
        </Text>
        <MaterialIcons name="travel-explore" size={24} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    paddingTop: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 54,
  },
  form: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 10,
    padding: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 16,
    fontSize: 16,
  },
  days: {
    backgroundColor: '#f1f1f1',
  },
  button:{
    backgroundColor: '#ff5656',
    width: '90%',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
