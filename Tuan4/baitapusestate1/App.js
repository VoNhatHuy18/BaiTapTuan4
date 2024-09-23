import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const soTang = () => {
    setCount(count + 1);
  };

  const soGiam = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{count}</Text>
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
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default App;
