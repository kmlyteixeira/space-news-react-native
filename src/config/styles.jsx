import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#000000"
  },
  innerContainer: {
    padding: 20,
  },
  selfCenter: {
    alignSelf: "center",
    color: "#FFFFFF",
  },
  containerHome: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  newsListHome: {
    paddingTop: 10,
  },
  containerNews: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  imageNews: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 10,
  },
  textContainerNews: {
    flex: 1,
  },
  titleNews: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000',
  },
  summaryNews: {
    fontSize: 16,
    color: '#000000',
  },
  actionsContainerNews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  moreButtonNews: {
    color: 'purple',    
    cursor: 'pointer'
  },
});

export default styles;
