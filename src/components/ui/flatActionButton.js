//import liraries
import {NoteAdd} from 'iconsax-react-native';
import {TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/appColors';
import {ADDNOTE} from '../../utils/routes';

// create a component
const FlatActionButton = props => {
  const {navigation} = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ADDNOTE)}
      style={{
        width: 80,
        height: 80,
        backgroundColor: AppColors.BLUE,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        right: 15,
      }}>
      <NoteAdd size="32" color={AppColors.WHITE} />
    </TouchableOpacity>
  );
};

//make this component available to the app
export default FlatActionButton;
