function helloConsole() {
    const staticText = 'Made with ❤️ by Demiweb';
    const staticUrl = '> https://demiweb.pro/';
    const hello = [`\n %c ${staticText} %c ${staticUrl} %c %c \n\n`, 'border: 1px solid #000;color: #fff; background: #3d2579; padding:5px 0;', 'color: #fff; background: #ffd800; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];

    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        window.console.log(`${staticText} - ${staticUrl}`);
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        let title = '%c';

        for (let i = 0; i < 12; i++) {
            title += ' ';
        }

        window.console.log.apply(console, hello);
        window.console.log(title, 'font: 36px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYwMS4xNDQ3MSAxMzkuNjk5MiIKICAgaGVpZ2h0PSIxMzkiCiAgIHdpZHRoPSI2MDEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg2LjQyMzU1LC04My41MTk0NDQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsLTI2NC4zMSwtMjIxLjYzMTM5KSIKICAgICAgIGlkPSJnODg4Ij4KICAgICAgPGcKICAgICAgICAgaWQ9Imc4MjkiPgoJPHBhdGgKICAgZD0ibSA2NDcuOTQ5LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjcgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OSB2IDYxLjY4MyBoIC0xNDguNTggdiA2Ni4xODcgaCAxNzEuMDkxIHYgNjEuNjg0IEggNjQ3Ljk0OSBaIgogICBpZD0icGF0aDgxNSIgLz4KCgk8cGF0aAogICBkPSJtIDk0OS42MDksMTQ2OS4zOTcgdiAtMzE1LjE3IGggNzQuNzQgbCA4Mi44NDQsMTMzLjI3MSA4Mi44NDQsLTEzMy4yNzEgaCA3NC43NDEgdiAzMTUuMTcgaCAtNjguODg3IHYgLTIwNS43NjIgbCAtODguNjk4LDEzNC42MjMgaCAtMS44MDEgbCAtODcuNzk3LC0xMzMuMjcxIHYgMjA0LjQxIHoiCiAgIGlkPSJwYXRoODE3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTM0My41NjgsMTQ2OS4zOTcgdiAtMzE1LjE3IGggNjkuMzM4IHYgMzE1LjE3IHoiCiAgIGlkPSJwYXRoODE5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTU3NC45OTMsMTQ3MS42NDcgLTEwNy42MDcsLTMxNy40MiBoIDc0LjI4OCBsIDY1LjI4NiwyMTMuNDE0IDcwLjY4OCwtMjE0LjMxNSBoIDU5LjQzMiBsIDcwLjY4OCwyMTQuMzE1IDY1LjI4MiwtMjEzLjQxNCBoIDcyLjQ5MyBsIC0xMDcuNjEsMzE3LjQyIGggLTYwLjMzIGwgLTcxLjEzOCwtMjA2LjIxMSAtNzEuMTQsMjA2LjIxMSB6IgogICBpZD0icGF0aDgyMSIgLz4KCgk8cGF0aAogICBkPSJtIDE5OTYuODY2LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjYgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OCB2IDYxLjY4MyBoIC0xNDguNTc4IHYgNjYuMTg3IGggMTcxLjA5MiB2IDYxLjY4NCBoIC0yMzkuOTc4IHoiCiAgIGlkPSJwYXRoODIzIiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjI5OC41MjYsMTQ2OS4zOTcgdiAtMzE1LjE3IGggMTQ2LjMyOCBjIDM2LjMxNiwwIDYzLjc4MSw5LjMwOCA4Mi4zOTYsMjcuOTE1IDE0LjQwNywxNC40MDcgMjEuNjExLDMyLjU3MSAyMS42MTEsNTQuNDc5IDAsMjkuNzE2IC0xMy44MSw1Mi4zODEgLTQxLjQyMyw2Ny45ODUgMTkuNTA4LDcuNTA3IDM0LjIxOSwxNy4zMzUgNDQuMTIyLDI5LjQ5MSA5LjkwNiwxMi4xNTYgMTQuODU3LDI4LjQ0MyAxNC44NTcsNDguODUyIDAsMjguMjE3IC0xMC41MDksNDkuNjgyIC0zMS41MTYsNjQuMzgzIC0yMS4wMTUsMTQuNzExIC00OS44MjksMjIuMDY0IC04Ni40NDYsMjIuMDY0IGggLTE0OS45MjkgeiBtIDY3LjUzOCwtMTg3Ljc1MSBoIDYzLjkzNCBjIDMzLjMxNiwwIDQ5Ljk3NywtMTEuNDA0IDQ5Ljk3NywtMzQuMjE4IDAsLTEwLjUwNCAtMy45MDYsLTE4LjUzMSAtMTEuNzA5LC0yNC4wODggLTcuODA3LC01LjU1MSAtMTkuMDY0LC04LjMzIC0zMy43NjYsLTguMzMgaCAtNjguNDM2IHogbSAwLDEyNi45NjggaCA4Mi4zOTMgYyAzMi43MTQsMCA0OS4wNzYsLTExLjcwNyA0OS4wNzYsLTM1LjExOSAwLC0yMi44MDggLTE3LjEwOSwtMzQuMjE5IC01MS4zMjcsLTM0LjIxOSBoIC04MC4xNDIgeiIKICAgaWQ9InBhdGg4MjUiIC8+CgoJPHBhdGgKICAgZD0ibSA1MzkuNDQyLDExOTkuMDI2IGMgLTMxLjIyMiwtMjkuODYzIC03MS40NDEsLTQ0Ljc5OCAtMTIwLjY2NiwtNDQuNzk4IEggMjk1Ljg2MiB2IDE5MC43NjUgaCA2OS4zMzYgdiAtMTI4LjE4MiBoIDUzLjU3OCBjIDI4LjIxLDAgNTEuMTAzLDguODU3IDY4LjY2MiwyNi41NjQgMTcuNTYsMTcuNzE1IDI2LjMzOSw0MC41MjMgMjYuMzM5LDY4LjQzNyAwLDI4LjIxOCAtOC43MDksNTEuMTAyIC0yNi4xMTMsNjguNjYyIC0xNy40MTIsMTcuNTU5IC00MC4zNzUsMjYuMzM4IC02OC44ODgsMjYuMzM4IGggLTUzLjU3OCB2IC0wLjY1NCBoIC02OS4zMzYgdiA2My4yNCBoIDEyMi45MTUgYyA0OC45MjIsMCA4OS4wNzEsLTE1LjAwOCAxMjAuNDQsLTQ1LjAyNSAzMS4zNjIsLTMwLjAxMiA0Ny4wNTEsLTY3LjUzNiA0Ny4wNTEsLTExMi41NjEgMCwtNDUuMzE5IC0xNS42MTIsLTgyLjkxNiAtNDYuODI2LC0xMTIuNzg2IHoiCiAgIGlkPSJwYXRoODI3IiAvPgoKPC9nPgogICAgICA8ZwogICAgICAgICBpZD0iZzg1NyI+Cgk8cGF0aAogICBkPSJtIDI5NC4zNzQsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC44OSB2IDE0Ni41OSB6IgogICBpZD0icGF0aDgzMSIgLz4KCgk8cGF0aAogICBkPSJtIDM4Ny45NzksMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjMgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IEwgMzk4LjQ1LDE1NDguNTU2IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDgzMyIgLz4KCgk8cGF0aAogICBkPSJNIDYzMS43MzYsMTY3OC44MSBWIDE1NDIuMjczIEggNTgwLjY0IHYgLTEwLjA1MyBoIDExMy4wODQgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDgzNSIgLz4KCgk8cGF0aAogICBkPSJtIDc2NC41MDUsMTY3OC44MSB2IC0xNDYuNTkgaCAxMDQuMjg5IHYgMTAuMDUzIGggLTkzLjM5OSB2IDU3LjU5IGggODMuOTc2IHYgMTAuMDUxIGggLTgzLjk3NiB2IDU4Ljg0NiBoIDk0LjQ0NiB2IDEwLjA1MSBIIDc2NC41MDUgWiIKICAgaWQ9InBhdGg4MzciIC8+CgoJPHBhdGgKICAgZD0ibSA5NDIuNTA2LDE2NzguODEgdiAtMTQ2LjU5IGggNjEuNTY4IGMgMTcuODY5LDAgMzEuNjIyLDQuODE4IDQxLjI1NSwxNC40NTEgNy4zOTgsNy40MDIgMTEuMDk4LDE2LjYxNSAxMS4wOTgsMjcuNjQzIDAsMTEuODY3IC0zLjkxLDIxLjM1OSAtMTEuNzI3LDI4LjQ4IC03LjgyLDcuMTE5IC0xOC4yMTksMTEuNTkgLTMxLjIwMiwxMy40MDIgbCA0OC4zNzUsNjIuNjEzIGggLTEzLjgyMSBsIC00Ni43LC02MC43MyBoIC00Ny45NTYgdiA2MC43MyBoIC0xMC44OSB6IG0gMTAuODksLTcwLjU3MyBoIDQ5LjQyMSBjIDEyLjU2NSwwIDIyLjgyNywtMy4wMzUgMzAuNzg1LC05LjEwNyA3Ljk1OCwtNi4wNzQgMTEuOTM3LC0xNC4zNDYgMTEuOTM3LC0yNC44MTYgMCwtOS45MSAtMy43MDIsLTE3LjcyOSAtMTEuMSwtMjMuNDU1IC03LjQwMiwtNS43MjMgLTE3LjczMiwtOC41ODYgLTMwLjk5MywtOC41ODYgaCAtNTAuMDUgeiIKICAgaWQ9InBhdGg4MzkiIC8+CgoJPHBhdGgKICAgZD0ibSAxMTMxLjYwNiwxNjc4LjgxIHYgLTE0Ni41OSBoIDEwLjI2MiBsIDEwMS4xNDYsMTI3LjUzNSBWIDE1MzIuMjIgaCAxMC40NyB2IDE0Ni41OSBoIC04LjE2NyBsIC0xMDMuMjQxLC0xMzAuMjU0IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDg0MSIgLz4KCgk8cGF0aAogICBkPSJtIDEzMjIuMTcyLDE2NzguODEgNjguMjcsLTE0Ny42MzUgaCAxMC40NzEgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzOCBsIC0xOC42MzYsLTQxLjA0NSBoIC04Ni40ODkgbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU0LC01MC44ODUgaCA3Ny4yNzUgbCAtMzguNTM0LC04NC44MTQgeiIKICAgaWQ9InBhdGg4NDMiIC8+CgoJPHBhdGgKICAgZD0ibSAxNTc4LjQ5NSwxNjc4LjgxIHYgLTEzNi41MzcgaCAtNTEuMDk5IHYgLTEwLjA1MyBoIDExMy4wODUgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDg0NSIgLz4KCgk8cGF0aAogICBkPSJtIDE3MTIuNzI4LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTQ2LjU5IHoiCiAgIGlkPSJwYXRoODQ3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTkyNi41NCwxNjU4LjkxNSBjIC0xMy44MjYsMTQuOTQxIC0zMS41NTYsMjIuNDA4IC01My4xOTIsMjIuNDA4IC0yMS42NDMsMCAtMzkuMzAxLC03LjQzNCAtNTIuOTgzLC0yMi4zMDMgLTEzLjY4NCwtMTQuODY3IC0yMC41MjIsLTMyLjcwMSAtMjAuNTIyLC01My41MDQgMCwtMjAuNjYyIDYuOTEsLTM4LjQ2MSAyMC43MzEsLTUzLjQwMiAxMy44MiwtMTQuOTM4IDMxLjU1MSwtMjIuNDA2IDUzLjE5MywtMjIuNDA2IDIxLjYzNywwIDM5LjI5Niw3LjQzNCA1Mi45NzksMjIuMzAzIDEzLjY4MywxNC44NjkgMjAuNTI1LDMyLjcwMyAyMC41MjUsNTMuNTA2IDAsMjAuNjYyIC02LjkxMiwzOC40NjIgLTIwLjczMSw1My4zOTggeiBtIC05Ny40ODMsLTYuNzAxIGMgMTEuOTM2LDEyLjg0OCAyNi44MzYsMTkuMjcgNDQuNzEsMTkuMjcgMTcuODY4LDAgMzIuNywtNi4zNTIgNDQuNTAxLC0xOS4wNTkgMTEuNzk0LC0xMi43MDMgMTcuNjk0LC0yOC4zNCAxNy42OTQsLTQ2LjkwOCAwLC0xOC4yODkgLTUuOTY5LC0zMy44NTQgLTE3LjkwNCwtNDYuNjk5IC0xMS45MzgsLTEyLjg0NCAtMjYuODQyLC0xOS4yNjggLTQ0LjcxLC0xOS4yNjggLTE3Ljg3NSwwIC0zMi43MDcsNi4zNTUgLTQ0LjUwMiwxOS4wNTcgLTExLjc5OSwxMi43MDUgLTE3LjY5MywyOC4zNDQgLTE3LjY5Myw0Ni45MSAtMTBlLTQsMTguMjkxIDUuOTY1LDMzLjg1NSAxNy45MDQsNDYuNjk3IHoiCiAgIGlkPSJwYXRoODQ5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjAyMi4wMjgsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjEgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IGwgLTEwMy4yNCwtMTMwLjI1NCB2IDEzMC4yNTQgeiIKICAgaWQ9InBhdGg4NTEiIC8+CgoJPHBhdGgKICAgZD0ibSAyMjEyLjU5MywxNjc4LjgxIDY4LjI3LC0xNDcuNjM1IGggMTAuNDcgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzNSBsIC0xOC42MzksLTQxLjA0NSBoIC04Ni40ODggbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU2LC01MC44ODUgaCA3Ny4yNzEgbCAtMzguNTMzLC04NC44MTQgeiIKICAgaWQ9InBhdGg4NTMiIC8+CgoJPHBhdGgKICAgZD0ibSAyNDI4LjI5LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTM2LjUzOSBoIDg2LjA2NSB2IDEwLjA1MSB6IgogICBpZD0icGF0aDg1NSIgLz4KCjwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);');
    } else {
        const title = 'demiweb';
        const banner = `\n%c${title.split('').join('%c %c')}%c\n`;
        const styler = [];

        const symbol = [
            'font: 32px/1.5 Helvetica, Arial, sans-serif',
            'text-transform: uppercase',
            'color: #fff',
            'background-color: #ffd800',
            'padding: 4px 14px',
        ].join(';');

        title.split('').forEach(() => {
            styler.push(symbol);
            styler.push('');
        });

        window.console.log(`${staticText} - ${staticUrl}`);
        window.console.log(banner, ...styler);
    }
}

