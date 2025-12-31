        let input = "";
        function append(val) {
            input += val;
            document.getElementById("display").value = input;
        }
        function clearDisplay() {
            input = "";
            document.getElementById("display").value = "";
        }
        function calculate() {
            try {
                document.getElementById("display").value = eval(input);
                input = "";
            } catch {
                alert("Invalid Expression");
            }
        }
