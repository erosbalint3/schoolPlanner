export class Grade {
    subject: string;
    name: string;
    grade: number;
    percentage: number;
    date: Date;

    constructor(initializer?: any) {
        this.subject = initializer?.subject;
        this.name = initializer?.name;
        this.grade = initializer?.grade;
        this.percentage = initializer?.percentage;
        this.date = new Date(initializer?.date);
    }
}