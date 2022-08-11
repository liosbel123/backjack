const miModulo = (() => { "use strict"; let e = [],
        f = ["C", "D", "H", "S"],
        g = ["A", "J", "Q", "K"],
        a = document.querySelector("#btnPedir"),
        b = document.querySelector("#btnDetener"),
        c = document.querySelector("#btnNuevo"),
        h = document.querySelectorAll(".divCartas"),
        i = document.querySelectorAll("small"),
        j = [],
        d = (d = 2) => { e = k(), j = []; for (let c = 0; c < d; c++) j.push(0);
            i.forEach(a => { a.innerHTML = 0 }), h.forEach(a => { a.innerHTML = "" }), b.disabled = !1, a.disabled = !1 },
        k = () => { e = []; for (let a = 2; a <= 10; a++)
                for (let b of f) e.push(a + b); for (let c of f)
                for (let d of g) e.push(d + c); return _.shuffle(e) },
        l = () => { if (0 === e.length) throw "No hay cartas en el deck"; return e.pop() },
        m = b => { let a = b.substring(0, b.length - 1); return isNaN(a) ? "A" === a ? 11 : 10 : 1 * a },
        n = (b, a) => (j[a] = j[a] + m(b), i[a].innerHTML = j[a], j[a]),
        o = (b, c) => { let a = document.createElement("img");
            a.src = `assets/cartas/${b}.png`, a.classList.add("carta"), h[c].append(a) },
        p = () => { let [a, b] = j;
            setTimeout(() => { b === a ? alert("nadie gana :(") : a > 21 ? alert("Computadora gana") : b > 21 ? alert("Jugador gana") : alert("Computadora Gana") }, 100) },
        q = a => { let b = 0;
            do { let c = l();
                b = n(c, j.length - 1), o(c, j.length - 1) } while (b < a && a <= 21) p() }; return a.addEventListener("click", () => { let d = l(),
            c = n(d, 0);
        o(d, 0), c > 21 ? (console.warn("lo siento mucho,Perdiste"), a.disabled = !0, b.disabled = !0, q(c)) : 21 === c && (console.warn("21, Genial!"), a.disabled = !1, b.disabled = !0, q(c)) }), b.addEventListener("click", () => { a.disabled = !0, b.disabled = !0, q(j[0]) }), c.addEventListener("click", () => { d() }), { nuevoJuego: d } })()