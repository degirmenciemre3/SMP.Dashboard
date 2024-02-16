export interface Class {
    classId: number;
    className: string;
    classCode: string;
}
export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    studentNumber: string;
    classes: Class[];
  }