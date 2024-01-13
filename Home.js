let richtigeEM = "FiveGuys@gmail.com";
    let richtigePW = "123456";

function Anmelden() 
{
    let em = document.getElementById("email").value;
    let pw = document.getElementById("passwort").value;

    if (em === richtigeEM && pw === richtigePW) 
    {
        console.log("geht");
        alert("Richtig");
    }
    else if (em === richtigeEM || pw === richtigePW)
    {
        if (em === richtigeEM)
        {
            console.log("Passwort falsch");
            alert("Passwort Falsch");
        }
        else 
        {
            console.log("Email Falsch");
            alert("Email Falsch")
        }
    }
    else 
    {
        console.log("Kaka");
        alert("Kaka");
    }
}

//Buttons die zu anderen Seiten führen

function infoSeite()
{
    window.location.href = "Infos/Infos.html";
}
function registrierenSeite()
{
    window.location.href = "Registrieren/Registrieren.html"
}