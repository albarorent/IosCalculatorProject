import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {colors, styles} from '../../config/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      <View style={styles.row}>
        <CalculatorButton label="C"  blackText color={colors.lightGray} />
        <CalculatorButton label="+/-" blackText color={colors.lightGray} />
        <CalculatorButton label="%" blackText color={colors.lightGray} />
        <CalculatorButton label="/" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="7" color={colors.darkGray} />
        <CalculatorButton label="8" color={colors.darkGray} />
        <CalculatorButton label="9" color={colors.darkGray} />
        <CalculatorButton label="X" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="4" color={colors.darkGray} />
        <CalculatorButton label="5" color={colors.darkGray} />
        <CalculatorButton label="6" color={colors.darkGray} />
        <CalculatorButton label="-" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="1" color={colors.darkGray} />
        <CalculatorButton label="2" color={colors.darkGray} />
        <CalculatorButton label="3" color={colors.darkGray} />
        <CalculatorButton label="+" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="0" color={colors.darkGray} doubleSize />
        <CalculatorButton label="." color={colors.darkGray} />
        <CalculatorButton label="=" color={colors.orange}  />
      </View>
    </View>
  );
};
