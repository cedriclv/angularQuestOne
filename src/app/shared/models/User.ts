export class User{

    public lastName : string = 'Le Valegant';
    public firstName : string = 'Cedric';
    public age : number = 44;
    public quote : string = 'I neeed a break';
    public photo : string = 'https://randomuser.me/api/portraits/lego/2.jpg';

    constructor(lastName : string, firstName : string, age : number, quote : string, photo : string){
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.quote = quote;
        this.photo = photo;
    }

}