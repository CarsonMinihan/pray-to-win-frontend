export class Mood {
    constructor(
        public mood: number,
        public changes: boolean,
        public makeChanges?: number,
        public details?: string
      ) {}
}
