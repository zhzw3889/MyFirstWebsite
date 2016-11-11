 /**
 * @author: John Zhu
 * @description:
 * @Date: 2016/11/09
 */
/*焦点轮播图*/
window.onload = function () {
    var picBox = document.getElementById('picBox');
    var pic = document.getElementById('pic');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;//For marking the buttons.
    var timer;//For autoplay

    /**
     * [lightButton description]:to light the active button
     */
    function lightButton() {
    	//clear the className at first
    	for (var i = 0; i < buttons.length; i++) {
    		if (buttons[i].className == 'on') {
    			buttons[i].className = '';
    			break;
    		}
    	}

		buttons[index-1].className = 'on';
    }

    /**
     * [animate description]:For arrows
     * @param  {[type]} offset [picture's width]
     */
 	function animate(offset) {
 		newleft = parseInt(pic.style.left) + offset;

        pic.style.left = newleft + 'px';

        //Make it be a circle, head to end and end to head.
        if (newleft > -784) {
        	pic.style.left = -3920 + 'px';
        }
        if (newleft < -3920) {
        	pic.style.left = -784 + 'px';
        }
 	}

 	/**
 	 * For autoplay
 	 */
 	function play() {
 		timer = setInterval(function () {
 			next.onclick();	
 		}, 3000);//Call once every 3000ms
 	}
 	function stop() {
 		clearInterval(timer);
 	}

 	//When click "next" narrow.
    next.onclick = function () {
    	if (index == 5) {
    		index = 1;
    	} 
    	else {
    		index += 1;
    	}//when at right border
    	lightButton();
    	animate(-784);
    }

    //When click "prev" narrow.
    prev.onclick = function () {
    	if (index == 1) {
    		index = 5;
    	} 
    	else {
    		index -= 1;
    	}//when at left border
    	lightButton();
    	animate(784);
    }

    //When click a little button.
    for (var i = 0; i < buttons.length; i++) {
    	if (this.className == 'on') {
    		return;
    	}//Jump the loop if clicking a working button.

    	buttons[i].onclick = function () {
    		var newIndex = parseInt(this.getAttribute('index'));
	    	var	offset = -784 * (newIndex - index);

	    	animate(offset);
	    	index = newIndex;
	    	lightButton();
    	}
    }
    picBox.onmouseover = stop;
    picBox.onmouseout = play;

    play();//autoplay
}

 