import {
  StyleSheet,
  Dimensions, PixelRatio
} from 'react-native';

export const { width, height } = Dimensions.get('window');
const ratio = width/541;

const styles = StyleSheet.create({
  markerTitle: {
    color: "#fff",
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
    paddingHorizontal: 30,
    fontSize: 18,
  },
  markerDescription: {
    color: "#fff",
    marginBottom: 15,
    paddingHorizontal: 30,
    fontSize: 16,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  // information
  info: {
    marginHorizontal: 15,
  },
  infoTitles: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'ghostwhite',
  },
  infoBody: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  photoContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  media:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  photo: {
    padding: 20,
    margin: 15,
    backgroundColor: 'lightgrey',
    marginTop: 25,
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3,
  },
  //form message
  formError: {
    color: 'black',
    paddingHorizontal: 15,
    marginTop: 5,
    fontSize: 16,
  },
  //form message
  formErrorMessage: {
    color: 'red',
    paddingHorizontal: 15,
    marginTop: 5,
    fontSize: 16,
  },
  message: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#ffe56450',
    marginVertical: 15,
    marginHorizontal: 15,
    borderLeftColor: '#ffe564',
    borderLeftWidth: 5,
  },
  closeButton: {
    position: 'absolute',
    right: 35,
    top: 35,
  },
  // datepicker
  containerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  // cardlist
  containerStandar: {
    flex: 1,
  },
  itemCardlist: {
    borderRadius: 5,
    height: 200,
    backgroundColor: '#ff5252',
    width: width - 20,
  },
  containerOverlay:  {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 'auto',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.6,
    backgroundColor: 'black',
    width: width - 20,
    height: 200,
  },
  titleCardlist: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  summaryCardlist: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  // complaints & enrollment
  formTitles: {
    fontSize: 24,
    alignSelf: 'flex-start',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    color: 'grey',
    fontWeight: 'bold',
  },
  formText: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
  },
  formLabel: {
    fontSize: 16,
    alignSelf: 'flex-start',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    color: 'grey',
    fontWeight: 'bold',
  },
  inputslabel: {
    marginTop: 10,
    paddingVertical: 5,
  },
  checkboxesContainer: {
    marginLeft: 20,
  },
  // login
  containers: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  presentation: {
    fontSize: 40,
    alignSelf: 'center',
    paddingHorizontal: 10,
    color: '#f50057',
    fontWeight: 'bold',
    paddingVertical: 40,
  },
  submitButton: {
    marginTop: 30,
  },
  enrollButton: {
    marginTop: 10,
  },
  enroll: {
    fontSize: 16,
    textAlign: 'center',
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginTop: 15,
    color: 'grey',
  },
  // complaintSmall
  complaintSmall: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  // message
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  body: {
    fontSize: 14,
    paddingHorizontal: 15,
  },
  bodyMargin: {
    fontSize: 14,
  },
  // generic & loadingIndicator
  containerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // logout
  logout: {
    color: 'black',
    fontSize: 14,
  },
  logoutContainer: {
    justifyContent: 'flex-start',
    marginLeft: 15,
  },
  logoutIcon: {
    color: 'grey',
    marginRight: 35,
  },
  // news
  containerMargin: {
    flex: 1,
    marginTop: 20,
    marginBottom: 30,
  },
  titleNews: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  summaryText: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  newsBody: {
    fontSize: 14,
    paddingHorizontal: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  photoNews: {

  },
  // onboarding
  photoOnboarding: {
    height: 200,
    width: 200,
  },
  // profile
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 20,
  },
  profileAddress: {
    paddingLeft: 15,
    marginBottom: 10,
  },
  // simplelist
  imagesList: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  itemList: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#f8f8ff',
    fontWeight: '600',
    marginVertical: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleList: {
    flex: 2,
    fontSize: 16,
    paddingRight: 15,
    paddingVertical: 10,
  },
  // Share Complaint
  shareComplaints: {
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareComplaintTitles: {
    fontSize: 24,
    alignSelf: 'flex-start',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 15,
    color: 'grey',
    fontWeight: 'bold',
  },
  downloadIcon: {
    color: '#f50057',
  },
  // complaintslist
  complaints: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#f8f8ff',
    fontWeight: '600',
    marginVertical: 1,
    paddingHorizontal: 15,
    paddingBottom: 5,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  complaintslist: {
    flexDirection: 'column',
  },
  dateDetail: {
    fontSize: 14,
    paddingRight: 15,
    paddingVertical: 5,
  },
  titleDetail: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingRight: 15,
    paddingVertical: 10,
  },
  // complaint detail
  titlesDetail: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  bodyDetail: {
    fontSize: 14,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  complaintTitles: {
    fontSize: 24,
    alignSelf: 'flex-start',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 15,
    color: 'grey',
    fontWeight: 'bold',
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  // Field
  fieldIcon: {
    paddingLeft: 10,
    marginTop: 5,
  },
  fieldLabel: {
    flexDirection: 'row',
  },
  // Address
  addressCity: {
    flexDirection: 'row',
  },
  emptyListMessage: {
    marginTop: 40,
    marginLeft: 30,
    fontSize: 18,
  },
});

export default styles;
