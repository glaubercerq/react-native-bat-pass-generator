import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    color: '#FFD700',
    marginBottom: 15,
    letterSpacing: 2,
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#C0C0C0',
    fontStyle: 'italic',
    marginTop: 10,
    letterSpacing: 1,
  },
  logoImage: {
    resizeMode: 'contain',
    height: 160,
    width: 160,
    alignSelf: 'center',
  }
});