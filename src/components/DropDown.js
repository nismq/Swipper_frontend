import React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {COLORS} from '../../assets/colors';
import {View} from 'react-native';
const DropDown = ({
  choice = [{key, value}],
  placehoder = '',
  searchPlaceholder = '',
  search = '',
  setSelected,
}) => {
  //const [selected, setSelected] = React.useState('');

  return (
    <View>
      <SelectList
        placeholder={placehoder}
        searchPlaceholder={searchPlaceholder}
        search={search}
        dropdownStyles={{
          backgroundColor: COLORS.white,
          borderColor: COLORS.primary,
          borderWidth: 0,
          marginRight: '16%',
          marginLeft: '16%',
        }}
        inputStyles={{
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
          color: COLORS.black,
        }}
        dropdownItemStyles={{
          padding: 10,

          borderBottomColor: COLORS.primary,
        }}
        dropdownTextStyles={{
          fontWeight: '700',
          textAlign: 'center',
          borderColor: COLORS.primary,
          paddingBottom: 5,
        }}
        boxStyles={{
          borderColor: COLORS.primary,
          width: 258,
          height: 43,
          marginVertical: 10,
          alignSelf: 'center',
          borderWidth: 0,
          borderBottomWidth: 1,
          borderRadius: 0,
          paddingLeft: 15,
        }}
        setSelected={setSelected}
        data={choice}
        maxHeight={130}
      />
    </View>
  );
};

export default DropDown;
