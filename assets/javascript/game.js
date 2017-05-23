var maz = { name: "Maz", hp: 100 };
var finn = { name: "Finn", hp: 120 };
var kylo = { name: "Kylo", hp: 150 };
var rey = { name: "Rey", hp: 200 };
//this makes selection appear in character spot when image is chosen
$("#mazS").on("click",function(){
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
    $("#enemiesSel1").removeClass("enemyShow");
    $("#enemiesSel1").addClass("hide");
    $("#defSel1").addClass("enemyShow");
    $("#defSel1").removeClass("enemiesSelect1");
})
$("#enemiesSel2").on("click", function(){
    $("#enemiesSel2").removeClass("enemyShow");
    $("#enemiesSel2").addClass("hide");
    $("#defSel2").addClass("enemyShow");
    $("#defSel2").removeClass("enemiesSelect2");
})
$("#enemiesSel3").on("click", function(){
    $("#enemiesSel3").removeClass("enemyShow");
    $("#enemiesSel3").addClass("hide");
    $("#defSel3").addClass("enemyShow");
    $("#defSel3").removeClass("enemiesSelect3");
})
$("#enemiesSel4").on("click", function(){
    $("#enemiesSel4").removeClass("enemyShow");
    $("#enemiesSel4").addClass("hide");
    $("#defSel4").addClass("enemyShow");
    $("#defSel4").removeClass("enemiesSelect4");
})