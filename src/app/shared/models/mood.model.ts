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

