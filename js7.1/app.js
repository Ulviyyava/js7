var madonna={
    name:'Madonna',
    surname:'Louise Ciccone',
    bornYear:1958,
    birthPlace:'USA',
}
var rihanna={
    name:'Rihana',
    surname:'Robyn',
    bornYear:1988,
    birthPlace:'Barbados',
}
var general={
    fullName:function(){
        return "FullName: "+ this.name + " " + this.surname
    },
    age:function(){
        var date = new Date().getFullYear()
        return date - this.bornYear
    },
    citizen: function(){
        return "Citizen: USA"
    }
}
console.log(general.fullName.call(madonna))
console.log(general.age.call(madonna))
console.log(general.citizen.call(madonna))