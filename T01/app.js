function calculateLuck() {
    let name = document.getElementById("name").value.trim(),
        result = document.getElementById("result");
    
    if (!name) return result.innerHTML = "<span style='color:red'>Please enter your name!</span>";

    let luck = Math.floor(Math.random() * 101),
        msg = luck > 80 ? "🌟 You're extremely lucky today!" :
              luck > 50 ? "😊 You have good luck on your side!" :
              luck > 20 ? "🤞 A bit of luck is there, make the most of it!" :
                          "😅 Luck is taking a nap... better be careful!";
        resultDiv.style.color = "#333";   

        document.getElementById("output").innerText = "" + result
}