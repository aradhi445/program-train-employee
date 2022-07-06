// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tasks, Result, Quiz, TimeTable, CourseDetails, NavBar, Home } = initSchema(schema);

export {
  Tasks,
  Result,
  Quiz,
  TimeTable,
  CourseDetails,
  NavBar,
  Home
};