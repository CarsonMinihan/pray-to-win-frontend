export class Mood {
    constructor(
        public userId: number,
        public mood: string,
        public changes: boolean,
        public makeChanges?: string,
        public details?: string
      ) {}
}