helloConsole();

let allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();


//animations scroll

let burgerBtns = [...document.querySelectorAll('.burger-button')];

function hideOpeners() {
    let opens = [...document.querySelectorAll('.open')];
    if (!opens.length) {

    } else {
        opens.forEach((opn) => {
            opn.classList.remove('open');
        });
    }
}

function openBurger() {
    if (!burgerBtns.length) {

    } else {
        burgerBtns.forEach((btn) => {
            btn.addEventListener('click', () => {

                if (btn.closest('.burger-container').classList.contains('open')) {
                    hideOpeners();
                    document.body.classList.remove('no-scroll');
                } else {
                    document.body.classList.remove('no-scroll');
                    hideOpeners();
                    btn.closest('.burger-container').classList.toggle('open');

                }

            })
        })
        document.body.addEventListener('click', (e) => {
            if (e.target.closest('.burger-container')) {

            } else {
                document.querySelector('.burger-container').classList.remove('open');
            }
        })

    }
}

openBurger();

let catalogBtn = [...document.querySelectorAll('.catalog-btn')];

function catalogFnc() {
    if (!catalogBtn.length) {

    } else {
        catalogBtn.forEach((btn) => {
            btn.addEventListener('click', () => {

                if (btn.classList.contains('open')) {
                    hideOpeners();
                    document.body.classList.remove('no-scroll');
                } else {
                    btn.classList.toggle('open');
                    document.querySelector('.catalog').classList.toggle('open');
                    document.querySelector('.backcover').classList.toggle('open');
                    document.body.classList.add('no-scroll');
                }


            })
        })
        document.querySelector('.backcover').addEventListener('click', () => {
            hideOpeners();
            document.body.classList.remove('no-scroll');
        })
    }
}

