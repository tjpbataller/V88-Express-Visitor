class Person
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
}
class Prosecutor extends Person
{
    constructor(name, age)
    {
        super(name, age);
    }
    prosecute(defendant, cased)
    {
        defendant.case = cased;
    }
}
class Defendant extends Person
{
    constructor(name, age, cased)
    {
        super(name, age);
        this.case = new Case;
    }
}
class Case
{
    constructor(title, years, months, days, minAge, maxAge)
    {
        this.title = title;
        this.years = years;
        this.months = months;
        this.days = days;
        this.minAge = minAge;
        this.maxAge = maxAge;
        this.imprisonmentTerm;
        this.ageLimit;
    }
    computeReleaseDate()
    {
        let newDate = new Date();
        newDate.setDate(newDate.getDate() + this.days);
        newDate.setMonth(newDate.getMonth() + this.months);
        newDate.setFullYear(newDate.getFullYear() + this.years);
        
        return {
            "day": newDate.getDate(),
            "month": newDate.getMonth(),
            "year": newDate.getFullYear()
        };
    }
}
class TrialCourt
{
    static initiateTrial(defendant, prosecutor)
    {
        let verdict = this.getVerdict(defendant);
        console.log("Name: ", defendant.name);
        console.log("Age: ", defendant.age);
        console.log("Case Title: ", defendant.case.title);
        console.log("Filed by: ", prosecutor.name);
        console.log("Verdict: ", verdict);
        if(verdict === "GUILTY")
        {
            let releaseDate = defendant.case.computeReleaseDate();
            let month = new Intl.DateTimeFormat("de-US", {month: "short"}).format(releaseDate.year);
            let dateFormat = `${month} ${releaseDate.day} ${releaseDate.year}`;

            console.log("Release Date: ", dateFormat);
        }
    }
    static getVerdict(defendant)
    {
        if(defendant.age < defendant.case.minAge)
        {
            return "NOT GUILTY";
        }
        return "GUILTY";
    }
}
let case1 = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
let prosecutor = new Prosecutor ("John", 30);
let defendant2 = new Defendant ("Onel", 25);

prosecutor.prosecute(defendant2, case1);
TrialCourt.initiateTrial(defendant2, prosecutor); 