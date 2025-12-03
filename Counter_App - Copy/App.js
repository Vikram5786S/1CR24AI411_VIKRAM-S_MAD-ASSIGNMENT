import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>

      <Text style={styles.number}>{count}</Text>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4caf50' }]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.btnText}>Increase</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#f44336' }]}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.btnText}>Decrease</Text>
        </TouchableOpacity>
        
      </View>

      <TouchableOpacity
        style={[styles.resetButton]}
        onPress={() => setCount(0)}
      >
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  number: {
    fontSize: 60,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  resetButton: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#2196f3',
  },
  resetText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
