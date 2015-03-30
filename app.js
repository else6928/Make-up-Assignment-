//Add info button to nav bar: 
function rightButton(win) {
if (!isAndroid()) {
var right = Ti.UI.createButton({
systemButton:Ti.UI.iPhone.SystemButton.INFO_LIGHT
});
right.addEventListener('click',function()
{
alert('button clicked!');
});
win.setRightNavButton(right);
}
}
//Add function to solve android menu problem 
function isAndroid() {
return (Ti.Platform.name == 'android');
function addMenu(win) {
if (isAndroid()) {
//Add function to define pop-up menu
function addMenu(win) {
var activity = win.activity;
activity.onCreateOptionsMenu = function(e){
var firstItem = e.menu.add({ title: 'Peach' });
firstItem.addEventListener("click", function(e) {Ti.API.
debug('Peach'); });
var secondItem = e.menu.add({ title: 'Green Apple'});
secondItem.addEventListener("click", function(e) {Ti.API.
warn('Green Apple'); });
var thirdItem = e.menu.add({ title: 'Grapefruit'});
thirdItem.addEventListener("click", function(e) {alert('Grapefruit'); });
}
};
)
Ti.API.debug('text')
Ti.API.warn('text')

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Fruit',
    backgroundColor:'#009933'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Fruit',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#000F05',
	text:'Pick a delicious fruit!',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);
addMenu(win1);
rightButton(win1); 
//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});



win2.add(label2);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
};
