export default function Alert(e) {
	switch(e.code){
		case e.PERMISSION_DENIED:
		 alert('Ви не дозволили визначити місце розташування.');
		break;
		case e.TIMEOUT:
		alert('Час очікування браузером на визначення місця розташування минув.');
		break;
		case e.POSITION_UNAVAILABLE :
		alert('Інформація про місце  розташування недоступна.');
		break;
		case e.UNKNOWN_ERROR:
		alert('Виникла невідома помилка визначення місця розташування.');
		break;
		default:
		alert('Error.code: '+e.code+' Error.message: '+e.message);
		break;
		}
}