catalogFnc();

let searchIcon = [...document.querySelectorAll('.search-icon')];

function openSearch() {
    if (!searchIcon.length) {

    } else {
        searchIcon.forEach((btn) => {
            btn.addEventListener('click', () => {

                if (btn.closest('.search-block').classList.contains('open')) {
                    hideOpeners();
                    document.body.classList.remove('no-scroll');
                } else {
                    hideOpeners();
                    btn.closest('.search-block').classList.toggle('open');

                }
            })

        })
    }
}

openSearch();

//sliders

let homeBanner = [...document.querySelectorAll('.js-slider.home-banner')];

function homeBanSlider() {
    if (!homeBanner.length) {

    } else {
        homeBanner.forEach((sld) => {
            let sldCont = sld.querySelector('.slider-banner');
            let pagin = sld.querySelector('.dots');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                speed: 600,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: {
                    delay: 4000,
                    pauseOnMouseEnter: true,
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',

                },
            });
        })
    }
}

homeBanSlider();

let miniCatalog = [...document.querySelectorAll('.js-slider.catalog-mini')];

function miniCatSlider() {
    if (!miniCatalog.length) {

    } else {
        miniCatalog.forEach((sld) => {
            let sldCont = sld.querySelector('.catalog-mini__container');
            let pagin = sld.querySelector('.dots');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                speed: 660,
                simulateTouch: true,
                draggable: true,
                freeMode: true,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },

                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',

                },
                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px
                    600: {
                        draggable: true,
                        simulateTouch: true,
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        autoplay: {
                            delay: 5000,
                            pauseOnMouseEnter: true,
                        },
                        freeMode: false,

                    },
                    // when window width is >= 640px
                    900: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,

                    },
                    1300: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    }
                }
            });
        })
    }
}

