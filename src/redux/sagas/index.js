
import { all } from 'redux-saga/effects';
import { generateOptWatcher, validateOtpWatcher } from './AuthenticationSaga';
import { fetchingPlanWatcher } from './BookingPlanSaga';


export default function* rootSaga() {
    yield all([
       generateOptWatcher(),
       validateOtpWatcher(),
       fetchingPlanWatcher()
    ]);
 }
