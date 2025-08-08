import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: '#FFD700',
    borderWidth: 3,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 50,
    paddingTop: 25,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: '#1A1A1A',
    shadowColor: '#FFD700',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  inputContainer: {
    width: '100%',
    maxWidth: 350,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
  }
});

export default styles