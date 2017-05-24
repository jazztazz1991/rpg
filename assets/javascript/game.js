var maz = { name: "Maz", hp: 100, atk: 30, defAtk: 25 };
var finn = { name: "Finn", hp: 120, atk: 25, defAtk: 25 };
var kylo = { name: "Kylo", hp: 150, atk: 20, defAtk: 25 };
var rey = { name: "Rey", hp: 200, atk: 15, defAtk: 25 };
var character, enemy;
//this makes selection appear in character spot when image is chosen
$("#mazS").on("click",function(){
    character = maz;
    
    document.getElementById("charaName").innerHTML = maz.name;
    document.getElementById("charaHp").innerHTML = maz.hp;
    document.getElementById("finnName").innerHTML = finn.name;
    document.getElementById("finnHp").innerHTML = finn.hp;
    document.getElementById("kyloName").innerHTML = kylo.name;
    document.getElementById("kyloHp").innerHTML = kylo.hp;
    document.getElementById("reyName").innerHTML = rey.name;
    document.getElementById("reyHp").innerHTML = rey.hp;
    $("#selection").addClass("hide");
    $("#enemiesSel4").addClass("enemyShow");
    $("#enemiesSel4").removeClass("enemiesSelect4");
    $("#enemiesSel2").addClass("enemyShow");
    $("#enemiesSel2").removeClass("enemiesSelect2");
    $("#enemiesSel3").addClass("enemyShow");
    $("#enemiesSel3").removeClass("enemiesSelect3");
    $("#mazC").toggleClass("hide charaShow");
});
$("#finnS").on("click",function(){
    character = finn;
    
    document.getElementById("charaName").innerHTML = finn.name;
    document.getElementById("charaHp").innerHTML = finn.hp;
    document.getElementById("mazName").innerHTML = maz.name;
    document.getElementById("mazHp").innerHTML = maz.hp;
    document.getElementById("kyloName").innerHTML = kylo.name;
    document.getElementById("kyloHp").innerHTML = kylo.hp;
    document.getElementById("reyName").innerHTML = rey.name;
    document.getElementById("reyHp").innerHTML = rey.hp;
    $("#selection").addClass("hide");
    $("#enemiesSel1").addClass("enemyShow");
    $("#enemiesSel1").removeClass("enemiesSelect1");
    $("#enemiesSel4").addClass("enemyShow");
    $("#enemiesSel4").removeClass("enemiesSelect4");
    $("#enemiesSel3").addClass("enemyShow");
    $("#enemiesSel3").removeClass("enemiesSelect3");
    $("#finnC").toggleClass("hide charaShow");
});
$("#kyloS").on("click",function(){
    character = kylo;
    document.getElementById("charaName").innerHTML = kylo.name;
    document.getElementById("charaHp").innerHTML = kylo.hp;
    document.getElementById("finnName").innerHTML = finn.name;
    document.getElementById("finnHp").innerHTML = finn.hp;
    document.getElementById("mazName").innerHTML = maz.name;
    document.getElementById("mazHp").innerHTML = maz.hp;
    document.getElementById("reyName").innerHTML = rey.name;
    document.getElementById("reyHp").innerHTML = rey.hp;
    $("#selection").addClass("hide");
    $("#enemiesSel1").addClass("enemyShow");
    $("#enemiesSel1").removeClass("enemiesSelect1");
    $("#enemiesSel2").addClass("enemyShow");
    $("#enemiesSel2").removeClass("enemiesSelect2");
    $("#enemiesSel4").addClass("enemyShow");
    $("#enemiesSel4").removeClass("enemiesSelect4");
    $("#kyloC").toggleClass("hide charaShow");
});
$("#reyS").on("click",function(){
    character = rey;
    document.getElementById("charaName").innerHTML = rey.name;
    document.getElementById("charaHp").innerHTML = rey.hp;
    document.getElementById("finnName").innerHTML = finn.name;
    document.getElementById("finnHp").innerHTML = finn.hp;
    document.getElementById("kyloName").innerHTML = kylo.name;
    document.getElementById("kyloHp").innerHTML = kylo.hp;
    document.getElementById("mazName").innerHTML = maz.name;
    document.getElementById("mazHp").innerHTML = maz.hp;
    $("#selection").addClass("hide");
    $("#enemiesSel1").addClass("enemyShow");
    $("#enemiesSel1").removeClass("enemiesSelect1");
    $("#enemiesSel2").addClass("enemyShow");
    $("#enemiesSel2").removeClass("enemiesSelect2");
    $("#enemiesSel3").addClass("enemyShow");
    $("#enemiesSel3").removeClass("enemiesSelect3");
    $("#reyC").toggleClass("hide charaShow");
});

