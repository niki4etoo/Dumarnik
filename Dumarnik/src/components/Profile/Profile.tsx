interface UserProfile {
    id: number;

    firstName: string;
    secondName: string;
    mail: string;

    points: number;
}

class Profile {

    id: number = 0; // to do random unique number generator

    firstName: string = "";
    secondName: string = "";
    mail: string = "";

    points: number = 0;

    constructor(firstName: string, secondName: string, mail: string, points: number) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.mail = mail;

        this.points = points;
    }

}