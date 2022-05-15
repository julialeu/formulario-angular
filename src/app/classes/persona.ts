export class Persona {
  name: string;
  surname: string;
  age: number;
  dni: string;
  birthday: string;
  favouriteColor: string;
  gender: string;

  constructor(name: string, surname: string, age: number, dni: string,
              birthday: string, favouriteColor: string, gender: string) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.dni = dni;
    this.birthday = birthday;
    this.favouriteColor = favouriteColor;
    this.gender = gender;
  };


}
