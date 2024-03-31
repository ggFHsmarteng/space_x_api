import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },

  searchbar: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },

  header: {
    fontSize: 20,
    marginBottom: 5,
  },

  cards: {
    borderWidth: 3,
    borderColor: '#20232a',
    borderRadius: 5,
    marginBottom: 12,
    backgroundColor: 'white',
  },

  button:{


  },

  detailContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#20232a',
    borderRadius: 5,
    backgroundColor: 'white',
  },

  detailHeader: {
    fontSize: 50,
  },

  detailText: {
    fontSize: 15,
  },

  detailImage:{
    width: 200, 
    height: 200, 


  },
});

export default Styles;