//select an enemy to fight
$("#enemiesSel1").on("click", function(){
    enemy = maz;
    document.getElementById("enemyName").innerHTML = enemy.name;
    document.getElementById("enemyHp").innerHTML = enemy.hp;
    $("#enemiesSel1").removeClass("enemyShow");
    $("#enemiesSel1").addClass("hide");
    $("#defSel1").addClass("enemyShow");
    $("#defSel1").removeClass("enemiesSelect1");
})
$("#enemiesSel2").on("click", function(){
    enemy = finn;
    document.getElementById("enemyName").innerHTML = enemy.name;
    document.getElementById("enemyHp").innerHTML = enemy.hp;
    $("#enemiesSel2").removeClass("enemyShow");
    $("#enemiesSel2").addClass("hide");
    $("#defSel2").addClass("enemyShow");
    $("#defSel2").removeClass("enemiesSelect2");
})
$("#enemiesSel3").on("click", function(){
    enemy = kylo;
    document.getElementById("enemyName").innerHTML = enemy.name;
    document.getElementById("enemyHp").innerHTML = enemy.hp;
    $("#enemiesSel3").removeClass("enemyShow");
    $("#enemiesSel3").addClass("hide");
    $("#defSel3").addClass("enemyShow");
    $("#defSel3").removeClass("enemiesSelect3");
})
$("#enemiesSel4").on("click", function(){
    enemy = rey;
    document.getElementById("enemyName").innerHTML = enemy.name;
    document.getElementById("enemyHp").innerHTML = enemy.hp;
    $("#enemiesSel4").removeClass("enemyShow");
    $("#enemiesSel4").addClass("hide");
    $("#defSel4").addClass("enemyShow");
    $("#defSel4").removeClass("enemiesSelect4");
})


