(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var demo,
            methods,
            btn_fold = document.getElementById('fold');

        demo = new OriDomi('.demo3', {
            vPanels: 9,
            ripple: true,
            shading: false
        });

        methods = ['accordion', 'fracture', 'stairs', 'twist'];
        
        setTimeout(function() {
            return btn_fold.click();
        }, 1900);

        return btn_fold.addEventListener('click', function(e) {

            var angle, el, method, n;
            el = e.target;
            method = methods[Math.floor(Math.random() * methods.length)];
            angle = Math.floor(Math.random() * 80 * (Math.random() > .5 ? -1 : 1));
            demo[method](angle);
            return el.parentNode.getElementsByClassName('label')[0].innerHTML = "" + method + "(" + angle + ")";

        }, false);

    });

}).call(this);