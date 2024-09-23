import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const [numbers, setNumbers] = useState([5, 6, 7]);

  const soTang = () => {
    setNumbers(numbers.map(num => num + 1));
  };

  const soGiam = () => {
    setNumbers(numbers.map(num => num - 1));
  };

  return (
    <View style={styles.container}>
      {numbers.map((num, index) => (
        <Text key={index} style={styles.number}>{num}</Text>
      ))}
      <View style={styles.buttonContainer}>
        <Button title="Tăng" onPress={soTang} />
        <Button title="Giảm" onPress={soGiam} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  number: {
    fontSize: 48,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default App;
