const coverColor = () => {
    const page_color = PAGE_CONFIG.color
    if (page_color){
        setThemeColors(page_color);
        return;
    }
    const path = document.getElementById("post-cover")?.src;
    path ? handleApiColor(path) : setDefaultThemeColors();
}

const handleApiColor = (path) => {
    const cacheGroup = JSON.parse(localStorage.getItem('Solitude')) || {};
    const color = cacheGroup.postcolor?.[path]?.value;
    color ? setThemeColors(color) : img2color(path);
}

const img2color = (src) => {
    fetch(`${src}?imageAve`)
        .then(response => response.json())
        .then(({ RGB }) => {
            RGB = `#${RGB.slice(2)}`;
            setThemeColors(RGB);
            cacheColor(src, RGB);
        })
        .catch(console.error);
}

const setThemeColors = (value) => {
    if (!value) return setDefaultThemeColors();
    const [r, g, b] = value.match(/\w\w/g).map(x => parseInt(x, 16));
    const [main, op, opDeep, none] = [`${value}`, `${value}23`, `${value}dd`, `${value}00`];
    document.documentElement.style.setProperty('--ba-main', main);
    document.documentElement.style.setProperty('--ba-main-op', op);
    document.documentElement.style.setProperty('--ba-main-op-deep', opDeep);
    document.documentElement.style.setProperty('--ba-main-none', none);
    adjustBrightness(r, g, b);
    document.getElementById("coverdiv").classList.add("loaded");
    initThemeColor();
}

const setDefaultThemeColors = () => {
    const vars = ['--ba-theme', '--ba-theme-op', '--ba-theme-op-deep', '--ba-theme-none'];
    vars.forEach((varName, i) => document.documentElement.style.setProperty(['--ba-main', '--ba-main-op', '--ba-main-op-deep', '--ba-main-none'][i], `var(${varName})`));
    initThemeColor();
}

const cacheColor = (src, color) => {
    const cacheGroup = JSON.parse(localStorage.getItem('Solitude')) || { postcolor: {} };
    cacheGroup.postcolor[src] = { value: color, expiration: Date.now() + coverColorConfig.time };
    localStorage.setItem('Solitude', JSON.stringify(cacheGroup));
}

const adjustBrightness = (r, g, b) => {
    if (Math.round(((r * 299) + (g * 587) + (b * 114)) / 1000) < 125) {
        document.querySelectorAll('.card-content').forEach(item =>
            item.style.setProperty('--ba-card-bg', 'var(--ba-white)')
        );
        document.querySelectorAll('.author-info__sayhi').forEach(item => {
            item.style.setProperty('background', 'var(--ba-white-op)');
            item.style.setProperty('color', 'var(--ba-white)');
        });
    }
}