miniCatSlider();


let semiCat = [...document.querySelectorAll('.js-slider.semi-cat')];

function semiCatSlider() {
    if (!semiCat.length) {

    } else {
        semiCat.forEach((sld) => {
            let sldCont = sld.querySelector('.semi-cat__container');
            let pagin = sld.querySelector('.dots');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                speed: 660,
                simulateTouch: true,
                draggable: true,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                spaceBetween: 10,

                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',


                },
                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px
                    600: {
                        draggable: true,
                        simulateTouch: true,
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        autoplay: {
                            delay: 5000,
                            pauseOnMouseEnter: true,
                        },

                    },
                    // when window width is >= 640px
                    900: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,

                    },
                    1300: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 30
                    }
                }
            });
        })
    }
}

semiCatSlider();


let prodRow = [...document.querySelectorAll('.js-slider.row-items')];

function rowSlider() {
    if (!prodRow.length) {

    } else {
        prodRow.forEach((sld) => {
            let sldCont = sld.querySelector('.row-items__container');
            let pagin = sld.querySelector('.dots');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 660,
                simulateTouch: true,
                draggable: true,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                spaceBetween: 10,
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',


                },
                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px
                    480: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                    },
                    600: {
                        draggable: true,
                        simulateTouch: true,
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                        autoplay: {
                            delay: 5000,
                            pauseOnMouseEnter: true,
                        },

                    },
                    // when window width is >= 640px
                    900: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                        spaceBetween: 20

                    },
                    1300: {
                        slidesPerView: 4,
                        slidesPerGroup: 1,
                        spaceBetween: 30
                    }
                }
            });
        })
    }
}

