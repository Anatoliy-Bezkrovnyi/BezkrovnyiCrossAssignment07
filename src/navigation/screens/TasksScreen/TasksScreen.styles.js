import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1 
  },
  center: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  
  lightBg: { 
    backgroundColor: '#ffffff' 
  },
  darkBg: { 
    backgroundColor: '#1e1e1e' 
  },
  errorText: { 
    color: '#ff6b6b', 
    fontSize: 16 
  },
  listContent: { 
    padding: 16, 
    paddingBottom: 30 
  },
  separator: { 
    height: 12 
  },
});

export default styles;