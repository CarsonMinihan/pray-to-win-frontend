export class Mood {

  mood: number;
  changes: boolean;
  date: number;
  makeChanges?: number;
  details?: string;

}

export class MoodObjectFRBK extends Mood {
  id: string;
}