rowSlider();


let brandsSlides = [...document.querySelectorAll('.js-slider.our-brands')];

function brandSlider() {
    if (!brandsSlides.length) {

    } else {
        brandsSlides.forEach((sld) => {
            let sldCont = sld.querySelector('.brands-list');
            let pagin = sld.querySelector('.dots');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 660,
                simulateTouch: true,
                draggable: true,
                freeMode: true,
                spaceBetween: 18,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },

                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',

                },
                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px
                    600: {
                        draggable: true,
                        simulateTouch: true,
                        slidesPerView: 4,
                        slidesPerGroup: 2,
                        spaceBetween: 18,
                        autoplay: {
                            delay: 5000,
                            pauseOnMouseEnter: true,
                        },
                        freeMode: false,

                    },
                    // when window width is >= 640px
                    900: {
                        slidesPerView: 5,
                        slidesPerGroup: 2,
                        spaceBetween: 42,
                        freeMode: false,

                    },
                    1300: {
                        slidesPerView: 6,
                        slidesPerGroup: 2,
                        freeMode: false,
                    }
                }
            });
        })
    }
}

brandSlider();

let cardPhotosBlock1 = [...document.querySelectorAll('.card-slider-1')];

function startPhotosSlider2() {
    if (!cardPhotosBlock1.length) {

    } else {
        cardPhotosBlock1.forEach((blc) => {
            let mainSlides = blc.querySelector('.card-slider__container');
            let thumbsSlides = blc.querySelector('.card-slider__thumbs');

            var swiperThumb = new Swiper(thumbsSlides, {
                spaceBetween: 5,
                slidesPerView: 3,
                freeMode: false,
                watchSlidesProgress: true,
                direction: 'horizontal',
                centeredSlides: true,
                loop: true,
                draggable: true,
                breakpoints: {
                    // when window width is >= 320px
                    320: {},
                    // when window width is >= 480px
                    480: {},
                    // when window width is >= 640px
                    1400: {
                        direction: 'vertical',
                    }
                }
            });
            var swiper2 = new Swiper(mainSlides, {
                spaceBetween: 10,
                slidesPerView: 1,
                loop: true,
                thumbs: {
                    swiper: swiperThumb,
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            });
        })
    }
}

startPhotosSlider2();

//sliders
let cardThumbsSlides = [...document.querySelectorAll('.card-slider__thumbs .card-slide a')];

function offLinkCard() {
    if (!cardThumbsSlides.length) {

    } else {
        cardThumbsSlides.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            })
        })
    }
}

