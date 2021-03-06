import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import globalStyles from './globalStyles';

const PaymentSuccess = ({navigation}) => (
  <View style={globalStyles.container}>
    <Text style={globalStyles.emoji}>🎉</Text>
    <Text style={styles.text}>Success! Your payment has been completed</Text>
    <Button
      buttonStyle={styles.button}
      title="Finish"
      titleStyle={{fontSize: 24}}
      onPress={() => navigation.navigate('Welcome')}
    />
  </View>
);

const styles = StyleSheet.create({
  text: {
    ...globalStyles.text,
    paddingVertical: 30,
  },
  button: {
    ...globalStyles.button,
    paddingHorizontal: '15%',
  },
});

export default PaymentSuccess;
