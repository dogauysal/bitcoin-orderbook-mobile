export class IUser {
    Name: string = "";
    Surname: string = "";
    Email: string = "";
    Password: string = "";
    ConfirmPassword: string = "";

    constructor(name: string, surname: string, email: string) {
        this.Name = name;
        this.Surname = surname;
        this.Email = email
    }
}

