a = document.getElementsByTagName('LABEL');
if(a) {
	for(i=0; i < a.length; i++) {
		_str = a.item(i).innerHTML.replace(/:\)\)/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif' alt='' class='smiley'/>");
		_str = _str.replace(/:d/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif' alt='' class='smiley'/>");
		_str = _str.replace(/\;\)/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif' alt='' class='smiley'/>");
		_str = _str.replace(/:p/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif' alt='' class='smiley'/>");
		_str = _str.replace(/:\(\(/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif' alt='' class='smiley'/>");
		_str = _str.replace(/:\)/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif' alt='' class='smiley'/>");
		_str = _str.replace(/:\(/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:\|/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif' alt='' class='smiley'/>"); 
		_str = _str.replace(/\=\)\)/ig,"<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif' alt='' class='smiley'/>")
		a.item(i).innerHTML = _str;
	}
}

a = document.getElementById('comments');
if(a) {
	b = a.getElementsByTagName("DD");
	for(i=0; i < b.length; i++) {
            if (b.item(i).getAttribute('CLASS') == 'comment-body') {
                _str = b.item(i).innerHTML.replace(/:\)\)/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:\)\]/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/100.gif' alt='' class='smiley'/>");
		_str = _str.replace(/;\)\)/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/71.gif' alt='' class='smiley'/>");
		_str = _str.replace(/;\;\)/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif' alt='' class='smiley'/>");
		_str = _str.replace(/:d/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif' alt='' class='smiley'/>");
                _str = _str.replace(/\;\)/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:p/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:\(\(/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:\)/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:\(/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:x/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif' alt='' class='smiley'/>");
                _str = _str.replace(/=\(\(/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/12.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:\-\o/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/13.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:-\//gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/7.gif' alt='' class='smiley'/>"); 
                _str = _str.replace(/:-\*/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/11.gif' alt='' class='smiley'/>"); 
		_str = _str.replace(/:\|/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/22.gif' alt='' class='smiley'/>"); 
                _str = _str.replace(/8-\}/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/35.gif' alt='' class='smiley'/>"); 
		_str = _str.replace(/~x\(/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/102.gif' alt='' class='smiley'/>");
		_str = _str.replace(/:-t/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/104.gif' alt='' class='smiley'/>");  
                _str = _str.replace(/b-\(/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/66.gif' alt='' class='smiley'/>"); 
		_str = _str.replace(/:-\L/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/62.gif' alt='' class='smiley'/>"); 
		_str = _str.replace(/x\(/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/14.gif' alt='' class='smiley'/>"); 
		_str = _str.replace(/\=\)\)/ig,"<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif' alt='' class='smiley'/>")
                b.item(i).innerHTML = _str;
            }
	}
}

a = document.getElementById('comments');
if(a) {
	c = a.getElementsByTagName("DD");
	for(i=0; i < c.length; i++) {
            if (c.item(i).getAttribute('CLASS') == 'owner-Body') {
                _str = c.item(i).innerHTML.replace(/:\)\)/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif' alt='' class='smiley'/>");
		_str = _str.replace(/:\)\]/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/100.gif' alt='' class='smiley'/>");                
		_str = _str.replace(/;\)\)/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/71.gif' alt='' class='smiley'/>");
		_str = _str.replace(/;\;\)/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif' alt='' class='smiley'/>");
		_str = _str.replace(/:d/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif' alt='' class='smiley'/>");
                _str = _str.replace(/\;\)/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:p/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:\(\(/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:\)/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:\(/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:x/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif' alt='' class='smiley'/>");
                _str = _str.replace(/=\(\(/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/12.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:\-\o/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/13.gif' alt='' class='smiley'/>");
                _str = _str.replace(/:-\//gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/7.gif' alt='' class='smiley'/>"); 
                _str = _str.replace(/:-\*/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/11.gif' alt='' class='smiley'/>"); 
		_str = _str.replace(/:\|/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/22.gif' alt='' class='smiley'/>"); 
		_str = _str.replace(/8-\}/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/35.gif' alt='' class='smiley'/>"); 
		_str = _str.replace(/~x\(/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/102.gif' alt='' class='smiley'/>");
		_str = _str.replace(/:-t/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/104.gif' alt='' class='smiley'/>");  
                _str = _str.replace(/b-\(/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/66.gif' alt='' class='smiley'/>"); 
		_str = _str.replace(/:-\L/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/62.gif' alt='' class='smiley'/>"); 
		_str = _str.replace(/x\(/gi, "<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/14.gif' alt='' class='smiley'/>"); 
		_str = _str.replace(/\=\)\)/ig,"<img src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif' alt='' class='smiley'/>")
                c.item(i).innerHTML = _str;
            }
	}
}