//FIGHT!
$("#btnClick").on("click", function(){
    if(character == maz && character.hp != 0){
        if(enemy == finn && enemy.hp >= 0){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.atk;
            character.atk += character.atk;
            document.getElementById("charaHp").innerHTML = character.hp;
            document.getElementById("enemyHp").innerHTML = enemy.hp;
            console.log(character.hp);
            console.log(character.atk);
            console.log(enemy.hp);
            if(enemy.hp <= 0){
                $("#defSel2").toggleClass("enemyShow enemiesSelect2");
                document.getElementById("enemyName").innerHTML = " ";
                document.getElementById("enemyHp").innerHTML = " ";
            }
        }
        else if(enemy == kylo && enemy.hp >= 0){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.atk;
            character.atk += character.atk;
            document.getElementById("charaHp").innerHTML = character.hp;
            document.getElementById("enemyHp").innerHTML = enemy.hp;
            console.log(character.hp);
            console.log(enemy.hp);
            if(enemy.hp <= 0){
                $("#defSel3").toggleClass("enemyShow enemiesSelect3");
                document.getElementById("enemyName").innerHTML = " ";
                document.getElementById("enemyHp").innerHTML = " ";
            }
        }
        else if(enemy == rey && enemy.hp >= 0){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.atk;
            character.atk += character.atk;
            document.getElementById("charaHp").innerHTML = character.hp;
            document.getElementById("enemyHp").innerHTML = enemy.hp;
            console.log(character.hp);
            console.log(enemy.hp);
            if(enemy.hp <= 0){
                $("#defSel4").toggleClass("enemyShow enemiesSelect4");
                document.getElementById("enemyName").innerHTML = " ";
                document.getElementById("enemyHp").innerHTML = " ";
            }
        }
    }
    if(character == finn && character.hp != 0){
        if(enemy == maz && enemy.hp >= 0){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.atk;
            character.atk += character.atk;
            document.getElementById("charaHp").innerHTML = character.hp;
            document.getElementById("enemyHp").innerHTML = enemy.hp;
            console.log(character.hp);
            console.log(character.atk);
            console.log(enemy.hp);
            if(enemy.hp <= 0){
                $("#defSel1").toggleClass("enemyShow enemiesSelect1");
                document.getElementById("enemyName").innerHTML = " ";
                document.getElementById("enemyHp").innerHTML = " ";
            }
        }
        else if(enemy == kylo && enemy.hp >= 0){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.atk;
            character.atk += character.atk;
            document.getElementById("charaHp").innerHTML = character.hp;
            document.getElementById("enemyHp").innerHTML = enemy.hp;
            console.log(character.hp);
            console.log(enemy.hp);
            if(enemy.hp <= 0){
                $("#defSel3").toggleClass("enemyShow enemiesSelect3");
                document.getElementById("enemyName").innerHTML = " ";
                document.getElementById("enemyHp").innerHTML = " ";
            }
        }
        else if(enemy == rey && enemy.hp >= 0){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.atk;
            character.atk += character.atk;
            document.getElementById("charaHp").innerHTML = character.hp;
            document.getElementById("enemyHp").innerHTML = enemy.hp;
            console.log(character.hp);
            console.log(enemy.hp);
            if(enemy.hp <= 0){
                $("#defSel4").toggleClass("enemyShow enemiesSelect4");
                document.getElementById("enemyName").innerHTML = " ";
                document.getElementById("enemyHp").innerHTML = " ";
            }
        }
    }
    if(character == kylo && character.hp != 0){
        if(enemy == finn && enemy.hp >= 0){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.atk;
            character.atk += character.atk;
            document.getElementById("charaHp").innerHTML = character.hp;
            document.getElementById("enemyHp").innerHTML = enemy.hp;
            console.log(character.hp);
            console.log(character.atk);
            console.log(enemy.hp);
            if(enemy.hp <= 0){
                $("#defSel2").toggleClass("enemyShow enemiesSelect2");
                document.getElementById("enemyName").innerHTML = " ";
                document.getElementById("enemyHp").innerHTML = " ";
            }
        }
        else if(enemy == maz && enemy.hp >= 0){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.atk;
            character.atk += character.atk;
            document.getElementById("charaHp").innerHTML = character.hp;
            document.getElementById("enemyHp").innerHTML = enemy.hp;
            console.log(character.hp);
            console.log(enemy.hp);
            if(enemy.hp <= 0){
                $("#defSel1").toggleClass("enemyShow enemiesSelect1");
                document.getElementById("enemyName").innerHTML = " ";
                document.getElementById("enemyHp").innerHTML = " ";
            }
        }
        else if(enemy == rey && enemy.hp >= 0){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.atk;
            character.atk += character.atk;
            document.getElementById("charaHp").innerHTML = character.hp;
            document.getElementById("enemyHp").innerHTML = enemy.hp;
            console.log(character.hp);
            console.log(enemy.hp);
            if(enemy.hp <= 0){
                $("#defSel4").toggleClass("enemyShow enemiesSelect4");
                document.getElementById("enemyName").innerHTML = " ";
                document.getElementById("enemyHp").innerHTML = " ";
            }
        }
    }
    if(character == rey && character.hp != 0){
        if(enemy == finn && enemy.hp >= 0){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.atk;
            character.atk += character.atk;
            document.getElementById("charaHp").innerHTML = character.hp;
            document.getElementById("enemyHp").innerHTML = enemy.hp;
            console.log(character.hp);
            console.log(character.atk);
            console.log(enemy.hp);
            if(enemy.hp <= 0){
                $("#defSel2").toggleClass("enemyShow enemiesSelect2");
                document.getElementById("enemyName").innerHTML = " ";
                document.getElementById("enemyHp").innerHTML = " ";
            }
        }
        else if(enemy == kylo && enemy.hp >= 0){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.atk;
            character.atk += character.atk;
            document.getElementById("charaHp").innerHTML = character.hp;
            document.getElementById("enemyHp").innerHTML = enemy.hp;
            console.log(character.hp);
            console.log(enemy.hp);
            if(enemy.hp <= 0){
                $("#defSel3").toggleClass("enemyShow enemiesSelect3");
                document.getElementById("enemyName").innerHTML = " ";
                document.getElementById("enemyHp").innerHTML = " ";
            }
        }
        else if(enemy == maz && enemy.hp >= 0){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.atk;
            character.atk += character.atk;
            document.getElementById("charaHp").innerHTML = character.hp;
            document.getElementById("enemyHp").innerHTML = enemy.hp;
            console.log(character.hp);
            console.log(enemy.hp);
            if(enemy.hp <= 0){
                $("#defSel1").toggleClass("enemyShow enemiesSelect1");
                document.getElementById("enemyName").innerHTML = " ";
                document.getElementById("enemyHp").innerHTML = " ";
            }
        }
    }
})

