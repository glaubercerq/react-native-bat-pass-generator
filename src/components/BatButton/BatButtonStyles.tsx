import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 8,
    backgroundColor: '#1A1A1A',
    borderWidth: 2,
    borderColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonPressed: {
    backgroundColor: '#333333',
    transform: [{ scale: 0.95 }],
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#FFD700',
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  copyIcon: {
    fontSize: 16,
    marginRight: 8,
  }
});