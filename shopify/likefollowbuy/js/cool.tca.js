// animate URL with emoji's

    let myEmojisA = [
        "🫡",
        "🫡🫡",
        "🫡🫡🫡",
        "🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡🫡",
        "🫡🫡🫡🫡",
        "🫡🫡🫡",
        "🫡🫡",
        "🫡",
        ""
    ];

    let urlAnimate = () => {
        window.location.hash = 
            myEmojisA[Math.floor((Date.now() / 100) % myEmojisA.length)];
            setTimeout(urlAnimate, 70);
    };

    // urlAnimate();

// anim console

    let consoleLoading = (function() {

        let a = ['|', '/', '-', '\\', '|', '/', '-'];
        let b = ['🫡', '🫡🫡', '🫡🫡🫡', '🫡🫡🫡🫡', '🫡🫡🫡', '🫡🫡'];

        let i = 0;

        return setInterval(() => {
            i = (i > 5) ? 0 : i;
            console.clear();
            console.log(b[i]);
            i++;
        }, 300);

    })();

    // clearInterval(consoleLoading)