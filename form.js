let name= document.getElementById('enterText');
    name.addEventListener('keyup', captureName);
    function captureName() {
        let output=document.getElementById('finText');
        output.innerHTML =name.value;
    } 