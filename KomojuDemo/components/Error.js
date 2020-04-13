import React from 'react';
import {View, Text, Linking, StyleSheet} from 'react-native';

import globalStyles from './globalStyles';

const Error = () => (
  <View style={globalStyles.container}>
    <Text style={globalStyles.emoji}>😿</Text>
    <Text style={globalStyles.text}>
      It looks like something's gone wrong. Please try again. If you're still
      having a problem please raise an issue on the{' '}
      <Text
        style={{color: 'blue'}}
        onPress={() =>
          Linking.openURL('https://github.com/komoju/nexus-example/issues/new')
        }>
        Github repository
      </Text>
      <Button
        buttonStyle={styles.button}
        title="Go Home"
        titleStyle={{fontSize: 24}}
        onPress={() => navigation.navigate('Welcome')}
      />
    </Text>
  </View>
);

const styles = StyleSheet.create({
  button: {
    ...globalStyles.button,
    paddingHorizontal: '15%',
  },
});

export default Error;
