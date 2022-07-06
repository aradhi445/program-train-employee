import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TasksMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ResultMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuizMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TimeTableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CourseDetailsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NavBarMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tasks {
  readonly id: string;
  readonly task?: string | null;
  readonly name?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tasks, TasksMetaData>);
  static copyOf(source: Tasks, mutator: (draft: MutableModel<Tasks, TasksMetaData>) => MutableModel<Tasks, TasksMetaData> | void): Tasks;
}

export declare class Result {
  readonly id: string;
  readonly score?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Result, ResultMetaData>);
  static copyOf(source: Result, mutator: (draft: MutableModel<Result, ResultMetaData>) => MutableModel<Result, ResultMetaData> | void): Result;
}

export declare class Quiz {
  readonly id: string;
  readonly question?: string | null;
  readonly option1?: string | null;
  readonly option2?: string | null;
  readonly option3?: string | null;
  readonly result?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Quiz, QuizMetaData>);
  static copyOf(source: Quiz, mutator: (draft: MutableModel<Quiz, QuizMetaData>) => MutableModel<Quiz, QuizMetaData> | void): Quiz;
}

export declare class TimeTable {
  readonly id: string;
  readonly course?: string | null;
  readonly lecturer?: string | null;
  readonly details?: string | null;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TimeTable, TimeTableMetaData>);
  static copyOf(source: TimeTable, mutator: (draft: MutableModel<TimeTable, TimeTableMetaData>) => MutableModel<TimeTable, TimeTableMetaData> | void): TimeTable;
}

export declare class CourseDetails {
  readonly id: string;
  readonly course?: string | null;
  readonly lecturer?: string | null;
  readonly details?: string | null;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CourseDetails, CourseDetailsMetaData>);
  static copyOf(source: CourseDetails, mutator: (draft: MutableModel<CourseDetails, CourseDetailsMetaData>) => MutableModel<CourseDetails, CourseDetailsMetaData> | void): CourseDetails;
}

export declare class NavBar {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NavBar, NavBarMetaData>);
  static copyOf(source: NavBar, mutator: (draft: MutableModel<NavBar, NavBarMetaData>) => MutableModel<NavBar, NavBarMetaData> | void): NavBar;
}

export declare class Home {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}