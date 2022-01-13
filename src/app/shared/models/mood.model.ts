export class Mood {

  mood: number;
  changes: boolean;
  date: number;
  makeChanges?: number;
  details?: string;

}

export class MoodObjectWithId extends Mood {
  _id: string;
}

export class BackendResponse {
  message: string;
  success: string;
}

export class MoodObjectFRBK extends BackendResponse {
  data: MoodObjectWithId;
}

export class MoodArray extends BackendResponse {
  data: MoodObjectWithId[];
}

export class UpdateMood {
  id: string;
  mood: number;
  makeChanges: number;
  details: string;
}

export class NumberOfChanges {
  //the numbers are the type of changes

  //1
  numOfDiet: number;

  //2
  numOfRoutine: number;

  //3
  numOfExercise: number;

  //4
  numOfSleep: number;

  //5
  numOfHygiene: number;

  //6
  numOfSocial: number;

  //7
  numOfOther: number;
}
