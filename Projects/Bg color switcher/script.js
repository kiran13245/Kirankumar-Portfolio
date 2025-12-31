let color = ["#40E0D0","#FF7F50","#6495ED","#FFBF00","#DE3163","#FFA600","#B200FF","#FF005D","#5694EE","#72E824"];
        let i = 0;

        document.querySelector("button").addEventListener("click", () => {
            i = i < color.length - 1 ? i + 1 : 0;
            document.body.style.background = color[i];
        });