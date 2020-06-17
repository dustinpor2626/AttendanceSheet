import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import StudentEntry from './screen/StudentEntry.js';
import AboutTable from './screen/AboutTable.js';
import CreateTable from './screen/CreateTable.js';
import CreateTableForm from './screen/CreateTableForm.js';
import StudentDatabase from './screen/StudentDatabase.js';
import StudentList from './screen/StudentList.js';
import TakeAttendance from './screen/TakeAttendance.js';
import RemoveTable from './screen/RemoveTable.js';

const AppNavigator = createStackNavigator({
  StudentEntry:StudentEntry,
  AboutTable:AboutTable,
  CreateTable:CreateTable,
  CreateTableForm:CreateTableForm,
  StudentDatabase :StudentDatabase,
  TakeAttendance:TakeAttendance,
  StudentList:StudentList,
  RemoveTable:RemoveTable,
},
{
  initialRouteName:'CreateTable',
}
);

export default createAppContainer(AppNavigator);
