export class Sda {
  curs: string;
  groupLetter: string;
  endDate: Date;
  description: string;
  selectedSubjects: string[];

  title: string;
  uuid_center: string;
  startDate: Date;
  constructor() {
    this.curs = '';
    this.groupLetter = '';
    this.endDate = new Date();
    this.description = '';
    this.title = '';
    this.selectedSubjects = [];
    this.uuid_center = '';
    this.startDate = new Date();
  }
}
