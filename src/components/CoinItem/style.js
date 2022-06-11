import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    color: 'white',
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    padding: 15,
    justifyContent: 'space-between',
  },
  rank: {
    fontWeight: 'bold',
    color: 'white',
  },
  rankContainer: {
    borderRadius: 5,
    backgroundColor: '#585858',
    paddingHorizontal: 5,
    marginRight: 5,
  },
});

export default styles;
