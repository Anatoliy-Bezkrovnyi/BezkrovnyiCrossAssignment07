import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#f1c40f',
  },
  lightCard: {
    backgroundColor: '#eeeeee',
  },
  darkCard: {
    backgroundColor: '#303030', 
  },
  completedCard: {
    borderLeftColor: '#b5cf82',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  lightText: { color: '#121212' }, 
  darkText: { color: '#ffffff' },  
  statusBadge: { alignSelf: 'flex-start' },
  statusText: { color: '#aaaaaa', fontSize: 12 },
});

export default styles;