offLinkCard();
$('.rating-stars').raty(
    {
        readOnly: true,
        starHalf: './img/star-clear.svg',
        starOn: './img/star.svg',
        starOff: '.img/star-clear.svg',
        hints: ['a', null, '', null, '', null]
    }
);

let favBtn = [...document.querySelectorAll('.fav')];

function addFav() {
    if (!favBtn.length) {

    } else {
        favBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
            })
        })
    }
}

addFav();


$('.sort-select').niceSelect();


let modalWindows = [...document.querySelectorAll('.modal-window')];

function modalControl() {
    if (!modalWindows.length) {

    } else {
        modalWindows.forEach((mdl) => {
            mdl.addEventListener('click', () => {
                document.body.classList.remove('no-scroll');
                mdl.classList.remove('active');
            });
            mdl.querySelector('.modal-container').addEventListener('click', (e) => {
                e.stopPropagation();

            });
            mdl.querySelector('.close-modal').addEventListener('click', () => {
                mdl.classList.remove('active');
                document.body.classList.remove('no-scroll');
            })

        })
    }
}

modalControl();

let cartIcon = [...document.querySelectorAll('.cart')];

function openCart() {
    if (!cartIcon.length) {

    } else {
        cartIcon.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--cart').classList.add('active');
                document.body.classList.add('no-scroll');

            })
        })
    }
}

openCart();

let passWordInput = [...document.querySelectorAll('.password')];

function showPassword() {
    if (!passWordInput.length) {

    } else {
        passWordInput.forEach((btn) => {
            let icon = btn.querySelector('.icon');
            icon.addEventListener('click', () => {
                btn.classList.toggle('show-pass');
                if (btn.classList.contains('show-pass')) {
                    btn.querySelector('input').type = 'text';
                } else {
                    btn.querySelector('input').type = 'password';

                }
            })
        })
    }
}

showPassword();


let openModAccMenu = [...document.querySelectorAll('.acc-current')];

function openAccMenu() {
    if (!openModAccMenu.length) {

    } else {
        openModAccMenu.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.account-list').classList.toggle('open');
            })
        })
    }
}

openAccMenu();

let redactInput = [...document.querySelectorAll('.account-redact .line p')];

function openRedactInput() {
    if (!redactInput.length) {

    } else {
        redactInput.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.line').querySelector('.input-cont').classList.toggle('disabled');
            })
        })
    }
}

openRedactInput();


let orderDetails = [...document.querySelectorAll('.acc-order__top')];

function openOrderDetails() {
    if (!orderDetails.length) {

    } else {
        orderDetails.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.acc-order').classList.toggle('active');
            })
        })
    }
}

openOrderDetails();

let btnOpenComment = [...document.querySelectorAll('.r-open')];

function openCommentText() {
    if (!btnOpenComment.length) {

    } else {
        btnOpenComment.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.acc-reviews__rev').classList.toggle('open');

            })
        })
    }
}

openCommentText();

