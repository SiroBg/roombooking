(function() {
    bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    this.stackedCards = function() {
        stackedCards.prototype.defaults = {
            layout: "slide",
            onClick: undefined,
            transformOrigin: "center"
        };

        function stackedCards(options) {
            if (options == null) {
                options = {}
            }
            this.draw = bind(this.draw, this);
            this.config = this.extend(options, this.defaults)
        }
        stackedCards.prototype.init = function() {
            this.element = window.document.documentElement;
            if ((ref = document.readyState) === "interactive" || ref === "complete") {
                this.draw()
            } else {
                document.addEventListener("DOMContentLoaded", this.draw)
            }
        };
        stackedCards.prototype.draw = function() {
            const downloadImage = document.querySelector('#download');
            const addImage = document.querySelector('#add');
            const objectImage = document.querySelector('#object');
            const createImage = document.querySelector('#create');

            const switchContainer = document.querySelector('.switch-buttons');

            switchContainer.addEventListener('click', function(evt){
                if(evt.target.classList.contains('button_type_download')){
                    downloadImage.style.transformOrigin = me.config.transformOrigin;
                    var clickedEl = downloadImage;
                    var nextCnt = 0;
                    var prevCnt = 0;
                    do {
                        var next = clickedEl.nextElementSibling;
                        nextCnt = nextCnt + 1
                    } while (clickedEl = clickedEl.nextElementSibling);
                    clickedEl = downloadImage;
                    do {
                        var prev = clickedEl.previousElementSibling;
                        prevCnt = prevCnt + 1
                    } while (clickedEl = clickedEl.previousElementSibling);
                    me.reCalculateTransformsOnClick(nextCnt - 1, prevCnt - 1);
                    me.loopNodeList(els, function(downloadImage) {
                        downloadImage.classList.remove("active")
                    });
                    downloadImage.classList.add("active");
                    downloadImage.classList.add(me.config.layout);
                    downloadImage.style.zIndex = els.length * 5;
                    downloadImage.style.transform = activeTransform;
                    if (me.config.onClick !== undefined) {
                        me.config.onClick(el)
                    }
                } else if(evt.target.classList.contains('button_type_add')) {
                    addImage.style.transformOrigin = me.config.transformOrigin;
                    var clickedEl = addImage;
                    var nextCnt = 0;
                    var prevCnt = 0;
                    do {
                        var next = clickedEl.nextElementSibling;
                        nextCnt = nextCnt + 1
                    } while (clickedEl = clickedEl.nextElementSibling);
                    clickedEl = addImage;
                    do {
                        var prev = clickedEl.previousElementSibling;
                        prevCnt = prevCnt + 1
                    } while (clickedEl = clickedEl.previousElementSibling);
                    me.reCalculateTransformsOnClick(nextCnt - 1, prevCnt - 1);
                    me.loopNodeList(els, function(addImage) {
                        addImage.classList.remove("active")
                    });
                    addImage.classList.add("active");
                    addImage.classList.add(me.config.layout);
                    addImage.style.zIndex = els.length * 5;
                    addImage.style.transform = activeTransform;
                    if (me.config.onClick !== undefined) {
                        me.config.onClick(el)
                    }
                } else if(evt.target.classList.contains('button_type_object')){
                    objectImage.style.transformOrigin = me.config.transformOrigin;
                    var clickedEl = objectImage;
                    var nextCnt = 0;
                    var prevCnt = 0;
                    do {
                        var next = clickedEl.nextElementSibling;
                        nextCnt = nextCnt + 1
                    } while (clickedEl = clickedEl.nextElementSibling);
                    clickedEl = objectImage;
                    do {
                        var prev = clickedEl.previousElementSibling;
                        prevCnt = prevCnt + 1
                    } while (clickedEl = clickedEl.previousElementSibling);
                    me.reCalculateTransformsOnClick(nextCnt - 1, prevCnt - 1);
                    me.loopNodeList(els, function(objectImage) {
                        objectImage.classList.remove("active")
                    });
                    objectImage.classList.add("active");
                    objectImage.classList.add(me.config.layout);
                    objectImage.style.zIndex = els.length * 5;
                    objectImage.style.transform = activeTransform;
                    if (me.config.onClick !== undefined) {
                        me.config.onClick(el)
                    }
                } else if(evt.target.classList.contains('button_type_create')) {
                    createImage.style.transformOrigin = me.config.transformOrigin;
                    var clickedEl = createImage;
                    var nextCnt = 0;
                    var prevCnt = 0;
                    do {
                        var next = clickedEl.nextElementSibling;
                        nextCnt = nextCnt + 1
                    } while (clickedEl = clickedEl.nextElementSibling);
                    clickedEl = createImage;
                    do {
                        var prev = clickedEl.previousElementSibling;
                        prevCnt = prevCnt + 1
                    } while (clickedEl = clickedEl.previousElementSibling);
                    me.reCalculateTransformsOnClick(nextCnt - 1, prevCnt - 1);
                    me.loopNodeList(els, function(createImage) {
                        createImage.classList.remove("active")
                    });
                    createImage.classList.add("active");
                    createImage.classList.add(me.config.layout);
                    createImage.style.zIndex = els.length * 5;
                    createImage.style.transform = activeTransform;
                    if (me.config.onClick !== undefined) {
                        me.config.onClick(el)
                    }
                }
            });

            var me = this;
            var selector = this.config.selector;
            this.els = document.querySelectorAll(selector + " li");
            var els = this.els;
            this.parent = els[0].parentNode;
            var getItemHeight = els[0].getBoundingClientRect().height;
            els[0].parentNode.style.height = parseInt(getItemHeight) + "px";
            var lenAdjust = els.length % 2 == 0 ? -2 : -1;
            var oneHalf = (els.length + lenAdjust) / 2;
            var activeTransform = "translate(" + -50 + "%, 0%)  scale(1)";
            this.detectSwipe();
            Array.prototype.forEach.call(els, function(el) {
                el.style.transformOrigin = me.config.transformOrigin;
                el.addEventListener("click", function() {
                    var clickedEl = el;
                    var nextCnt = 0;
                    var prevCnt = 0;
                    do {
                        var next = clickedEl.nextElementSibling;
                        nextCnt = nextCnt + 1
                    } while (clickedEl = clickedEl.nextElementSibling);
                    clickedEl = el;
                    do {
                        var prev = clickedEl.previousElementSibling;
                        prevCnt = prevCnt + 1
                    } while (clickedEl = clickedEl.previousElementSibling);
                    me.reCalculateTransformsOnClick(nextCnt - 1, prevCnt - 1);
                    me.loopNodeList(els, function(el) {
                        el.classList.remove("active")
                    });
                    el.classList.add("active");
                    el.classList.add(me.config.layout);
                    el.style.zIndex = els.length * 5;
                    el.style.transform = activeTransform;
                    if (me.config.onClick !== undefined) {
                        me.config.onClick(el)
                    }
                })
            });
            els[0].click()
        };
        stackedCards.prototype.reCalculateTransformsOnClick = function(nextCnt, prevCnt) {
            var z = 10;
            var els = this.nodelistToArray(this.els);
            var scale = 1,
                translateX = 0,
                translateY = 0,
                rotateVal = 0,
                rotate = "";
            var rotateNegStart = 0;
            var transformArr = [];
            var zIndexArr = [];
            var relArr = [];
            var layout = this.config.layout;
            var maxCntDivisor = Math.max(prevCnt, nextCnt);
            var prevDivisor = 100 / maxCntDivisor;
            var nextDivisor = 100 / maxCntDivisor;
            if (prevCnt > nextCnt) {
                scale = 0 + 100 / (prevCnt + 1) / 100
            } else {
                scale = 1 - prevCnt * (1 / (nextCnt + 1))
            }
            var rotatePrevStart = prevCnt * 10 / prevCnt * prevCnt * -1;
            var rotateNextStart = nextCnt * 10 / nextCnt;
            for (var i = 0; i < prevCnt; i++) {
                switch (layout) {
                    case "slide":
                        if (i > 0) {
                            scale = scale + 100 / (maxCntDivisor + 1) / 100
                        }
                        translateX = -50 - prevDivisor * (prevCnt - i);
                        translateY =  prevDivisor / (prevCnt - i);
                        rotate = "rotate(0deg)";
                        break;
                    case "fanOut":
                        rotateVal = rotatePrevStart;
                        if (i > 0) {
                            scale = scale + 100 / (maxCntDivisor + 1) / 100
                        }
                        translateX = -50 - prevDivisor * (prevCnt - i);
                        rotate = "rotate(" + rotateVal + "deg)";
                        rotatePrevStart = rotatePrevStart + prevCnt * 10 / prevCnt;
                        break;
                    default:
                        translateX = (150 - prevDivisor * 2 * i) * -1;
                        rotate = "rotate(0deg)"
                }
                var styleStr = "translate(" + translateX + "%, 0%)  scale(" + scale + ") " + rotate;
                z = z + 1;
                els[i].style.transform = styleStr;
                els[i].style.zIndex = z
            }
            z = z - 1;
            var j = 0;
            rotateNegStart = 0;
            scale = 1;
            for (var i = prevCnt + 1; i < nextCnt + prevCnt + 1; i++) {
                j = j + 1;
                switch (layout) {
                    case "slide":
                        scale = scale - 100 / (maxCntDivisor + 1) / 100;
                        translateX = (50 - nextDivisor * j) * -1;
                        translateY =  prevDivisor * (prevCnt - i) + i*15;
                        rotate = "rotate(0deg)";
                        break;
                    case "fanOut":
                        rotateVal = rotateNextStart;
                        scale = scale - 100 / (maxCntDivisor + 1) / 100;
                        translateX = (50 - nextDivisor * j) * -1;
                        rotate = "rotate(" + rotateVal + "deg)";
                        rotateNextStart = rotateNextStart + nextCnt * 10 / nextCnt;
                        break;
                    default:
                        translateX = (50 - prevDivisor * 2 * i) * -1;
                        rotate = "rotate(0deg)"
                }
                z = z - 1;
                var styleStr = "translate(" + translateX + "%, " + translateY + "%)  scale(1) " + rotate;
                els[i].style.transform = styleStr;
                els[i].style.zIndex = z
            }
        };
        stackedCards.prototype.detectSwipe = function() {
            var me = this;
            var regionEl = document.querySelector(me.config.selector);
            me.detectSwipeDir(regionEl, function(swipedir) {
                var activeEl = document.querySelector(me.config.selector + " li.active");
                if (swipedir == "left") {
                    activeEl.nextElementSibling.click()
                } else if (swipedir == "right") {
                    activeEl.previousElementSibling.click()
                }
            })
        };
        stackedCards.prototype.extend = function(custom, defaults) {
            var key, value;
            for (key in defaults) {
                value = defaults[key];
                if (custom[key] == null) {
                    custom[key] = value
                }
            }
            return custom
        };
        stackedCards.prototype.nodelistToArray = function(nodelist) {
            var results = [];
            var i, element;
            for (i = 0; i < nodelist.length; i++) {
                element = nodelist[i];
                results.push(element)
            }
            return results
        };
        stackedCards.prototype.loopNodeList = function(els, callback, scope) {
            for (var i = 0; i < els.length; i++) {
                callback.call(scope, els[i])
            }
        };
        stackedCards.prototype.scrolledIn = function(el, offset) {
            if (typeof el == "undefined") return;
            var elemTop = el.getBoundingClientRect().top;
            var elemBottom = el.getBoundingClientRect().bottom;
            var scrolledInEl = elemTop >= 0 && elemTop <= window.innerHeight;
            return scrolledInEl
        };
        stackedCards.prototype.detectSwipeDir = function(el, callback) {
            var touchsurface = el,
                swipedir, startX, startY, distX, distY, threshold = 75,
                restraint = 100,
                allowedTime = 300,
                elapsedTime, startTime, handleswipe = callback || function(swipedir) {};
            touchsurface.addEventListener("touchstart", function(e) {
                var touchobj = e.changedTouches[0];
                swipedir = "none";
                dist = 0;
                startX = touchobj.pageX;
                startY = touchobj.pageY;
                startTime = (new Date).getTime();
                e.preventDefault()
            }, false);
            touchsurface.addEventListener("touchmove", function(e) {}, false);
            touchsurface.addEventListener("touchend", function(e) {
                var touchobj = e.changedTouches[0];
                distX = touchobj.pageX - startX;
                distY = touchobj.pageY - startY;
                elapsedTime = (new Date).getTime() - startTime;
                if (elapsedTime <= allowedTime) {
                    if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                        swipedir = distX < 0 ? "left" : "right"
                    } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
                        swipedir = distY < 0 ? "up" : "down"
                    }
                }
                handleswipe(swipedir);
                e.preventDefault()
            }, false)
        };
        return stackedCards
    }()
}).call(this);

var stackedCardSlide = new stackedCards({
    selector: '.stacked-cards-slide',
    layout: "slide",
    transformOrigin: "center",
});

stackedCardSlide.init();

