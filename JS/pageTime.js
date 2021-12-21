res = (function() {
    var per = window.performance.getEntriesByType("navigation")

    var loadTime = (window.performance.timing.domLoading - window.performance.timing.navigationStart);

    return loadTime;
})();

document.getElementById("loadtime").innerHTML = "Page load time is <font color='red'><b>" + res + "</b></font> milliSeconds";