let usefulInfo = [...document.querySelectorAll('.usef-info > span')];

function openUseful() {
    if (!usefulInfo.length) {

    } else {
        usefulInfo.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.usef-info').classList.toggle('active');
            })
        })
    }
}

openUseful();

let tabBtn = [...document.querySelectorAll('.tab-btn')];

function changeTab() {
    if (!tabBtn.length) {

    } else {
        tabBtn.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    [...document.querySelectorAll('.item-tab')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');
                        } else {
                            tab.classList.remove('active');

                        }
                    })
                }
            })
        })
    }
}

changeTab();

//checkout

let checkoutTabLogin = [...document.querySelectorAll('.checkout-tab')];
let checkoutTabLoginTab = [...document.querySelectorAll('.step__tabs-content-tab')];

function changeLoginTabCheckout() {
    if (!checkoutTabLogin.length) {

    } else {
        checkoutTabLogin.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    checkoutTabLogin.forEach((btn2, m) => {
                        if (m === k) {
                            btn2.classList.add('active');

                        } else {
                            btn2.classList.remove('active');
                        }
                    })
                    checkoutTabLoginTab.forEach((btn3, m) => {
                        if (m === k) {
                            btn3.classList.add('active');

                        } else {
                            btn3.classList.remove('active');
                        }
                    })
                }
            })
        })
    }
}

let checkoutHeadTabs = [...document.querySelectorAll('.checkout-step__head')];

function changeCheckoutHead() {
    if (!checkoutHeadTabs.length) {

    } else {
        checkoutHeadTabs.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.closest('.checkout-step').classList.contains('active')) {

                } else {
                    checkoutHeadTabs.forEach((btn2, m) => {
                        if (m === k) {
                            btn2.closest('.checkout-step').classList.add('active');

                        } else {
                            btn2.closest('.checkout-step').classList.remove('active');
                        }
                    })
                }
            })
        })
    }
}

changeLoginTabCheckout();
changeCheckoutHead();
//checkout

let startsRateModal = [...document.querySelectorAll('.rate-stars .rate')];

function hoverStarsRate() {
    if (!startsRateModal.length) {

    } else {
        startsRateModal.forEach((st, k) => {
            let number = k + 1;
            st.addEventListener('mouseover', () => {
                st.classList.add('hover');
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.add('hover');
                }
            })
            st.addEventListener('mouseout', () => {
                st.classList.remove('hover');
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.remove('hover');
                }
            })
            st.addEventListener('click', () => {
                startsRateModal.forEach((st2) => {
                    st2.classList.remove('clicked');
                })
                st.classList.add('clicked');
                st.closest('.rate-list').querySelector('p strong').innerHTML = number;
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.add('clicked');
                }
            })
        })
    }
}

hoverStarsRate();


let btnsItem = [...document.querySelectorAll('.prod-info__buttons .btn')];

function btnModals() {
    if (!btnsItem.length) {

    } else {
        btnsItem.forEach((btn) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('go-share')) {
                    document.querySelector('.modal-window--share').classList.add('active');
                    document.body.classList.add('no-scroll');
                } else if (btn.classList.contains('go-question')) {
                    document.querySelector('.modal-window--quest').classList.add('active');
                    document.body.classList.add('no-scroll');
                } else if (btn.classList.contains('go-comment')) {
                    document.querySelector('.modal-window--comment').classList.add('active');
                    document.body.classList.add('no-scroll');
                }
            })
        })
    }
}

btnModals();

let oneClick = [...document.querySelectorAll('.prod-info__buy a')];

function btnModalsOne() {
    if (!oneClick.length) {

    } else {
        oneClick.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.querySelector('.modal-window--click').classList.add('active');
                document.body.classList.add('no-scroll');

            })
        })
    }
}

btnModalsOne();

let prodBtnBuy = [...document.querySelectorAll('.prod-item .btn')];

function buyBtnClick() {
    if (!prodBtnBuy.length) {

    } else {
        prodBtnBuy.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (btn.classList.contains('black-btn')) {
                    btn.classList.remove('black-btn');
                    btn.innerHTML = btn.dataset.not;
                } else {
                    btn.classList.add('black-btn');
                    btn.innerHTML = btn.dataset.buy;
                }
            })
        })
    }
}
buyBtnClick();