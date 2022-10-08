class People {

    _name
    _surname
    _gender
    _cpr
    _birthday
    _friends = []

    constructor(name, surname, gender, cpr, birthday) {
        this._name = name
        this._surname = surname
        this._gender = gender
        this._cpr = cpr
        this._birthday = birthday;
    }

    fullNameAndGender() {
        return this._name, this._surname, this._gender
    }

    birthday() {
        return this._birthday
    }

    cprNumber() {
        return this._cpr
    }

    // #region GETTER & SETTER

    setName(name){
        this._name = name;
    }

    getName(){
        return this._name;
    }

    setSurname(surname){
        this._surname = surname;
    }

    getSurname(){
        return this._surname;
    }

    setGender(gender){
        this._gender = gender;
    }
    
    getGender(){
        return this._gender;
    }

    setCpr(cpr){
        this._cpr = cpr;
    }

    getCpr(){
        return this._cpr;
    }

    setBirthday(birthday){
        this._birthday = birthday;
    }

    getBirthday(){
        return this._birthday;
    }

    setFriends(friends){
        this._friends.push(friends);
    }

    getFriends(){
        return this._friends;
    }

    // #endregion
}

const people = new People()

people.fullNameAndGender()
people.cprNumber()

module.exports = People;
